from django.shortcuts import render

# Create your views here.
from rest_framework import generics, status, permissions
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from .models import User, UserProfile
from .serializers import CreateStaffSerializer, UserSerializer,UserSignupSerializer,UserProfileSerializer
from rest_framework.decorators import api_view, permission_classes

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['user_type'] = user.user_type
        token['name'] = user.name
        return token

class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer

class CreateStaffView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = CreateStaffSerializer
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, *args, **kwargs):
        if request.user.user_type != 'master_admin':
            return Response({"error": "Only Master Admin can create staff."}, status=status.HTTP_403_FORBIDDEN)
        
        data = request.data
        data['user_type'] = 'staff'  # Force user_type to staff
        serializer = self.get_serializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class UserSignupView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSignupSerializer
    permission_classes = [permissions.AllowAny]

@api_view(['GET'])
@permission_classes([permissions.IsAuthenticated])
def get_user_profile(request):
    user = request.user
    print("user",user)
    serializer = UserSerializer(user)
    return Response(serializer.data)

class UserProfileCreateView(generics.CreateAPIView):
    serializer_class = UserProfileSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class UserProfileUpdateView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = UserProfileSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return UserProfile.objects.filter(user=self.request.user)

    def delete(self, request, *args, **kwargs):
        profile = self.get_object()
        profile.delete()
        return Response({'detail': 'Profile deleted successfully'}, status=status.HTTP_204_NO_CONTENT)
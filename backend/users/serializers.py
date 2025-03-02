from rest_framework import serializers
from .models import User,UserProfile

class UserSignupSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email','phone', 'name', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'name','phone', 'user_type']

class CreateStaffSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email','phone', 'name', 'password', 'user_type']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['id', 'user', 'address', 'date_of_birth', 'profile_picture']
        read_only_fields = ['user']
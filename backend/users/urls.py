from django.urls import path
from .views import CreateStaffView, CustomTokenObtainPairView, get_user_profile,UserSignupView,\
    UserProfileCreateView, UserProfileUpdateView

from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('signup/', UserSignupView.as_view(), name='user_signup'),
    path('login/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('create-staff/', CreateStaffView.as_view(), name='create_staff'),
    path('profile/', get_user_profile, name='user_profile'),
    path('profile/create/', UserProfileCreateView.as_view(), name='create_user_profile'),
    path('profile/manage/', UserProfileUpdateView.as_view(), name='manage_user_profile'),

]

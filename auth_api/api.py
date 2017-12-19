from django.contrib.auth import authenticate, login, logout

# csrf protect a view
from django.views.decorators.csrf import csrf_protect

# decorate a method instead of a class
from django.utils.decorators import method_decorator

from rest_framework import status, views
from rest_framework.response import Response

from .serializers import UserSerializer

# class instantiation taking an argument declares inheritance
# creates a session for this user if he exists
class LoginView(views.APIView):

    # decorators are functions that take function args and return function
    # this requires a csrf token, so need to configure django to create one
    # by decorating the function that is the login view
    @method_decorator(csrf_protect)
    def post(self, request):
        user = authenticate(username=request.data.get('username'),
                    password=request.data.get('password'))

        if user is None or not user.is_active:
            return Response({
                'status': 'Unauthorized',
                'message': 'Username or password incorrect'
            }, status=status.HTTP_401_UNAUTHORIZED)

        login(request, user)
        return Response(UserSerializer(user).data)


# removes the user's session from the db if he was logged in
class LogoutView(views.APIView):

    def get(self, request):
        logout(request)
        return Response({}, status=status.HTTP_204_NO_CONTENT)

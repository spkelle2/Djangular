from django.contrib.auth.models import User

from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):

    class Meta:

        # don't create user model, use the one django provides
        model = User

        # specify what attributes to send to the front end
        fields = ('id', 'username')

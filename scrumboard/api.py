from rest_framework.viewsets import ModelViewSet # provides set of views
# from rest_framework.generics import ListAPIView # serves lists of objects

from rest_framework import permissions

from .serializers import ListSerializer, CardSerializer
from .models import List, Card

# view sets implement basic rest methods (get, post, etc.) from APIViews

class ListViewSet(ModelViewSet):

    # the set of objects queried
    queryset = List.objects.all()

    # how to convert between python and JSON
    serializer_class = ListSerializer
    
    # only allow logged in users to change/see
    permission_classes = (permissions.IsAuthenticated,)


# for example, when post request made to /scrumboard/cards/, function from
# ModelViewSet handles the db write
class CardViewSet(ModelViewSet):
    queryset = Card.objects.all()
    serializer_class = CardSerializer
    permission_classes = (permissions.IsAuthenticated,)



from rest_framework.viewsets import ModelViewSet # provides set of views
# from rest_framework.generics import ListAPIView # serves lists of objects


from .serializers import ListSerializer, CardSerializer
from .models import List, Card

# view sets implement basic rest methods (get, post, etc.)

class ListViewSet(ModelViewSet):

    # which object to serve
    queryset = List.objects.all()

    # how to convert between python and JSON
    serializer_class = ListSerializer


class CardViewSet(ModelViewSet):
    queryset = Card.objects.all()
    serializer_class = CardSerializer

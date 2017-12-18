# need this to render html for homepage
from django.conf.urls import url
from django.views.generic import TemplateView

#
from rest_framework.routers import DefaultRouter
from .api import ListViewSet, CardViewSet

# create router object which makes simple url mappings for rest api
router = DefaultRouter()

# create urls for these sets of views: register(hostname, viewset)
router.register(r'lists', ListViewSet)
router.register(r'cards', CardViewSet)

urlpatterns = router.urls



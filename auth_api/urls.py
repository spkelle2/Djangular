from django.conf.urls import url

# refers URL to instructions in our api code
from .api import LoginView, LogoutView

urlpatterns = [
    url(r'^login/$', LoginView.as_view()),
    url(r'^logout/$', LogoutView.as_view()),
]

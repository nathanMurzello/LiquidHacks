from django.urls import path
from django.conf.urls import url
from api import views

urlpatterns = [
    url(r'^slideshow$',views.slideshowApi),
    url(r'^slideshow/([0-9]+)$',views.slideshowApi),
   # path('home', SlideshowView.as_view() )
]
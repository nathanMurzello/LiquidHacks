from api.models import SlideShow
from rest_framework import viewsets, permissions
from .serializers import SlideshowSerializer

# Slideshow Viewset
class SlideshowViewSet(viewsets.ModelViewSet):
    queryset=SlideShow.objects.all()
    permission_classes= [
        permissions.AllowAny
    ]
    serializer_class=SlideshowSerializer

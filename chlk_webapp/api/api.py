from api.models import SlideShow
from rest_framework import viewsets, permissions
from .serializers import SlideshowSerializer

# Slideshow Viewset
class SlideshowViewSet(viewsets.ModelViewSet):
    permission_classes= [
        permissions.IsAuthenticated
    ]

    serializer_class=SlideshowSerializer

    def get_queryset(self):
        return self.request.user.slideshows.all()
    
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
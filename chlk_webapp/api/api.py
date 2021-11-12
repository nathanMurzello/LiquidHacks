from api.models import SlideShow, Room
from rest_framework import viewsets, permissions, status
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import SlideshowSerializer, RoomSerializer, CreateRoomSerializer

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

# Room Viewset
class RoomViewSet(viewsets.ModelViewSet):
    permission_classes= [
        permissions.IsAuthenticated
    ]

    serializer_class=RoomSerializer

    def get_queryset(self):
        return Room.objects.all()
    
    def perform_create(self, serializer):
        serializer.save(host=self.request.user)

class CreateRoomView(APIView):
    serializer_class=CreateRoomSerializer
    def post(self, request, format=None):
        serializer=self.serializer_class(data=request.data) 
        print(request.data)
        if serializer.is_valid():
            slideshow=serializer.data.get('slideshow')
            room=Room(host=self.request.user, slideshow=slideshow)
            room.save()
            print(RoomSerializer(room).data)
            return Response (RoomSerializer(room).data)
        return Response ({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)
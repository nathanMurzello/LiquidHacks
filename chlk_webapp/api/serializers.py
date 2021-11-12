from rest_framework import serializers 
from .models import SlideShow, Room

class SlideshowSerializer(serializers.ModelSerializer):
    class Meta: 
        model=SlideShow
        fields='__all__'

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ('__all__')

class CreateRoomSerializer(serializers.ModelSerializer):
    class Meta:
        model=Room
        fields=('slideshow',)
from rest_framework import serializers 
from .models import SlideShow

class SlideshowSerializer(serializers.ModelSerializer):
    class Meta: 
        model=SlideShow
        fields=('id','name', 'created_on', 'slides')

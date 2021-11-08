from django.shortcuts import render
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from .serializers import SlideshowSerializer 
from .models import SlideShow
from django.views.decorators.csrf import csrf_exempt

# Create your views here.

@csrf_exempt
def slideshowApi(request, id=0):
    if request.method=='GET':
        slideshows= SlideShow.objects.all()
        print(slideshows)
        slideshows_serializer=SlideshowSerializer(slideshows, many=True)
        return JsonResponse(slideshows_serializer.data, safe=False)
    
    elif request.method=='POST':
        print(request)
        slideshow_data=JSONParser().parse(request)
        slideshow_serializer=SlideshowSerializer(data=slideshow_data)
        print(slideshow_serializer)
        if slideshow_serializer.is_valid():
            slideshow_serializer.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse("Failed to add", safe=False)
    
    elif request.method=='PUT':                                                #Update requires sending full data. 
        slideshow_data=JSONParser().parse(request)
        slideshow=SlideShow.objects.get(id=slideshow_data['id'])
        slideshow_serializer=SlideshowSerializer(slideshow, data=slideshow_data)
        print(slideshow_serializer)
        if slideshow_serializer.is_valid():
            slideshow_serializer.save()
            return JsonResponse("Update Successful",safe=False)
        return JsonResponse("Failed to Update", safe=False)
    
    elif request.method=='DELETE':
        slideshow_data=JSONParser().parse(request)
        slideshow=SlideShow.objects.get(id=slideshow_data['id'])
        slideshow.delete()
        return JsonResponse("Deleted Successfully", safe=False)

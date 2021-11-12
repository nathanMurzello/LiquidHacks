from djongo import models
from django.contrib.auth.models import User

import string
import random

# Create your models here.
class Slide(models.Model):
    type=models.IntegerField(primary_key=True) #can make this the index of the slide in the slideshow
    title=models.CharField(max_length=500)
    bullet1=models.CharField(max_length=500)
    bullet2=models.CharField(max_length=500)
    bullet3=models.CharField(max_length=500)
    class Meta:
        managed=False

class SlideShow(models.Model):
   # SlideshowID=models.AutoField(primary_key=True)
    name=models.CharField(max_length=60)
    created_on=models.DateTimeField(auto_now_add=True)
    slides=(models.ArrayField(model_container=Slide))
    owner= models.ForeignKey(User, related_name="slideshows", on_delete=models.CASCADE, null=True)

#for generating temporary room code
def generate_unique_code():
    length = 4

    while True:
        code = ''.join(random.choices(string.ascii_uppercase, k=length))
        if Room.objects.filter(code=code).count() == 0:
            break

    return code

class Room(models.Model):
    code = models.CharField(max_length=8, default=generate_unique_code, unique=True)
    host = models.ForeignKey(User, related_name="rooms", on_delete=models.CASCADE, null=True)
    slideshow=models.IntegerField(unique=True)

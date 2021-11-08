from djongo import models


# Create your models here.
class Slide(models.Model):
    type=models.IntegerField(primary_key=True) #1=title slide, 2=content slide, NOT a primary key used as workaround for bug
    content=models.CharField(max_length=500)
    class Meta:
        managed=False

class SlideShow(models.Model):
   # SlideshowID=models.AutoField(primary_key=True)
    name=models.CharField(max_length=60)
    created_on=models.DateTimeField(auto_now_add=True)
    slides=(models.ArrayField(model_container=Slide))
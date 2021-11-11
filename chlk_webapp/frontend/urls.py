from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('TeacherHome', index),
    path('StudentHome', index),
    path('SlideEditor', index)
]

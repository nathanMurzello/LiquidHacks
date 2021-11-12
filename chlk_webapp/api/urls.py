from rest_framework import routers
from django.urls import include, path
from .api import SlideshowViewSet, RoomViewSet, CreateRoomView

router=routers.DefaultRouter()
router.register('api/Slideshows', SlideshowViewSet, 'Slideshows')
router.register('api/Rooms', RoomViewSet, 'Rooms')
urlpatterns = [ 
    path('', include(router.urls)),
    path('api/create-room', CreateRoomView.as_view()),
]
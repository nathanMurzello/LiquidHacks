from rest_framework import routers
from .api import SlideshowViewSet

router=routers.DefaultRouter()
router.register('api/Slideshows', SlideshowViewSet, 'Slideshows')

urlpatterns=router.urls
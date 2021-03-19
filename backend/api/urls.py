from rest_framework import routers
from .views import ResumeViewSet

router = routers.DefaultRouter()
router.register('api/resume', ResumeViewSet, 'resume')

urlpatterns = router.urls
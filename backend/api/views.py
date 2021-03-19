from rest_framework import viewsets, permissions
from .models import Resume
from .serializers import ResumeSerializer

# Lead Viewset


class ResumeViewSet(viewsets.ModelViewSet):
    queryset = Resume.objects.all()
    serializer_class = ResumeSerializer
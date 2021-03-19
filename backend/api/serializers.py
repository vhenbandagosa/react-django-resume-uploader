from rest_framework import serializers
from .models import Resume 

# Lead Serializer
class ResumeSerializer(serializers.ModelSerializer):
  class Meta:
    model = Resume 
    fields = '__all__'
from django.db import models

# Create your models here.
class Resume(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(max_length=250)
    file = models.FileField(default="")
    created_at = models.DateTimeField(auto_now_add=True)
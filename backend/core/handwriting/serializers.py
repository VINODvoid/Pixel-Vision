from rest_framework import serializers
from .models import UploadedImage, OCRResult

class UploadedImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = UploadedImage
        fields = ('id', 'image', 'uploaded_at')

class OCRResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = OCRResult
        fields = ('id', 'uploaded_image', 'ocr_text', 'processed_at')
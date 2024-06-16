# handwriting/views.py

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import UploadedImage, OCRResult
from .serializers import UploadedImageSerializer, OCRResultSerializer
import pytesseract
from PIL import Image

@api_view(['POST'])
def upload_image(request):
    serializer = UploadedImageSerializer(data=request.data)
    if serializer.is_valid():
        uploaded_image = serializer.save()
        # Perform OCR using pytesseract
        image_path = uploaded_image.image.path
        ocr_text = pytesseract.image_to_string(Image.open(image_path))
        # Save OCR result
        ocr_result = OCRResult.objects.create(uploaded_image=uploaded_image, ocr_text=ocr_text)
        ocr_result.save()
        return Response(OCRResultSerializer(ocr_result).data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

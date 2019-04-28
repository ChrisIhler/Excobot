## setup logging
import logging
logging.basicConfig(level = logging.INFO)

## import the package
import numpy as np
import cv2
import sys

cap = cv2.VideoCapture(0)

while(True):
    # Capture frame-by-frame
    ret, frame = cap.read()

    # Our operations on the frame come here
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

    # Display the resulting frame
    success,image = cap.read() 
    print(cv2.imencode('.jpg', image)[1].tobytes())

# When everything done, release the capture
cap.release()
cv2.destroyAllWindows()
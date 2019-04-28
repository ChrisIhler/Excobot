import cv2
import pyrealsense as pyrs
from base_camera import BaseCamera


class Camera(BaseCamera):
    video_source = 0


    @staticmethod
    def set_video_source(source):
 

        cnt = 0
        last = time.time()
        smoothing = 0.9
        fps_smooth = 30

    @staticmethod
    def frames():
        rssv = pyrs.Service()
        dev = rssv.Device()        
        dev.apply_ivcam_preset(0)
        #camera = cv2.VideoCapture(Camera.video_source)
        #cv2.VideoCapture.set(camera, 3,640)
        #cv2.VideoCapture.set(camera, 4,480)
        #cv2.VideoCapture.set(camera, 5,30)                
        #cv2.VideoCapture.set(camera, 16, True)
        #if not camera.isOpened():
        #    raise RuntimeError('Could not start camera.')
            
        while True:
            dev.wait_for_frames()
            c = dev.color
            c = cv2.cvtColor(c, cv2.COLOR_RGB2BGR)

            # read current frame
            #_, img = camera.read()

            #fRgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
            # encode as a jpeg image and return it
            yield cv2.imencode('.jpg', c)[1].tobytes()

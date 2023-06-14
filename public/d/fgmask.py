from __future__ import print_function
import sys
import cv2 as cv
import argparse

#parser = argparse.ArgumentParser(description='This program shows how to use background subtraction methods provided by OpenCV. You can process both videos and images.')
#parser.add_argument('--input', type=str, help='Path to a video or a sequence of image.', default='vtest.avi')
#parser.add_argument('--algo', type=str, help='Background subtraction method (KNN, MOG2).', default='MOG2')
#args = parser.parse_args()

font = cv.FONT_HERSHEY_SIMPLEX
fontSize = 2
fontThickness = 3
    
def main(argv):
    if (len(sys.argv) < 2):
        print('Not enough parameters')
        print('Usage:\nfgmask.py <source_video>')
        return -1
    
    global font
    global fontSize
    global fontThickness

    #if args.algo == 'MOG2':
    backSub = cv.createBackgroundSubtractorMOG2()
    #else:
        #backSub = cv.createBackgroundSubtractorKNN()

    #global backSub
    
    capture = cv.VideoCapture(sys.argv[1])

    if not capture.isOpened():
        print('Unable to open: ' + sys.argv[1])
        exit(0)

    while True:
        ret, frame = capture.read()
        if frame is None:
            break

        fgMask = backSub.apply(frame)

        #cv.rectangle(fgMask, (10, 2), (100,20), (255,255,255), -1)
        cv.putText(fgMask, str(capture.get(cv.CAP_PROP_POS_FRAMES)), (15, 500),
                   font, fontSize, (255,255,255), fontThickness, cv.LINE_AA)


        #cv.imshow('Frame', frame)
        cv.imshow('FDL Analysis (FG Mask)', fgMask)

        keyboard = cv.waitKey(30)
        if keyboard == ord("q"):
            break

if __name__ == "__main__":
    main(sys.argv[1:])
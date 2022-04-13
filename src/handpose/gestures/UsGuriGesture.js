import * as fp from 'fingerpose';

const usGuriGesture = new fp.GestureDescription("dusGuri")

for ( let finger of [fp.Finger.Thumb, fp.Finger.Ring]) {
    usGuriGesture.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
    usGuriGesture.addCurl(finger, fp.FingerCurl.HalfCurl, 0.9);
}

for ( let finger of [fp.Finger.Index, fp.Finger.Middle, fp.Finger.Pinky]) {
    usGuriGesture.addCurl(finger, fp.Finger.NoCurl, 1.0);
    usGuriGesture.addDirection(finger, finger.VerticalUp, 1.0);
}

export default usGuriGesture;
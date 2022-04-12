import * as fp from "fingerpose"

const numberOneGesture = new fp.GestureDescription("one");
//index
numberOneGesture.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 1.0);
numberOneGesture.addCurl(fp.Finger.Index, fp.Finger.NoCurl);

for(let finger of [fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky,fp.Finger.Thumb]){
    numberOneGesture.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
    numberOneGesture.addCurl(finger, fp.FingerCurl.HalfCurl, 0.9);
}

export default numberOneGesture;
import * as fp from "fingerpose"


const rockGesture = new fp.GestureDescription("rock");

//index
rockGesture.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 1.0);
rockGesture.addCurl(fp.Finger.Index, fp.Finger.NoCurl);
//pinky
rockGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.VerticalUp, 1.0);
rockGesture.addCurl(fp.Finger.Pinky, fp.Finger.NoCurl);

for( let finger of [fp.Finger.Ring, fp.Finger.Middle, fp.Finger.Thumb]){
    rockGesture.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
    rockGesture.addCurl(finger, fp.FingerCurl.HalfCurl, 0.9);
}

export default rockGesture
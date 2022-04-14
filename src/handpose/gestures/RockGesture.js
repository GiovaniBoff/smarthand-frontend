import * as fp from "fingerpose"


const rockGesture = new fp.GestureDescription('rock');

//index
rockGesture.addCurl(fp.Finger.Index, fp.Finger.NoCurl);
// rockGesture.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 0.9);

//pinky
rockGesture.addCurl(fp.Finger.Pinky, fp.Finger.NoCurl);
//rockGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.VerticalUp, 0.9);


for( let finger of [fp.Finger.Ring, fp.Finger.Middle, fp.Finger.Thumb]){
    rockGesture.addCurl(finger, fp.FingerCurl.FullCurl, 1.9);
    rockGesture.addCurl(finger, fp.FingerCurl.HalfCurl, 0.9);
}

export default rockGesture
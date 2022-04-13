import * as fp from "fingerpose"


const hangLooseGesture = new fp.GestureDescription('hang_loose');

//index
hangLooseGesture.addCurl(fp.Finger.Thumb, fp.Finger.NoCurl);
// rockGesture.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 0.9);

//pinky
hangLooseGesture.addCurl(fp.Finger.Pinky, fp.Finger.NoCurl);
//rockGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.VerticalUp, 0.9);


for( let finger of [fp.Finger.Ring, fp.Finger.Middle, fp.Finger.Index]){
    hangLooseGesture.addCurl(finger, fp.FingerCurl.FullCurl, 1.9);
    hangLooseGesture.addCurl(finger, fp.FingerCurl.HalfCurl, 0.9);
}

export default hangLooseGesture
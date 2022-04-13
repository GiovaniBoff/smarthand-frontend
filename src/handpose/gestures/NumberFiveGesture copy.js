import * as fp from "fingerpose";

const numberFourGesture = new fp.GestureDescription("four");

numberFourGesture.addCurl(fp.Finger.Thumb,fp.FingerCurl.FullCurl,1.0);
numberFourGesture.addCurl(fp.Finger.Thumb,fp.FingerCurl.HalfCurl,1.0);

for( let finger of [fp.Finger.Index, fp.Finger.Ring, fp.Finger.Pinky, fp.Finger.Middle]){
    numberFourGesture.addCurl(finger,fp.FingerCurl.NoCurl);
}

export default numberFourGesture;
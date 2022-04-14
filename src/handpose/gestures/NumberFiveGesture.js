import * as fp from "fingerpose";

const numberFiveGesture = new fp.GestureDescription("five");


for( let finger of [fp.Finger.Index, fp.Finger.Ring, fp.Finger.Pinky, fp.Finger.Thumb, fp.Finger.Middle]){
    numberFiveGesture.addCurl(finger,fp.FingerCurl.NoCurl);
}

export default numberFiveGesture;
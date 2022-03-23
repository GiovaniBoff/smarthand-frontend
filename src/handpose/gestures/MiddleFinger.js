import * as fp from "fingerpose";

const middleFingerDesc = new fp.GestureDescription("middle_finger");

// thumb:
middleFingerDesc.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalUp, 1.0);


// index:
middleFingerDesc.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
middleFingerDesc.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 1.0);

// middle:
middleFingerDesc.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1.0);
middleFingerDesc.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 1.0);


// ring:
middleFingerDesc.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
middleFingerDesc.addCurl(fp.Finger.Ring, fp.FingerCurl.HalfCurl, 0.9);

// pinky:
middleFingerDesc.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);
middleFingerDesc.addCurl(fp.Finger.Pinky, fp.FingerCurl.HalfCurl, 0.9);

export default middleFingerDesc;
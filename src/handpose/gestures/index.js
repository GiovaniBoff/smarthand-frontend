import * as fp from 'fingerpose'

import middleFingerGesture from "./MiddleFinger";
import numberOneGesture from './NumberOneGesture';
import numberThreeGesture from './NumberThreeGesture';
import rockGesture from './RockGesture';
import thumbsDownGesture from "./ThumbsDownGesture";

const gestures = [
    fp.Gestures.VictoryGesture,
    fp.Gestures.ThumbsUpGesture,
    middleFingerGesture,
    thumbsDownGesture,
    rockGesture,
    numberOneGesture,
    numberThreeGesture
];

export default gestures;
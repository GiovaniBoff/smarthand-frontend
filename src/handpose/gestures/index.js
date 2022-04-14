import * as fp from 'fingerpose'
import hangLooseGesture from './HangLooseGesture';

import middleFingerGesture from "./MiddleFinger";
import numberFiveGesture from './NumberFiveGesture';
import numberFourGesture from './NumberFiveGesture copy';
import numberOneGesture from './NumberOneGesture';
import numberThreeGesture from './NumberThreeGesture';
import rockGesture from './RockGesture';
import thumbsDownGesture from "./ThumbsDownGesture";
import usGuriGesture from './UsGuriGesture';

const gestures = [
    fp.Gestures.VictoryGesture,
    fp.Gestures.ThumbsUpGesture,
    middleFingerGesture,
    rockGesture,
    hangLooseGesture,
    numberOneGesture,
    numberThreeGesture,
    numberFourGesture,
    numberFiveGesture,
    usGuriGesture,
];

export default gestures;
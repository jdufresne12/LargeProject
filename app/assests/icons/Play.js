import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { COLORS } from "../../constants/theme";

const Play = () => (
    <Svg xmlns="http://www.w3.org/2000/svg" width="35" height="20" fill={COLORS.primary} class="bi bi-play-fill" viewBox="0 0 16 16">
        <Path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
    </Svg>
);

export default Play;
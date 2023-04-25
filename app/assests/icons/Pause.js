import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { COLORS } from "../../constants/theme";

const Pause = () => (
    <Svg xmlns="http://www.w3.org/2000/svg" width="35" height="40" fill={COLORS.primary} class="bi bi-pause-fill" viewBox="0 0 16 16">
        <Path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>
    </Svg>
);

export default Pause;

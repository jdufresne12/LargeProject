import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { COLORS } from "../../constants/theme";

const Logout = () => (
  <Svg
    width={25}
    height={25}
    fill={COLORS.primary}
    class="bi bi-arrow-bar-right"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8Zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5Z"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      transform="translate(8, 8) rotate(180) translate(-8, -8)"
    />
  </Svg>
);

export default Logout;

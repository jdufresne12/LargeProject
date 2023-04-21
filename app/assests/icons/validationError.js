import * as React from "react";
import { Svg, Path } from "react-native-svg";
import { COLORS } from "../../constants/theme";
const validationError = () => (
  <Svg width={50} height={50} viewBox="0 0 100 150">
    <Path
      d="M85.429 85.078H4.571c-1.832 0-3.471-0.947-4.387-2.533C-0.732 81.959-0.732 80.066 0 78.48L40.613 7.455c0.916-1.586 2.555-2.533 4.386-2.533s3.471 0.947 4.387 2.533l40.429 70.025c0.916 1.586 0.916 3.479 0.001 5.065C88.901 84.131 87.261 85.078 85.429 85.078zM45 7.922c-0.747 0-1.416 0.386-1.79 1.033L2.782 78.979c-0.373 0.646-0.373 1.419 0 2.065 0.374 0.647 1.042 1.033 1.789 1.033h80.858c0.747 0 1.416-0.387 1.789-1.033s0.373-1.419 0-2.065L46.789 8.955C46.416 8.308 45.747 7.922 45 7.922zM45 75.325c-4.105 0-7.446-3.34-7.446-7.445s3.34-7.445 7.446-7.445 7.445 3.34 7.445 7.445S49.106 75.325 45 75.325zM45 63.435c-2.451 0-4.446 1.994-4.446 4.445s1.995 4.445 4.446 4.445 4.445-1.994 4.445-4.445S47.451 63.435 45 63.435zM45 57.146c-3.794 0-6.882-3.087-6.882-6.882V34.121c0-3.794 3.087-6.882 6.882-6.882s6.881 3.087 6.881 6.882v16.144C51.881 54.06 48.794 57.146 45 57.146zM45 30.239c-2.141 0-3.882 1.741-3.882 3.882v16.144c0 2.141 1.741 3.882 3.882 3.882 2.14 0 3.881-1.741 3.881-3.882V34.121C48.881 31.98 47.14 30.239 45 30.239z"
      fill="red"
    />
  </Svg>
);
export default validationError;
import React from 'react';
import { View } from 'react-native';
import Svg, { Line } from 'react-native-svg';
import { Dimensions, StyleSheet } from "react-native";
const { width: ScreenWidth } = Dimensions.get("screen");
import { COLORS } from '../../constants/theme'

const MySvgLine = () => {
  return (
    <View style={{flex: 2}}>
      <Svg height="200" width={ScreenWidth}>
        <Line
          x1='0'
          y1="0"
          x2={ScreenWidth*.5}
          y2="200"
          stroke={COLORS.primary}
          strokeWidth="10"
        />
        <Line
          x1={ScreenWidth*.5}
          y1="200"
          x2={ScreenWidth}
          y2="0"
          stroke={COLORS.primary}
          strokeWidth="10"
        />
      </Svg>      
    </View>
  );
};

export default MySvgLine;
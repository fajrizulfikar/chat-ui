import {
  Dimensions,
  PixelRatio,
  Platform,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const scale = width / 320;

const FontRatio = (size) => {
  const newSize = size * scale;

  if (Platform.OS == 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};

export default FontRatio;

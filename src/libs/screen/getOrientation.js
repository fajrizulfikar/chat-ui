import {
  useState,
  useEffect,
} from 'react';
import { Dimensions } from 'react-native';

const getOrientation = () => {
  const [orientation, setOrientation] = useState('portrait');

  useEffect(() => {
    Dimensions.addEventListener('change', ({ window: {width, height}}) => {
      if (width < height) {
        setOrientation('portrait');
      } else {
        setOrientation('landscape');
      }
    });
  }, []);

  return orientation;
};

export default getOrientation;

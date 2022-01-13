import React from 'react';
import LottieView from 'lottie-react-native';

const Arrow = () => {
  return <LottieView source={require('./../../assets/animation_arrow.json')} autoPlay loop />;
};

export default Arrow;
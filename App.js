import React from 'react';
import LottieView from 'lottie-react-native';

// import { Carrot, SpinningCarrot, arrow } from './componets';


function App() {

  // Animation Lottie Example
  return <LottieView source={require('./assets/animation_groom.json')} autoPlay loop />;

};

export default App;

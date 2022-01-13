import React from 'react';
import { View, Text } from 'react-native';

// 1. 불러오고
import Arrow from '../components/animation/arrow';
import Groom from '../components/animation/groom';

function HomeScreen() {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      {/* 2. 사용하고 */} 
      <Groom />
      <Arrow style={{ width: 50, height: 50, position: 'absolute', bottom: 0 }} />
  
    </View>
  );
}
export default HomeScreen;
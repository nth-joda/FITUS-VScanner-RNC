import {View, Text} from 'react-native';
import React from 'react';

const TextDetected = ({route, navigation}) => {
  const detectedText = route.params;
  return (
    <View>
      <Text>{detectedText}</Text>
    </View>
  );
};

export default TextDetected;

import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import TextRecognition from 'react-native-text-recognition';
// import {SafeAreaInsetsContext} from 'react-native-safe-area-context';

export default function PreviewScreen({route, navigation}) {
  const [isVisible, setIsVisible] = useState(false);
  const [text, setText] = useState('');
  const onToggleModal = () => {
    setIsVisible(!isVisible);
  };
  /* 2. Get the param */
  const photo = route.params;
  console.log(photo.uri);
  useEffect(() => {
    (async () => {
      const result = await TextRecognition.recognize(photo.uri);
      console.log(result);
      setText(result);
    })();
  }, []);

  return (
    <View style={styles.preview}>
      <View style={styles.photo}>
        {photo.uri ? (
          <Image
            style={{
              flex: 1,
              resizeMode: 'center',
            }}
            source={{uri: photo.uri}}
          />
        ) : (
          <Text>no photo</Text>
        )}
      </View>
      <View style={styles.photoCta}>
        <View style={styles.cta}>
          <View style={styles.button}>
            <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
              <Text style={{textAlign: 'center', color: 'white'}}>
                Chụp lại
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.cta}>
          <View style={styles.button}>
            <TouchableOpacity
              onPress={() => navigation.navigate('TextDetection', text)}>
              <Text style={{textAlign: 'center', color: 'white'}}>
                Trích xuất thông tin
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex: 1}}>
          <Text>{text ? <Text>{text}</Text> : <Text>Empty</Text>}</Text>
        </View>
      </View>
    </View>
  );
  // return (
  //   <ImageBackground
  //     resizeMode="contain"
  //     style={{
  //       justifyContent: "center",
  //       padding: 20,
  //       alignItems: "center",
  //       height: "100%",
  //       width: "100%",
  //       backgroundColor: "black",
  //     }}
  //     source={{ uri: photo.uri }}
  //   >
  //     <Button title="Open Image Editor" onPress={() => setIsVisible(true)} />
  //     <ImageManipulator
  //       photo={{ uri: photo.uri }}
  //       isVisible={isVisible}
  //       // onPictureChoosed={(uriM) => this.setState({ uri: uriM })}
  //       onToggleModal={onToggleModal}
  //     />
  //   </ImageBackground>
  // );
}

const styles = StyleSheet.create({
  preview: {
    flex: 1,
  },
  photo: {
    flex: 9,
    backgroundColor: 'black',
  },
  photoCta: {
    flex: 1,
    flexDirection: 'row',
  },
  cta: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#025395',
    width: 120,
    padding: 10,
    borderRadius: 10,
    minHeight: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

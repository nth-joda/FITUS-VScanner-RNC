import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Platform,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {Octicons} from '@expo/vector-icons';
import {FontAwesome} from '@expo/vector-icons';
import {Entypo} from '@expo/vector-icons';
import {Camera, CameraType} from 'expo-camera';
import {useIsFocused} from '@react-navigation/native';
// import RNMlKit from "react-native-firebase-mlkit";

export default function TakePhotoScreen({navigation}) {
  const isFocused = useIsFocused();
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const __takePicture = async () => {
    if (cameraRef) {
      let photo = await cameraRef.takePictureAsync();
      console.log('photo', photo);
      navigation.navigate('Preview', photo);
    }
  };
  const [type, setType] = useState(CameraType.back);
  useEffect(() => {
    (async () => {
      const {status} = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>Hãy cấp quyền truy cập camera</Text>;
  }
  const WIDTH = Dimensions.get('window').width;
  const styles = StyleSheet.create({
    TakePhotoScreen: {
      flex: 1,
      paddingTop: Platform.OS === 'android' ? 20 : 0,
    },
    CameraArea: {
      flex: 9,
      backgroundColor: '#1F2023',
    },
    CameraActionArea: {
      flex: 1,
      flexDirection: 'row',
    },
    ButtonAction: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    CameraTop: {
      flex: 1,
    },
    CameraCenter: {
      flex: 5,
      backgroundColor: '#ccc',
    },
    CameraBottom: {
      flex: 1,
    },
    GuideText: {
      paddingLeft: 75,
      paddingRight: 75,
      paddingTop: 10,
      textAlign: 'center',
      fontSize: 16,
      color: '#fff',
    },
    card: {
      position: 'absolute',
      top: -35,
      left: WIDTH / 2 - 35,
      backgroundColor: 'white',
      borderRadius: 50,
      width: 70,
      height: 70,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      //   borderColor: "#1F2023",
      //   borderWidth: 3,
    },

    shadowProp: {
      shadowOffset: {width: -2, height: 4},
      shadowColor: '#000',
      shadowOpacity: 0.9,
      shadowRadius: 50,
      elevation: 5,
    },
    camera: {
      flex: 1,
    },
    buttonContainer: {
      flex: 1,
      backgroundColor: 'transparent',
      flexDirection: 'row',
      margin: 20,
    },
    button: {
      flex: 0.1,
      alignSelf: 'flex-end',
      alignItems: 'center',
    },
    text: {
      fontSize: 18,
      color: 'white',
    },
  });

  return (
    <SafeAreaView style={styles.TakePhotoScreen}>
      <View style={styles.CameraArea}>
        <View style={styles.CameraTop}>
          <View></View>
        </View>
        <View style={styles.CameraCenter}>
          {isFocused && (
            <Camera
              style={styles.camera}
              type={type}
              ref={ref => {
                setCameraRef(ref);
              }}
              autoFocus="on">
              <View
                style={{
                  flex: 1,
                  backgroundColor: 'transparent',
                  justifyContent: 'flex-end',
                }}>
                {/* <TouchableOpacity
                  style={{
                    flex: 0.1,
                    alignSelf: "flex-end",
                  }}
                  onPress={() => {
                    setType(
                      type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                    );
                  }}
                >
                  <Text
                    style={{ fontSize: 18, marginBottom: 10, color: "white" }}
                  >
                    Flip
                  </Text>
                </TouchableOpacity> */}
              </View>
            </Camera>
          )}
        </View>
        <View style={styles.CameraBottom}>
          <Text style={styles.GuideText}>
            Giữ hóa đơn thẳng và chụp nơi có ánh sáng tốt
          </Text>
        </View>
      </View>
      <View style={styles.CameraActionArea}>
        <View style={styles.ButtonAction}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Octicons name="home" size={32} color="#025395" />
          </TouchableOpacity>
        </View>

        <View style={styles.ButtonAction}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <FontAwesome name="file-photo-o" size={32} color="#025395" />
          </TouchableOpacity>
        </View>
        <View style={[styles.card, styles.shadowProp]}>
          <TouchableOpacity onPress={__takePicture}>
            <Entypo name="camera" size={32} color="#025395" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {AntDesign} from '@expo/vector-icons';
import {FontAwesome} from '@expo/vector-icons';
import {Fontisto} from '@expo/vector-icons';
import {Card} from 'react-native-shadow-cards';
import VMAMA_LOGO from '../assets/VMAMA_Text_only.png';

const dataCta = [
  {key: 'Chụp hóa đơn', icon: 'camerao', navTo: 'Camera'},
  {key: 'Ảnh có sẵn', icon: 'photo', navTo: 'Login'},
  {key: 'Lịch sử HĐ', icon: 'history', navTo: 'Login'},
  {key: 'Hồ sơ cá nhân', icon: 'profile', navTo: 'Login'},
];

const renderIcon = name => {
  if (name === 'camerao') {
    return (
      <AntDesign
        name="camerao"
        size={52}
        color="#025395"
        style={{
          width: 120,
          height: 85,
          paddingLeft: 15,
          textAlign: 'left',
          lineHeight: 85,
        }}
      />
    );
  } else if (name === 'photo') {
    return (
      <FontAwesome
        name="file-photo-o"
        size={52}
        color="#025395"
        style={{
          width: 120,
          height: 85,
          paddingLeft: 15,
          textAlign: 'left',
          lineHeight: 85,
        }}
      />
    );
  } else if (name === 'history') {
    return (
      <AntDesign
        name="book"
        size={52}
        color="#025395"
        style={{
          width: 120,
          height: 85,
          paddingLeft: 15,
          textAlign: 'left',
          lineHeight: 85,
        }}
      />
    );
  } else if (name === 'profile') {
    return (
      <FontAwesome
        name="user-o"
        size={52}
        color="#025395"
        style={{
          width: 120,
          height: 85,
          paddingLeft: 15,
          textAlign: 'left',
          lineHeight: 85,
        }}
      />
    );
  } else {
    return (
      <Fontisto
        name="question"
        size={52}
        color="#025395"
        style={{
          width: 120,
          height: 85,
          paddingLeft: 15,
          textAlign: 'left',
          lineHeight: 85,
        }}
      />
    );
  }
};

const numColumns = 2;
const WIDTH = Dimensions.get('window').width;
export default function MainScreen({navigation}) {
  const _renderItem = ({item, index}) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate(item.navTo)}>
        <Card style={{padding: 10, margin: 10, width: 150, height: 150}}>
          {renderIcon(item.icon)}
          <Text style={styles.itemText}>{item.key}</Text>
        </Card>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.blueContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.logoContainer}>
            <Image style={[styles.logoImg]} source={VMAMA_LOGO} />
          </View>
        </View>
        <View style={styles.emptyContainer}>
          <Text style={styles.greetingText}>Xin chào, Tèo!</Text>
        </View>
      </View>
      <View style={styles.whiteContainer}>
        <View style={styles.ctaContainer}>
          <FlatList
            contentContainerStyle={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
            data={dataCta}
            renderItem={_renderItem}
            keyExtractor={(item, index) => index.toString()}
            numColumns={numColumns}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: 'white',
  },
  blueContainer: {
    flex: 6,
    backgroundColor: '#70A0C2',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  whiteContainer: {
    flex: 4,
    backgroundColor: 'white',
  },
  headerContainer: {
    flex: 15,
    backgroundColor: '#025395',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    margin: 'auto',
    alignItems: 'center',
    width: '100%',
    height: '60%',
  },
  logoImg: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'contain',
  },
  emptyContainer: {
    flex: 85,
  },
  ctaContainer: {
    flex: 1,
    position: 'absolute',
    flexDirection: 'row',
    flexWrap: 'wrap',
    left: 0,
    top: -90,
    opacity: 1,
  },
  itemText: {
    fontSize: 20,
    color: '#025395',
  },
  greetingText: {
    color: '#fff',
    fontSize: 30,
    padding: 20,
  },
});

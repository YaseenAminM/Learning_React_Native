import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native';
import React from 'react';

export default function ImageComponentExample() {
  const localImageUrl = require('../../public/RN.png');
  const remoteImageUrl = {
    uri: 'https://wallpapers.com/images/hd/dark-gradient-6bly12umg2d4psr2.jpg',
  };
  const remoteImageUrl2 = {
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrRQH-VwE2i1tPayFSVXkOhcSbwEUsOgbdww&s',
  };

  return (
    <ImageBackground source={remoteImageUrl} style={styles.backgroun} resizeMode="cover">
      <View style={styles.content}>
        <Text style={styles.text}>React Native</Text>
        <Image source={localImageUrl} style={styles.image} resizeMode="cover" />
        <Image source={remoteImageUrl2} style={styles.image} resizeMode="cover" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroun: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  content: {
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 10,
  },

  text: {
    fontSize: 24,
    color: 'black',
    marginBottom: 10,
    textAlign: 'center',
  },

  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginTop: 10,
  },
});

import React, {useState} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import CustomButton from './components/CustomButton';

const MyImagePicker = () => {
  const [image, setImage] = useState(null);

  const addImage = () => {
    launchImageLibrary({}, response => setImage(response.uri));
  };

  return (
    <View style={styles.container}>
      {image && <Image style={styles.image} source={{uri: image}} />}
      <CustomButton
        text={'이미지 추가'}
        backgroundColor={'#f1c40f'}
        handler={addImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 400,
  },
});

export default MyImagePicker;

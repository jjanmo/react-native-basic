import React, {useState} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useEffect} from 'react/cjs/react.development';
import CustomButton from '../components/CustomButton';

const MyImagePicker = () => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    console.log(image);
  });
  const options = {
    title: '사진',
    takePhotoButtonTitle: '카메라',
    chooseFromLibraryButtonTitle: '이미지 선택',
    cancelButtonTitle: '취소',
  };

  const addImage = () => {
    launchImageLibrary(options, (response) => setImage(response.uri));
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

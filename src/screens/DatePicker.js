import React, {useState} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {getLastDay} from '../utils/functions';
import HomeButton from '../components/HomeButton';
import CustomButton from '../components/CustomButton';

const DatePicker = ({navigation}) => {
  const now = new Date();
  const [month, setMonth] = useState(now.getMonth() + 1);
  const [date, setDate] = useState(now.getDate());

  const lastDate = getLastDay();
  const dateArray = Array.from({length: lastDate}, (x, i) => i + 1);
  const monthArray = Array.from({length: 12}, (x, i) => i + 1);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Select your BIRTH-DAY 🎂</Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Month</Text>
        <Text style={styles.title}>Day</Text>
      </View>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={`${month}`}
          style={styles.monthPicker}
          onValueChange={(value, index) => setMonth(value)}
          mode="dropdown">
          {monthArray.map((month, index) => (
            <Picker.Item key={index} label={`${month}`} value={`${month}`} />
          ))}
        </Picker>
        <Picker
          selectedValue={`${date}`}
          style={styles.datePicker}
          onValueChange={(value, index) => setDate(value)}
          mode="dropdown">
          {dateArray.map((date, index) => (
            <Picker.Item key={index} label={`${date}`} value={`${date}`} />
          ))}
        </Picker>
      </View>
      <CustomButton
        text={'Press Here 😜'}
        backgroundColor="#fdcb6e"
        handler={() => Alert.alert(`Your birth day is ${month} / ${date}`)}
      />
      <HomeButton navigator={navigation.navigate} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 25,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 10,
  },
  title: {
    marginHorizontal: 10,
    textAlign: 'center',
    backgroundColor: '#74b9ff',
    color: 'white',
    fontSize: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: 130,
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  monthPicker: {
    width: 120,
    height: 50,
    marginHorizontal: 10,
  },
  datePicker: {
    width: 120,
    height: 50,
    marginHorizontal: 10,
  },
});

export default DatePicker;

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import FontRatio from '../libs/FontRatio';
import GetOrientation from '../libs/GetOrientation';

// green text color: rgb(55, 222, 85)

const Home = () => {
  return (
    <View style={styles.body}>
      <View style={styles.appTitleContainer}>
        <Text style={styles.appTitleDesc}>chattime</Text>
        <Icon 
          name='message-circle' 
          size={FontRatio(40)} 
          color='rgb(55, 222, 85)' 
        />
      </View>
      <View 
        style={styles.formContainer}
      >
        <Text style={styles.formInfo}>
          Please enter your username to continue
        </Text>
        <View
          style={{
            width: GetOrientation() == 'landscape' ? '30%' : '50%'
          }}
        >
          <Input
            placeholder='Username'
            style={styles.formInput}
          />
        </View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  appTitleContainer: {
    flex: 1,
    maxHeight: '50%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  appTitleDesc: {
    fontSize: FontRatio(40),
  },
  formContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '3%',
  },
  formInfo: {
    fontSize: FontRatio(10),
    fontWeight: '300',
    color: 'grey',
  },
  formInput: {
    fontSize: FontRatio(10),
  },
});

export default Home;

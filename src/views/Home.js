import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { 
  Input,
  Button,
} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import getFontRatio from '../libs/screen/getFontRatio';
import getOrientation from '../libs/screen/getOrientation';
import inputUsername from '../libs/logic/inputUsername';
import navigateToAnotherPage from '../libs/logic/navigateToAnotherPage';

// green text color: rgb(55, 222, 85)

const Home = (props) => {
  const { navigation } = props;

  const { handleTextChange, username } = inputUsername();
  const { handleNavigate } = navigateToAnotherPage();

  return (
    <View style={styles.body}>
      <View style={styles.appTitleContainer}>
        <Text style={styles.appTitleDesc}>chattime</Text>
        <Icon 
          name='message-circle' 
          size={getFontRatio(40)} 
          color='rgb(55, 222, 85)' 
        />
      </View>
      <View 
        style={[
          styles.formContainer,
          { maxHeight: getOrientation() == 'landscape' ? '15%': '7%' }
        ]}
      >
        <Text style={styles.formInfo}>
          Please enter your username to continue
        </Text>
        <View
          style={{
            width: getOrientation() == 'landscape' ? '30%' : '50%'
          }}
        >
          <Input
            placeholder='Username'
            style={styles.formInput}
            onChangeText={handleTextChange}
          />
        </View>
      </View>
      <View style={[
        styles.buttonContainer,
        { width: getOrientation() == 'landscape' ? '29%' : '45%' }
        ]}
      >
        <Button
          title='Continue'
          type='solid'
          buttonStyle={styles.buttonBody}
          titleStyle={styles.buttonTitle}
          onPress={() => handleNavigate({
            params: username,
            screen: 'Chat',
            navigation,
          })}
        />
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
    maxHeight: '45%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  appTitleDesc: {
    fontSize: getFontRatio(40),
  },
  formContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '3%',
  },
  formInfo: {
    fontSize: getFontRatio(10),
    fontWeight: '300',
    color: 'grey',
  },
  formInput: {
    fontSize: getFontRatio(10),
  },
  buttonContainer : {
    alignSelf: 'center',
  },
  buttonBody: {
    backgroundColor: 'rgb(55, 222, 85)',
  },
  buttonTitle: {
    color: 'rgb(255, 255, 255)',
    fontWeight: 'bold',
  },
});

export default Home;

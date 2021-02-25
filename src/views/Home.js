import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import FontRatio from '../libs/FontRatio';

// green text color: rgb(55, 222, 85)

const Home = () => {
  return (
    <View style={styles.body}>
      <View style={styles.appTitleContainer}>
        <Text style={styles.appTitleDesc}>chattime</Text>
        <Icon name='message-circle' size={FontRatio(40)} color='rgb(55, 222, 85)' />
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  appTitleDesc: {
    fontSize: FontRatio(40),
  },
});

export default Home;

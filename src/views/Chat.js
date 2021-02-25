import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import getFontRatio from '../libs/screen/getFontRatio';
import getOrientation from '../libs/screen/getOrientation';

const Chat = () => {
  const renderItem = ({item, index}) => {
    if (item == 'bulek') {
      return (
        <View
          key={`${item}_chat`}
          style={styles.footerTextRightContainer}
        >
          <Text style={styles.footerTextRight}>{item}</Text>
        </View>
      )
    } else {
      return (
        <View
          key={`${item}_chat`}
          style={styles.footerTextLeftContainer}
        >
          <Text style={styles.footerTextLeft}>{item}</Text>
        </View>
      )
    }
  };

  return (
    <View style={styles.body}>
      <FlatList
        // inverted={true}
        data={['belek', 'bulek', 'balek']}
        renderItem={renderItem}
      />
      <View 
        style={[
          styles.footerContainer,
          { maxHeight: getOrientation() == 'landscape' ? '10%' : '5%' }
        ]}
      >
        <View style={styles.footerTextWrapper}>
          <TextInput
            multiline
            numberOfLines={1}
            style={{ textAlignVertical: 'top' }}
          />
        </View>
        <TouchableOpacity style={styles.footerButtonContainer}>
          <Icon
            name='send'
            size={getFontRatio(25)}
            color='#fff'
          />
        </TouchableOpacity>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
  },
  footerContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  footerTextWrapper: {
    width: '90%',
    borderWidth: 1.5,
    borderColor: 'grey',
  },
  footerButtonContainer: {
    width: '10%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: 'grey',
    backgroundColor: 'rgb(55, 222, 85)',
  },
  footerTextRightContainer: {
    alignSelf: 'flex-end',
    marginRight: 20,
  },
  footerTextRight: {
    borderRadius: 10,
    width: 170,
    backgroundColor: 'rgb(220, 248, 198)',
    color: 'black',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 10,
    paddingRight: 10,
    overflow: 'hidden',
  },
  footerTextLeftContainer: {
    marginLeft: 10,
    marginBottom: 6,
    marginTop: 6,
  },
  footerTextLeft: {
    borderRadius: 10,
    width: 170,
    backgroundColor: 'white',
    color: 'black',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 10,
    paddingRight: 10,
    overflow: 'hidden'
  },
});

export default Chat;

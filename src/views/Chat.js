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
import inputChat from '../libs/logic/inputChat';
import fetchMessages from '../services/fetchMessages';

const Chat = ({ route }) => {
  const { params } = route.params;
  const messages = fetchMessages();

  const { handleTextChange, chat } = inputChat();

  const renderItem = ({item, index}) => {
    if (item.username == params) {
      return (
        <View
          key={`user_${item.username}`}
          style={styles.footerTextRightContainer}
        >
          <Text style={styles.footerTextRight}>{item.text}</Text>
        </View>
      )
    } else {
      return (
        <View
          key={`user_${item.username}`}
          style={styles.footerTextLeftContainer}
        >
          <Text style={styles.footerTextLeft}>{item.text}</Text>
        </View>
      )
    }
  };

  return (
    <View style={styles.body}>
      <FlatList
        inverted={true}
        data={messages}
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
            onChangeText={handleTextChange}
            style={{ textAlignVertical: 'top' }}
          />
        </View>
        <TouchableOpacity 
          style={styles.footerButtonContainer}
          // onPress={() => {
          //   socket.emit(
          //     'chat message',
          //     JSON.stringify({
          //       text: 'This is a test message',
          //       username: params,
          //     })
          //   )
          // }}
        >
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

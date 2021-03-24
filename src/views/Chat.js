import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { io } from 'socket.io-client';
import Icon from 'react-native-vector-icons/Feather';
import getFontRatio from '../libs/screen/getFontRatio';
import getOrientation from '../libs/screen/getOrientation';
import inputChat from '../libs/logic/inputChat';
import useChat from '../services/useChat';

const URL = 'https://infinite-hamlet-96052.herokuapp.com';

const socket = io(URL);

const Chat = ({ route }) => {
  const { params } = route.params;
  const { messages, sendMessage } = useChat();

  const { handleTextChange, chat } = inputChat();
  console.log('chat check value', chat);

  const renderItem = ({item, index}) => {
    if (item.username == params) {
      return (
        <View
          key={`user_${String(item.username)}`}
          style={styles.footerTextRightContainer}
        >
          <Text style={styles.footerTextRight}>{item.text}</Text>
        </View>
      )
    } else {
      return (
        <View
          key={`user_${String(item.username)}`}
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
            value={chat}
            onChangeText={handleTextChange}
            style={{ textAlignVertical: 'top' }}
          />
        </View>
        <TouchableOpacity 
          style={styles.footerButtonContainer}
          onPress={() => {
            handleTextChange(''),
            sendMessage({
              message: chat,
              username: params,
            })
          }}
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
    marginBottom: 6,
    marginTop: 6,
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

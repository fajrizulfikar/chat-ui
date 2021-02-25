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
  return (
    <View style={styles.body}>
      {/* <FlatList
        inverted={true}
        data={['belek', 'bulek', 'balek']}
        renderItem={({ item, index }) => (
            <View key={`chat_item_${index.toString()}`}>
              <Text>
                {item}
              </Text>
            </View>
          )
        }
      /> */}
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
});

export default Chat;

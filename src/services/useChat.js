import {
  useState,
  useEffect,
  useRef,
} from 'react';
import socketIo from 'socket.io-client';
import { io } from 'socket.io-client';

const URL = 'https://infinite-hamlet-96052.herokuapp.com';
const CHAT_MESSAGE_EVENT = 'chat message';

const socket = io(URL);

const useChat = () => {
  const [messages, setMessages] = useState([]);
  const socketRef = useRef();

  useEffect(() => {
    fetch(`${URL}/messages`)
      .then((res) => res.json())
      .then(setMessages)
      .catch((err) => console.error('err check value: ', err));
  }, []);

  useEffect(() => {
    socketRef.current = socketIo(URL);

    socketRef.current.on(CHAT_MESSAGE_EVENT, (messages) => {
      console.log('messages check value', messages);
      setMessages(messages.rows)
    });
  }, []);

  const sendMessage = (messageBody) => {
    const { message, username } = messageBody;

    socketRef.current.emit(
      CHAT_MESSAGE_EVENT,
      JSON.stringify({
      text: message,
      username,
    }))
  };

  return { messages, sendMessage };
};

export default useChat;

import {
  useState,
  useEffect,
} from 'react';
import { io } from 'socket.io-client';

const URL = 'https://infinite-hamlet-96052.herokuapp.com';

const socket = io(URL);

const fetchMessages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch(`${URL}/messages`)
      .then((res) => res.json())
      .then(setMessages)
      .catch((err) => console.error('err check value: ', err));
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on('chat message', (msgs) => {
        setMessages(msgs);
      });
    }
  }, [])

  return messages;
};

export default fetchMessages;

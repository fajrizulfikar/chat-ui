import {
  useState,
  useEffect,
} from 'react';

const URL = 'http://10.0.3.2:3000/messages';

const fetchMessages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then(setMessages)
      .catch((err) => console.error('err check value: ', err));
  }, []);

  return messages;
};

export default fetchMessages;

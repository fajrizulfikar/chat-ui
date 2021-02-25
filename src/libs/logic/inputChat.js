import { useState } from 'react';

const inputChat = () => {
  const [chat, setChat] = useState('');

  const handleTextChange = (value) => {
    setChat(value);
  };

  return { handleTextChange, chat };
};

export default inputChat;

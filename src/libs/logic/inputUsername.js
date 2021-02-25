import { useState } from 'react';

const usernameField = () => {
  const [username, setUsername] = useState('');

  const handleTextChange = value => {
    setUsername(value);
  };

  return { handleTextChange, username };
};

export default usernameField;

import React, { createContext, useState } from 'react';

export const EmojiContext = createContext({
  profileEmoji: '🧑🏻‍💻',
  setProfileEmoji: () => {}
});

export const EmojiProvider = ({ children }) => {
  const [profileEmoji, setProfileEmoji] = useState('🧑🏻‍💻');

  return (
    <EmojiContext.Provider value={{ profileEmoji, setProfileEmoji }}>
      {children}
    </EmojiContext.Provider>
  );
};
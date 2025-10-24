/* eslint-disable react-hooks/exhaustive-deps */
import { onAuthStateChanged, User } from 'firebase/auth';
import { onValue, ref, remove, set } from 'firebase/database';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { auth, database } from '@/common/libs/firebase';
import { MessageProps } from '@/common/types/chat';

import ChatAuth from './ChatAuth';
import ChatInput from './ChatInput';
import ChatList from './ChatList';

const Chat = ({ isWidget = false }: { isWidget?: boolean }) => {
  const [user, setUser] = useState<User | null>(null);
  const [messages, setMessages] = useState<MessageProps[]>([]);

  const databaseChat = process.env.NEXT_PUBLIC_FIREBASE_CHAT_DB as string;

  const handleSendMessage = (message: string) => {
    if (!user) return;

    const messageId = uuidv4();
    const messageRef = ref(database, `${databaseChat}/${messageId}`);

    set(messageRef, {
      id: messageId,
      name: user.displayName,
      email: user.email,
      image: user.photoURL,
      message,
      created_at: new Date().toISOString(),
      is_show: true,
    });
  };

  const handleDeleteMessage = (id: string) => {
    const messageRef = ref(database, `${databaseChat}/${id}`);

    if (messageRef) {
      remove(messageRef);
    }
  };

  useEffect(() => {
    // Auth state listener
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    // Messages listener
    const messagesRef = ref(database, databaseChat);
    const unsubscribeMessages = onValue(messagesRef, (snapshot) => {
      const messagesData = snapshot.val();
      if (messagesData) {
        const messagesArray = Object.values(messagesData) as MessageProps[];
        const sortedMessage = messagesArray.sort((a, b) => {
          const dateA = new Date(a.created_at);
          const dateB = new Date(b.created_at);
          return dateA.getTime() - dateB.getTime();
        });
        setMessages(sortedMessage);
      }
    });

    return () => {
      unsubscribeAuth();
      unsubscribeMessages();
    };
  }, []);

  return (
    <>
      <ChatList
        isWidget={isWidget}
        messages={messages}
        onDeleteMessage={handleDeleteMessage}
      />
      {user ? (
        <ChatInput onSendMessage={handleSendMessage} isWidget={isWidget} />
      ) : (
        <ChatAuth isWidget={isWidget} />
      )}
    </>
  );
};

export default Chat;

import { useState } from 'react';
import messagesList from './data/messageList';
import List from './components/List';

function App() {
  const [messages, setMessages] = useState(messagesList)

  const setMessageStatus = (messageId, newStatus) => {
    const updateMessages = messages.map((currentMessage) => {
      if (currentMessage.id === messageId) {
        return { ...currentMessage, status:newStatus }
      }
      return currentMessage;
    });
    setMessages(updateMessages)
  }

  return (
    <div className='app'>
      <header>
        <h1>TrybeMail</h1>
      </header>
      <List 
      messages={ messages } 
      setMessageStatus={setMessageStatus}
      />
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Contacts from './components/Content/Dialogs/Contacts/Contacts'

let ContactsData = [
  { id: 1, name: 'Dima' },
  { id: 2, name: 'Alex' },
  { id: 3, name: 'Trend' },
  { id: 4, name: 'Anna' },
  { id: 5, name: 'Ira' }
];

let contactsElements = ContactsData.map((contact) => {
  return (
      <Contacts name={contact.name} id={contact.id} />
  )
});

let MessagesData = [
        { id: 1, messageText: 'Hi, Dexmi!' },
        { id: 2, messageText: 'Yes, its kruto!' },
        { id: 3, messageText: 'Oky spoki, bro.' },
        { id: 4, messageText: 'Oh, ola la!' },
        { id: 5, messageText: 'Goood moorning!' }
    ];
    
let MyPostsData = [
    {id: 1, name: 'Alex (My)', message: 'Hi, Dexmi!', like: '10'},
    {id: 2, name: 'Alex (My)', message: 'Best of the best', like: '8'}
]    

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <App MessagesData={MessagesData } MyPostsData={MyPostsData}/>

  </React.StrictMode>
);

export default contactsElements;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

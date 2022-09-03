import dexstyle from './Dialogs.module.css';
import Contacts from './Contacts/Contacts';
import Messages from './Messages/Messages';


import contactsElements from './../../../index' //мои прокидывания


function Dialogs(props) {

    let MessagesElements = props.MessagesData.map((message) => {
        return (
            <Messages message={message.messageText} />
        )
    });

    return (
        <div className={dexstyle.messages}>
            <div className={dexstyle.message}>
                {MessagesElements}      {/*переменная которая создает компоненту Massgaes с пропсами из базы */}
            </div>
            <div className={dexstyle.contacts}>
                {contactsElements}      {/*переменная которая создает компоненту Contacts с пропсами из базы */}
            </div>
        </div >
    )
}


export default Dialogs;





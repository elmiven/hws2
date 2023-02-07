import React from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'
import avatar from './avatar.png'

/*
* 1 - описать тип MessageType
* 2 - описать тип MessagePropsType в файле Message.tsx
* 3 - в файле Message.tsx отобразить приходящие данные
* 4 - выполнить пункты 2, 3 в файле FriendMessage.tsx
* 5 - сделать стили в соответствии с дизайном
* */

// нужно создать правильный тип вместо any
export type MessageType = {
    id: number,
    user: {
        avatar: string,
        name: string
    }
    message: {
        text: string,
        time: string
    }
}

// структуру объекта не менять
export const message0: MessageType = {
    id: 0,
    user: {
        avatar: 'http://1.bp.blogspot.com/_owbsrG_z9Fs/TFHf3NNltII/AAAAAAAAAMQ/_cL_v5AOkD4/s1600/avatar_09.png', // можно менять
        name: 'User Userovich',  // можно менять
    },
    message: {
        text: 'The five boxing wizards jump quickly.', // можно менять
        time: '22:00', // можно менять
    },
}



export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: 'https://openclipart.org/image/800px/svg_to_png/15604/enki-mine-avatar-source.png', // можно менять
        name: 'Friendy Frend', // можно менять
    },
    message: {
        text: 'зеркальное сообщение для тренировки css', // можно менять
        time: '22:01', // можно менять
    },
}

const HW1 = () => {
    return (
        <div id={s2.hw1}>
           
            <div className={s2.hwTitle}>Homework #1</div>
            <hr/>
            <div className={s2.hw}>
                {/*проверка отображения (не менять)*/}
                <div>
                    <Message message={message0} />
                    <FriendMessage message={friendMessage0} />
                    <Message message={message0} /> 
                </div>

                {/*для автоматической проверки дз (не менять)*/}
                <MessageSender M={Message} />
            </div>
        </div>
    )
}

export default HW1


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpLong } from '@fortawesome/free-solid-svg-icons'

import style from '../../StyleModules/MessageInput.module.scss'
import { useState } from 'react'
import { useAppDispatch } from '../../hooks'
import { sendMessage } from '../redux/chatSlice'



const MessageInput: React.FC = () => {

    const dispatch = useAppDispatch()

    const [text, setText] = useState('')


    const SendMess = () => {
        setText('')
        dispatch(sendMessage(text))
    }

    return(
        <>
            {/* <div className={style.emojis}>
                <FontAwesomeIcon icon="fa-solid fa-face-smile" />
            </div> */}
            <div className={style.input}>
                {/* <button className={style.emojis__button}>
                    <FontAwesomeIcon icon={faFaceSmile} />
                </button> */}
                <input type="text" placeholder='Message' value={text} onChange={(e) => setText(e.target.value)} 
                    onKeyDown={(e) => {
                        if (e.key === "Enter")
                            SendMess();
                        }
                    }
                />
                <button onClick={SendMess}><FontAwesomeIcon icon={faArrowUpLong} /></button>
            </div>
        </>
    )
}

export default MessageInput
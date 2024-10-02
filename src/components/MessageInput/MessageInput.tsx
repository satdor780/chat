
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpLong } from '@fortawesome/free-solid-svg-icons'

import style from '../../StyleModules/MessageInput.module.scss'



const MessageInput: React.FC = () => {
    return(
        <>
            <div className={style.emojis}>
                {/* <FontAwesomeIcon icon="fa-solid fa-face-smile" /> */}
            </div>
            <div className={style.input}>
                {/* <button className={style.emojis__button}>
                    <FontAwesomeIcon icon={faFaceSmile} />
                </button> */}
                <input type="text" placeholder='Message'/>
                <button><FontAwesomeIcon icon={faArrowUpLong} /></button>
            </div>
        </>
    )
}

export default MessageInput
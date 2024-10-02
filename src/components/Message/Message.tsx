import style from '../../StyleModules/Message.module.scss'
// import ava from '../../assets/images/ava.jpg'

interface MessageProps {
    content: string,
    authorImg?: string,
    isAuthor?: boolean
}


const Message: React.FC<MessageProps> = ({content, authorImg, isAuthor}) => {
    return(
        <>
            <div className={style.message}>
                <div className={style.message__text}>
                    <p>{content}</p>
                </div>
                {isAuthor && (
                    <div className={style.author}>
                        <img src={authorImg} alt="" />
                    </div>
                )}
                
            </div>
        </>
    )
}

export default Message
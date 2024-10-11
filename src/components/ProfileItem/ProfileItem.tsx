
import { useAppDispatch, useAppSelector } from '../../hooks';
import style from '../../StyleModules/ProfileItem.module.scss'
import { active } from '../redux/chatSlice';
// import ava from '../../assets/images/ava.jpg'

interface ProfileItemProps {
    author?: boolean;
    name: string,
    dec: string,
    img?: string,
    date?: string,
    id?: number,
    notf?: number
}
  

const ProfileItem: React.FC<ProfileItemProps> = ({author, name, dec, img, date, id, notf}) => {

    const dispatch = useAppDispatch()

    const activeChat = useAppSelector(state => state.chat.activeChat)

    const changeChat = (id: number) => {
        dispatch(active(id))
    }
    // console.log(author.author)
    return(
        <div className={activeChat == id ? style.item + ' ' +  style.active: style.item} onClick={() => !author && changeChat(Number(id))}>
            <div className={style.ava}><img src={img} alt="" /></div>
            <div className={style.user__info}>
                <strong>{name}</strong>
                {!author ? (
                    <span>{dec}</span>
                ): (
                    <span>id: {dec}</span> 
                )}
            </div>
            {!author && (
                <div className={style.info}>
                    <span>{date}</span>
                    {notf ? <div className={style.notifications}><span>{notf}</span></div>: null}
                </div>
            )}

            {/* <p>{date}</p> */}
           
            
        </div>
    )
}

export default ProfileItem
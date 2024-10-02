
import { useAppDispatch } from '../../hooks';
import style from '../../StyleModules/ProfileItem.module.scss'
import { activeChat } from '../redux/chatSlice';
// import ava from '../../assets/images/ava.jpg'

interface ProfileItemProps {
    author?: boolean;
    name: string,
    dec: string,
    img?: string,
    date?: string,
    id?: number
}
  

const ProfileItem: React.FC<ProfileItemProps> = ({author, name, dec, img, date, id}) => {

    const dispatch = useAppDispatch()

    const changeChat = (id: number) => {
        dispatch(activeChat(id))
    }
    // console.log(author.author)
    return(
        <div className={style.item} onClick={() => !author && changeChat(Number(id))}>
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
                    <div className={style.notifications}><span>23</span></div>
                </div>
            )}
           
            
        </div>
    )
}

export default ProfileItem
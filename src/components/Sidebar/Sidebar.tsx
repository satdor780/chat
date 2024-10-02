import Chats from "../Chats/Chats"
// import Profile from "../Profile/Profile"

import style from '../../StyleModules/Sidebar.module.scss'
import ProfileItem from "../ProfileItem/ProfileItem"
import { useAppSelector } from "../../hooks"

const Sidebar: React.FC = () => {

    const user = useAppSelector(state => state.chat.data)

    const name = user?.name ? user.name : 'guest'
    const id = user?.id ? user.id : '1'

    return(
        <>
            <div className={style.sidebar}>
                <ProfileItem name={name} dec={String(id)} img={user?.profileImage} author={true}/>
                <Chats />
            </div>
        </>
    )
}

export default Sidebar
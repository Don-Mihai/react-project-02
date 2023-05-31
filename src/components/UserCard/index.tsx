import Avatar from '@mui/material/Avatar';
import { IUser } from '../../redux/user/types';
import './UserCard.scss';
import { deepOrange } from '@mui/material/colors';

interface Props {
    user: IUser;
    onClick?: () => void;
}

const UserCard = ({ user, onClick }: Props) => {
    return (
        <div onClick={onClick} className="user-card">
            <div className="user-card__avatar-container">
                <Avatar sx={{ bgcolor: deepOrange[500], height: '70px', width: '70px' }} alt="Remy Sharp" src={user.imgUrl}>
                    {user.name[0]} {user.surname[0]}
                </Avatar>
            </div>
            <div className="user-card__body">
                <h3>
                    {user.name} {user.surname}
                </h3>
                <p>{user.userDescribe}</p>
            </div>
        </div>
    );
};

export default UserCard;

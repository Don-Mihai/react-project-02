import { IUser } from '../../redux/user/types';

interface Props {
    user: IUser;
}

const UserCard = ({ user }: Props) => {
    return <div>{user.name}</div>;
};

export default UserCard;

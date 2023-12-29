import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import {User, UserName, Logoutbutton} from './UserMenu.styled'


export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <User >
      <UserName >Welcome, {user.name}</UserName>
      <Logoutbutton type="button" onClick={() => dispatch(logOut())}>
        LogOut
      </Logoutbutton>
    </User>
  );
};
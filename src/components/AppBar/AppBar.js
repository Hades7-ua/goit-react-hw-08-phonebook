import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from '../../hooks/useAuth';
import { HeaderAppBar, AppBarContainer } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <HeaderAppBar position="static">
      <AppBarContainer>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </AppBarContainer>
    </HeaderAppBar>
  );
};

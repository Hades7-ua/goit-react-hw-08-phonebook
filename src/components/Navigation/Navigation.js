 
import { useAuth } from '../../hooks/useAuth';
import { NavigationLink } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
    
        {' '}
        <NavigationLink to="/">Home</NavigationLink>


      {isLoggedIn && (
      
          <NavigationLink to="/Contacts">Contacts</NavigationLink>
      
      )}
    </nav>
  );
};

import  {ContainerNav, AuthNavLink}  from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <ContainerNav>
      <AuthNavLink to="/register">Register</AuthNavLink>
      <AuthNavLink to="/login">Log In</AuthNavLink>
    </ContainerNav>
  );
};

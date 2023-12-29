import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const ContainerNav = styled('div')({
  display: 'flex',

  justifyContent: 'flex-end',
});

export const AuthNavLink = styled(NavLink)({
  textDecoration: 'none',
  color: 'white',
  fontWeight: 'bold',
  marginLeft: '50px',

  '&:hover': {
    color: 'orange',
  },
});

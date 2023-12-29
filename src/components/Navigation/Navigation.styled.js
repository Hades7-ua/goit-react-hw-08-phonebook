import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavigationLink = styled(NavLink)({
    textDecoration: 'none',
    color: 'white',
    fontWeight: 'bold',
    marginLeft: '50px',
  
    '&:hover': {
      color: 'orange',
    },
  });

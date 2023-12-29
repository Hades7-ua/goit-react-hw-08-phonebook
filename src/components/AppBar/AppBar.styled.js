import styled from '@emotion/styled';
import { AppBar as MuiAppBar, Toolbar } from '@mui/material';

export const HeaderAppBar = styled(MuiAppBar)({
  pading: '16px',
  backgroundColor: 'black',
});

export const AppBarContainer = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

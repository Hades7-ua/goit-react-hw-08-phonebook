import styled from '@emotion/styled';

export const FormLogin = styled('div')({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: ' translate(-50%, -50%)',
});

export const StyledForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '360px',
  margin: '0 auto',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '5px',

  ' & label': {
    marginBottom: '12px',
    fontWeight: 'bold',
    '&:hover': {
      color: 'orange',
    },
  },
  '& input': {
    width: '100%',
    padding: '8px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '3px',
    boxSizing: 'border-box,',
  },

  '& button': {
    backgroundColor: 'black',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: ' 3px',
    cursor: 'pointer',
    '&:hover': {
      color: 'orange',
    },
  },
});

import styled from 'styled-components';

export const FormContact = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Form = styled.form`
  max-width: 300px;
  margin: 50px auto;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 100%;
  padding-top: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Button = styled.button`
background-color: black;
color: white;
padding: 10px;
width: 100%;
border: none;
border-radius: 3px;
cursor: pointer;

&:hover {
  color: orange;
}
`;

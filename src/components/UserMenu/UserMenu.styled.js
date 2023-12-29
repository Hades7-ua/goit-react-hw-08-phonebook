import styled from '@emotion/styled';

export const User = styled.div`
  display: flex;
  align-items: center;
`;
export const UserName = styled.p`
  margin-right: 24px;
`;

export const Logoutbutton = styled.button`
  background-color: #ff5f5f;
  color: white;
  padding: 10px auto;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 12px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff3b3b;
  }
`;

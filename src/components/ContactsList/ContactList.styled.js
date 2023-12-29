import styled from 'styled-components';

export const ContactListWrapper = styled.ul`
  list-style-type: none;
  padding: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 auto;
`;

export const ContactListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  padding: 10px;
  width: 480px;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 5px;

  button {
    background-color: #ff6b6b;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;

    &:hover {
      background-color: #ff4949;
    }
  }
`;

export const ContactName = styled.span`
  font-weight: bold;
`;

export const ContactNumber = styled.span`
  color: #666;
`;

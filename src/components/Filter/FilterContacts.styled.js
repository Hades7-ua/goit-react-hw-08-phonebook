import styled from 'styled-components';

export const FilterWrapper = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  span {
    margin-top: 4px;
  }
`;

export const FilterHeader = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
  color: #333;
`;

import styled from 'styled-components';
import { Component } from 'react';

export const AppContainer = styled.div`
  background-color: #f4f4f4;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Helvetica, sans-serif;
`;

export const AppHeader = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
  color: #333;
`;

export const AppContent = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

export const AppComponent = styled(Component)`
  max-width: 400px;
  width: 100%;
`;

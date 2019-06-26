import React from 'react';
import styled from 'styled-components';

import Form from "../form/form";

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #CA94FF 0%, rgba(70, 6, 134, 0.81) 100%);
`;

function App() {
  return (
    <AppWrapper>
      <Form/>
    </AppWrapper>
  );
}

export default App;

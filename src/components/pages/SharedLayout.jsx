import { Suspense } from "react";

import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
// import Container from './pageComponents/Container';

const SharedLayout = () => {
  return (
    <>
      <StyledContainer>
        <Header />
      </StyledContainer>
      <StyledContainer>
         <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
          </Suspense>
      </StyledContainer>
    </>
  );
};

export default SharedLayout;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 15px;
`;

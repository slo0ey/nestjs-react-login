import React from "react";
import styled from "styled-components";

type PageProps = {
  children: React.ReactNode;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  background: var(--primary-bg);
`;

const Main = styled.main`
  width: 484px;
  padding: 32px;
  background-color: white;
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 25%);
  border-radius: 16px;
`;

function Page({ children }: PageProps) {
  return (
    <Container>
      <Main>{children}</Main>
    </Container>
  );
}

export default Page;

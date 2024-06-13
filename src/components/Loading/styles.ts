import styled from "styled-components";

export const LoadingWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  display: grid;
  place-content: center;
  background-color: rgba(0, 0, 0, 0.2);

  > svg {
    width: 60px;
    height: 60px;
    color: rgb(20 18 110);

    animation: spin 1s infinite ease-out;
  }

  @keyframes spin {
    to {
      rotate: 360deg;
    }
  }
`;

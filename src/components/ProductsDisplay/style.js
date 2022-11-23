import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;
`;

export const DisplayHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: row;
  div {
    width: 45%;
    height: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: end;
    h1 {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: start;
    }
    button {
      display: flex;
      flex-direction: row;
    }
  }
`;

export const LineDivisory = styled.div`
  width: 100%;
  height: 0.1rem;
  background: var(--dark-gray);
`;

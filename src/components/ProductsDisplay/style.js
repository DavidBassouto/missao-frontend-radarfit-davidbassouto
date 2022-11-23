import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.2rem;
`;

export const DisplayHeader = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  align-items: center;
  flex-direction: row;
  gap: 1rem;
  justify-content: space-between;
  gap: 0.5rem;
  h1 {
    display: flex;
    flex-direction: row;
    justify-content: start;
  }
  button {
    display: flex;
    width: 3rem;
    height: 3rem;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 10rem;
    border: none;
    background-color: var(--dark-green);
    font-size: 2rem;
    color: var(--soft-gray);
    transition: 0.2s;
    &:hover {
      filter: brightness(1.4);
    }
  }
`;

export const LineDivisory = styled.div`
  width: 100%;
  height: 0.1rem;
  background: var(--dark-gray);
`;
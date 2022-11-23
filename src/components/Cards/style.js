import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 5rem;
  background: var(--white);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 0.5rem;
  gap: 1rem;
 
  &:hover {
    cursor: pointer;
    filter: brightness(0.98);
  }
  &:active {
    svg {
      transition: 0.2s;
      fill: var(--green);
    }
  }
`;

export const InformationField = styled.div`
  width: 70%;
  height: 4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  h5 {
    font-weight: bolder;
    font-size: 1rem;
  }
  h6 {
    font-weight: bolder;
    font-size: 0.9rem;
    color: var(--green);
  }
  p {
    color: var(--gray);
    font-weight: bolder;
  }
`;

export const TagField = styled.div`
  width: 25%;
  height: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

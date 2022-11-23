import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-evenly;
  padding: .6rem;
  background-color: var(--white);
  width: 100%;
  height: 95%;
  gap: 1rem;
  gap: 0.5rem;
  h3{
    color: var(--green);
  }
`;

export const PriceField = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-evenly;
  p{
    font-weight: bold;
    color:var(--gray)
  }

`
export const DescriptionField = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 50%;
  padding: 0.5rem;
  p{
    font-weight: bold;
    color:var(--dark-gray)
  }

`

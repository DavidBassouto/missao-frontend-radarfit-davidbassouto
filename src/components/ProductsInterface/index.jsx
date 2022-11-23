import { Cards } from "../Cards";
import { DetailField } from "../DetailField";
import { Container, InsideContainer } from "./style";

export const ProductInterface = () => {
  return (
    <>
      <Container>
        <InsideContainer>
          <h2>Lista de Produtos</h2>
          <Cards />
        </InsideContainer>
        <InsideContainer>
          <h2>Detalhes</h2>
          <DetailField />
        </InsideContainer>
      </Container>
    </>
  );
};

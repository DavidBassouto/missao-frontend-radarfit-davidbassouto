import { ProductInterface } from "../ProductsInterface";
import { Container, DisplayHeader, LineDivisory } from "./style";

export const ProductDisplay = () => {
  return (
    <Container>
      <DisplayHeader>
        <h1>Produtos</h1>
        <button>+</button>
      </DisplayHeader>
      <LineDivisory />
      <ProductInterface />
    </Container>
  );
};

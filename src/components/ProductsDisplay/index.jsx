import { ProductInterface } from "../ProductsInterface";
import { Container, DisplayHeader, LineDivisory } from "./style";

export const ProductDisplay = () => {
  return (
    <Container>
      <DisplayHeader>
        <div className="product">
          <h1>Produtos</h1>
        </div>
        <div class="button">
          <button>+</button>
        </div>
      </DisplayHeader>
      <LineDivisory />
      <ProductInterface />
    </Container>
  );
};

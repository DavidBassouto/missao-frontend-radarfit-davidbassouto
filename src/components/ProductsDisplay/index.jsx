import { ProductInterface } from "../ProductsInterface";
import { Container, DisplayHeader, LineDivisory } from "./style";

export const ProductDisplay = ({ productsInfo, filteredProducts}) => {
  return (
    <Container>
      <DisplayHeader>
        <h1>Produtos</h1>
        <button>+</button>
      </DisplayHeader>
      <LineDivisory />
      <ProductInterface productsInfo={productsInfo} filteredProducts={filteredProducts} />
    </Container>
  );
};

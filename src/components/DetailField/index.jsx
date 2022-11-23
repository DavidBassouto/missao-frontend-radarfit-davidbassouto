import { LineDivisory } from "../ProductsDisplay/style";
import {
  CardEditField,
  Container,
  DescriptionField,
  PriceField,
} from "./style";
import { Tag } from "phosphor-react";



export const DetailField = () => {
  return (
    <Container>
      <h3>Alexa Echo3</h3>
      <PriceField>
        <h4>Valor</h4>
        <p>R$300,00</p>
      </PriceField>
      <DescriptionField>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
          vitae? Iste, distinctio iure veniam fugiat ab aspernatur enim aut sunt
          unde illum corrupti debitis beatae necessitatibus eveniet ratione
          perspiciatis repudiandae?
        </p>
      </DescriptionField>
      <LineDivisory />
      <CardEditField>
        <button>Editar</button>
        <Tag size={35} color="#222d35" weight="fill" />
      </CardEditField>
    </Container>
  );
};

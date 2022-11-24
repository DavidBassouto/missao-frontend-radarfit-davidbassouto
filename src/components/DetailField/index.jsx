import { LineDivisory } from "../ProductsDisplay/style";
import {
  CardEditField,
  Container,
  DescriptionField,
  PriceField,
} from "./style";
import { Tag } from "phosphor-react";

export const DetailField = ({ productById }) => {
  return (
    <Container>
      <h3>{productById.produto}</h3>
      <PriceField>
        <h4>Valor</h4>
        <p>{`R$ ${productById.valor.toFixed(2)}`}</p>
      </PriceField>
      <DescriptionField>
        <p>{productById.descricao}</p>
      </DescriptionField>
      <LineDivisory />
      <CardEditField>
        <button>Editar</button>
        <Tag size={35} color="#222d35" weight="fill" />
      </CardEditField>
    </Container>
  );
};

import { LineDivisory } from "../ProductsDisplay/style";
import {
  CardEditField,
  Container,
  DescriptionField,
  PriceField,
} from "./style";
import { Trash } from "phosphor-react";
import { useState } from "react";

export const DetailField = ({ productById }) => {
  const [modelDelete, setModalDelete] = useState(false);
  const [modelEdit, setModalEdit] = useState(false);

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
        <Trash
          size={35}
          color="#222d35"
          weight="fill"
          cursor={"pointer"}
          onClick={() => setModalDelete(true)}
        />
      </CardEditField>
    </Container>
  );
};

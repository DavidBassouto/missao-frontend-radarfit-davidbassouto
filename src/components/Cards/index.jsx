import { Container, InformationField, TagField } from "./style";
import { Tag } from "phosphor-react";
import axios from "axios";

export const Cards = ({ product, setProductByID }) => {


  const getProductByID = (id) => {
    axios
      .get(
        `https://radarfit-backend-davidbassouto.herokuapp.com/produtos/${id}`
      )
      .then((res) => setProductByID(res.data));
  };

  return (
    <Container
      id={product.id}
      onClick={(e) => getProductByID(e.currentTarget.id)}
    >
      <InformationField>
        <h5>{product.produto}</h5>
        <h6>Eletrônico</h6>
        <p>{"R$ " + product.valor.toFixed(2)}</p>
      </InformationField>
      <TagField>
        <Tag size={40} color="#222d35" weight="fill" />
      </TagField>
    </Container>
  );
};

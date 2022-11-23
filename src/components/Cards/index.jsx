import { Container, InformationField, TagField } from "./style";
import { Tag } from "phosphor-react";

export const Cards = () => {
  return (
    <Container>
      <InformationField>
        <h5>Alexa Echo 3</h5>
        <h6>Eletrônico</h6>
        <p>R$300,00</p>
      </InformationField>
      <TagField>
      <Tag size={40} color="#222d35" weight="fill" />
      </TagField>
    </Container>
  );
};

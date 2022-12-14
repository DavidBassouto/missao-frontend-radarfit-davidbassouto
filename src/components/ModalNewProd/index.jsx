import {
  BackgroundModal,
  ButtonStyled,
  ModalContainer,
  ModalHeader,
  ModalOptions,
} from "./style";

import axios from "axios";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export const ModalNewProd = ({ setModalNewProd }) => {
  const formSchema = yup.object().shape({
    produto: yup.string().required("Campo obrigatório"),
    valor: yup
      .number()
      .positive("Valor deve ser maior que 0")
      .required("Campo obrigatório"),
    descricao: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmits = ({ produto, descricao, valor }) => {
    const product = { produto, descricao, valor };
    axios
      .post(
        `https://radarfit-backend-davidbassouto.herokuapp.com/produtos`,
        product
      )
      .then((_) => {
        console.log(product);
        setModalNewProd(false);
      })
      .catch((err) => console.log("Ops! Algo deu errado"));
  };

  return (
    <BackgroundModal>
      <ModalContainer>
        <ModalHeader>
          <div>
            <h5>Novo Produto</h5>
            <button onClick={() => setModalNewProd(false)}>X</button>
          </div>
        </ModalHeader>
        <ModalOptions>
          <form id="form" onSubmit={handleSubmit(onSubmits)}>
            <div className="productField">
              <input placeholder="Produto" {...register("produto")} />
              <input placeholder="Valor R$" {...register("valor")} />
            </div>
            <div className="moreInfoField">
              <input placeholder="Descricao" {...register("descricao")} />
            </div>
            <div className="spanField">
              {errors.produto && <span>{errors.produto?.message}</span>}
              {errors.valor && <span>{errors.valor?.message}</span>}
              {errors.descricao && <span>{errors.username?.message}</span>}
            </div>
          </form>
        </ModalOptions>
        <ButtonStyled form="form" type="submit">
          Add
        </ButtonStyled>
      </ModalContainer>
    </BackgroundModal>
  );
};

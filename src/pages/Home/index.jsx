
import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { ProductDisplay } from "../../components/ProductsDisplay";
import { Container } from "./styles";

export const Home = () => {
  const [productsInfo, setProductsInfo] = useState([]);

  const getProducts = () => {
    axios
      .get(`https://radarfit-backend-davidbassouto.herokuapp.com/produtos`)
      .then((res) => setProductsInfo(res.data));
  };

  useEffect(() => {
    getProducts();
  }, [productsInfo]);


  const [filteredProducts, setFilteredProducts] = useState([]);
  
  function handleFilter(textToSearch) {
    const filtedName = productsInfo.filter((prod) => {
      return (
        prod.produto.toLowerCase().includes(textToSearch.toLowerCase())
      );
    });
    setFilteredProducts(filtedName);
  }
  return (
    <Container>
      <Header handleFilter={handleFilter}/>
      <ProductDisplay productsInfo={productsInfo} filteredProducts={filteredProducts} />
    </Container>
  );
};

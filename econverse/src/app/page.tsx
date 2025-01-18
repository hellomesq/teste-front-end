'use client'
import React, { useEffect, useState } from "react";
import Navbar from "./components/global/Navbar";
import Categorias from "./components/categorias/Categorias";
import Carousel from "./components/produtos/Produtos";
import Parceiros from "./components/parceiros/Parceiros";
import './global.css';

interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Carrega o arquivo JSON da pasta public
    fetch("/produtos.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);  // Aqui você pega os produtos do JSON
      })
      .catch((error) => console.error("Error loading the JSON:", error));
  }, []);

  return (
    <>
      <Navbar />
      <div className="banner"><img src="banner_um.png" alt="" /></div>
      <Categorias />
      <Carousel items={products} active={0} />
      <Parceiros />
    </>
  );
};
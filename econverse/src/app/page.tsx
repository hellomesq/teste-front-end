'use client'

import React, { useEffect, useState } from "react";
import Navbar from "./components/global/Navbar";
import Categorias from "./components/categorias/Categorias";
import CategoriasProdutos from "./components/produtos/CategoriasProd";
import Carousel from "./components/produtos/Produtos";
import Parceiros from "./components/parceiros/Parceiros";
import Marcas from "./components/produtos/Marcas";
import NewsLetter from "./components/global/NewsLetter";
import Footer from "./components/global/Footer";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./global.css";

interface Product {
  id: number;
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/produtos.json")
      .then((response) => response.json())
      .then((data) => {
        const productsWithId = data.products.map((product: any, index: number) => ({
          ...product,
          id: index, 
        }));
        setProducts(productsWithId);
      })
      .catch((error) => console.error("Erro ao consultar arquivo Json", error));
  }, []);

  return (
    <>
      <Navbar />
      <div className="banner">
        <button>Ver produto</button>
        <img src="banner_um.png" alt="" />
      </div>
      <Categorias />
      <h1 className="title">Produtos relacionados</h1>
      <CategoriasProdutos />
      <Carousel items={products} active={0} />
      <Parceiros />
      <h1 className="title">Produtos relacionados</h1>
      <a href="#" className="option_cat">Ver todos</a>
      <Carousel items={products} active={0} />
      <Parceiros />
      <Marcas />
      <h1 className="title">Produtos relacionados</h1>
      <a href="#" className="option_cat">Ver todos</a>
      <Carousel items={products} active={0} />
      <NewsLetter />
      <Footer />
    </>
  );
}

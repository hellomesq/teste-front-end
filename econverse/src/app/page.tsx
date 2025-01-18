import Navbar from "./components/global/Navbar";
import Categorias from "./components/categorias/Categorias"
import Carousel from "./components/produtos/Produtos";
import Parceiros from "./components/parceiros/Parceiros"
import './global.css';

export default function Home() {
  const items = [
    {
      id: 1,
      image: "celular.png",
      description: "Lorem ipsum dolor sit amet.",
      price: "R$ 28,90",
      installment: "ou 3x de 9,63 sem juros",
      shipping: "Frete grátis",
    },
    {
      id: 2,
      image: "celular.png",
      description: "fdsd.",
      price: "R$ 28,90",
      installment: "ou 3x de 9,63 sem juros",
      shipping: "Frete grátis",
    },
    {
      id: 3,
      image: "celular.png",
      description: "Lorem",
      price: "R$ 28,90",
      installment: "ou 3x de 9,63 sem juros",
      shipping: "Frete grátis",
    },
    {
      id: 4,
      image: "celular.png",
      description: " ipsum",
      price: "R$ 28,90",
      installment: "ou 3x de 9,63 sem juros",
      shipping: "Frete grátis",
    },
    {
      id: 5,
      image: "celular.png",
      description: "dolor ",
      price: "R$ 28,90",
      installment: "ou 3x de 9,63 sem juros",
      shipping: "Frete grátis",
    },
    {
      id: 6,
      image: "celular.png",
      description: "sit ",
      price: "R$ 28,90",
      installment: "ou 3x de 9,63 sem juros",
      shipping: "Frete grátis",
    },
    {
      id: 7,
      image: "celular.png",
      description: "amet.",
      price: "R$ 28,90",
      installment: "ou 3x de 9,63 sem juros",
      shipping: "Frete grátis",
    },
    {
      id: 8,
      image: "celular.png",
      description: "oito",
      price: "R$ 28,90",
      installment: "ou 3x de 9,63 sem juros",
      shipping: "Frete grátis",
    },
    {
      id: 9,
      image: "celular.png",
      description: "nove",
      price: "R$ 28,90",
      installment: "ou 3x de 9,63 sem juros",
      shipping: "Frete grátis",
    },
    {
      id: 10,
      image: "celular.png",
      description: "dez",
      price: "R$ 28,90",
      installment: "ou 3x de 9,63 sem juros",
      shipping: "Frete grátis",
    }
  ];
  
  return (
  <>
  <Navbar />
  <div className="banner"><img src="banner_um.png" alt="" /></div>
  <Categorias />
  <Carousel items={items} active={0} />
  <Parceiros />
  </>
  );
}

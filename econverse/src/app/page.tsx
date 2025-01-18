import Navbar from "./components/global/Navbar";
import Categorias from "./components/categorias/Categorias"
import Carousel from "./components/produtos/Produtos";
import './global.css';

export default function Home() {
  const items = [
    {
      id: 1,
      image: "image1.png",
      description: "Lorem ipsum dolor sit amet.",
      price: "R$ 28,90",
      installment: "ou 3x de 9,63 sem juros",
      shipping: "Frete grátis",
    },
    {
      id: 2,
      image: "image2.png",
      description: "fdsd.",
      price: "R$ 28,90",
      installment: "ou 3x de 9,63 sem juros",
      shipping: "Frete grátis",
    },
    {
      id: 3,
      image: "image3.png",
      description: "Lorem",
      price: "R$ 28,90",
      installment: "ou 3x de 9,63 sem juros",
      shipping: "Frete grátis",
    },
    {
      id: 4,
      image: "image4.png",
      description: " ipsum",
      price: "R$ 28,90",
      installment: "ou 3x de 9,63 sem juros",
      shipping: "Frete grátis",
    },
    {
      id: 5,
      image: "image5.png",
      description: "dolor ",
      price: "R$ 28,90",
      installment: "ou 3x de 9,63 sem juros",
      shipping: "Frete grátis",
    },
    {
      id: 6,
      image: "image6.png",
      description: "sit ",
      price: "R$ 28,90",
      installment: "ou 3x de 9,63 sem juros",
      shipping: "Frete grátis",
    },
    {
      id: 7,
      image: "image7.png",
      description: "amet.",
      price: "R$ 28,90",
      installment: "ou 3x de 9,63 sem juros",
      shipping: "Frete grátis",
    },
    {
      id: 8,
      image: "image8.png",
      description: "oito",
      price: "R$ 28,90",
      installment: "ou 3x de 9,63 sem juros",
      shipping: "Frete grátis",
    },
    {
      id: 9,
      image: "image9.png",
      description: "nove",
      price: "R$ 28,90",
      installment: "ou 3x de 9,63 sem juros",
      shipping: "Frete grátis",
    },
    {
      id: 10,
      image: "image10.png",
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
  </>
  );
}

import React from "react";
import "./Home.css";
import homeLogo from '../../assets/homeLogo.jpg'

function Home() {
  return (
    <>
      <h1 className="titulo">Home</h1>

      <img src={homeLogo} className="img" alt="Imagem tela inicial" />
    </>
  );
}
console.log(React.version);

export default Home;

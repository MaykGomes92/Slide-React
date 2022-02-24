import React from "react"
import './App.css';
import carro1 from "./img/f1-mercedez-oficial.png"
import carro2 from "./img/f1-mercedez3.png"
import carro3 from "./img/f1-mercedez4.png"
import carro4 from "./img/f1-mercezes2.png"
import carro5 from "./img/aa-teste.jpg"
import carro6 from "./img/antigo.jpg"
import carro7 from "./img/4k-car.jpg"
import carro8 from "./img/bmw-m2-4k-cars.jpg"
import carro9 from "./img/porsche-911-gt3.jpg"
import seta from "./img/seta-neon-azul.png"

function App() {


  const dados = React.useRef(null)

  function esquerda(){
    dados.current.scrollLeft -= dados.current.offsetWidth;
  }
  function direita(){
    dados.current.scrollLeft += dados.current.offsetWidth;
  }

  React.useEffect(() => {
    setInterval(() => {
      dados.current.scrollLeft += dados.current.offsetWidth;
    }, 3000);
    setInterval(() => {
    dados.current.scrollLeft = 0
    }, 30000);
  },[dados])


  return (
      <>
          <div className="containerSlides">
            <img onClick={esquerda} id="seta1" src={seta} alt="seta"/>
              <div ref={dados} className="slides">
                  <img src={carro1} alt="carro"/>
                  <img src={carro2} alt="carro"/>
                  <img src={carro3} alt="carro"/>
                  <img src={carro4} alt="carro"/>
                  <img src={carro5} alt="carro"/>
                  <img src={carro6} alt="carro"/>
                  <img src={carro7} alt="carro"/>
                  <img src={carro8} alt="carro"/>
                  <img src={carro9} alt="carro"/>
              </div>
            <img onClick={direita} id="seta2" src={seta} alt="seta"/>

          </div>
      </>
  )
}

export default App;

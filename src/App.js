import React from "react";
import Header from './Header'
import Content from "./Content";

import Cards from "./Cards"
import Card from "./Card";

import imagem1 from './imagens/imagem1.png'
import imagem2 from './imagens/imagem2.jpg'
function App(){
    return(
        <>
        <Header titulo="Olá mundo"/>
            <h1>Olá Mundo!</h1>

            <Content titulo="Bem Vindo">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper.</p>
          <Cards>
           <Card
           //para adicionar, vocẽ deve importar ele
           imagem={imagem1}
           titulo="Titulo 1"
           texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
           />
         
          <Card
           imagem={imagem2}
           titulo="Titulo 2"
           texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
           />
         
          <Card
           imagem={imagem1}
           titulo="Titulo 1"
           texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
           />
           </Cards>
            </Content>
            
        </>
    )
}

export default App 
import React from "react";
import { Buttons } from '../Buttons/Buttons'
import './Header.css'

function Header() {
  return (
    <header>
      <h3>uma seleção de produtos</h3>
      <h1>especial para você</h1>
      <h5>
        Todos os produtos desta lista foram selecionados a partir da sua
        navegação. Aproveite!
      </h5>
      <Buttons  texto="Conheça a Linx"/>
      <Buttons  texto="Ajude o algoritmo"/>
      <Buttons  texto="Seus produtos"/>
      <Buttons  texto="Compartilhe"/>
    </header>
  );
}

export default Header;

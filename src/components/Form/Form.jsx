import React from "react";
import "../css/Form.css";

function Form() {
  return (
    <div className="textForm">
      <div className="text">
        <h2>Ajude o algoritmo a ser mais certeiro</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          ultricies tellus nec mi porta convallis sollicitudin eu urna. Mauris
          rhoncus erat sed interdum dignissim. Suspendisse semper pretium
          consectetur. Praesent bibendum arcu risus, sit amet iaculis ex tempus
          quis. Cras et erat ut tellus vulputate tincidunt. Aenean lacinia
          euismod augue vel egestas. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Vestibulum vel
          urna tortor. Vivamus et arcu non felis tristique eleifend.
          <br />
          Morbi eu condimentum urna. Curabitur eu magna eget turpis condimentum
          ultrices. Suspendisse quis lorem ultricies, pulvinar purus sed,
          egestas erat. Etiam ultricies a ante vehicula pharetra. Quisque ut
          neque mattis, consequat velit ut, ultrices orci. Nulla varius
          elementum erat vel pharetra. Aenean sit amet nisi diam. Morbi viverra,
          magna ac luctus commodo, odio ante suscipit libero, at mattis augue
          est vel metus.
        </p>
      </div>
      <div>
        <form className="form">
          <label>Seu nome:</label>
          <input type="text" />
          <label>E-mail:</label>
          <input type="text" />
          <label>CPF:</label>
          <input type="text" />
          <div className="radioForm">
            <input
              type="radio"
              id="Masculino"
              name="gender"
              value="Masculino"
            />
            <label htmlFor="Masculino">Masculino</label>
            <br />
            <input type="radio" id="Feminino" name="gender" value="Feminino" />
            <label htmlFor="Feminino">Feminino</label>
            <br />
          </div>
          <button className="formButton" type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default Form;

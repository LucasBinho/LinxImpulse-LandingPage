import { Buttons } from "../Buttons/Buttons";
import "../css/ShareTheNews.css";

function ShareTheNews() {
  return (
    <div className="shareTheNews">
      <h2 className="shareNews">Compartilhe a novidade</h2>
      <p>
        Quer que seus amigos também ganhem a lista personalizada deles? Preencha
        agora!
      </p>
      <form className="shareInput">
          <div className="nameInput">
            <label>Nome do seu amigo:</label>
            <input className="shareName" type="text" />
          </div>
          <div className="emailInput">
            <label>E-mail:</label>
            <input className="shareEmail" type="text" />
          </div>
      </form>
      <Buttons  texto="Enviar agora" />
    </div>
  );
}

export default ShareTheNews;

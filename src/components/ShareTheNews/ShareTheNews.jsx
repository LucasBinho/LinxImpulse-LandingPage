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
      <div className="shareInput">
        <label>Nome do seu amigo:</label>
        <input className="shareName" type="text" />
        <label>E-mail:</label>
        <input className="shareEmail" type="text" />
      </div>
      <Buttons texto="Enviar" />
    </div>
  );
}

export default ShareTheNews;

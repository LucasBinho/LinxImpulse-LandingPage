import Card from "../Card/Card";
import "../css/CardContainer.css";
import axios from "axios";
import { useEffect, useState } from "react";


const url =
  "https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?pages=1";

function CardContainer() {
  const [cardInfo, setCardInfo] = useState([]);
  const [newUrl, setNewUrl] = useState("");
 
  useEffect(() => {
    axios
      .get(url)
      .then((resp) => {
        setCardInfo([...resp.data.products])
        setNewUrl(resp.data.nextPage)
      })
  }, []);


  const handleClick = () => {
    axios.get(`http://${newUrl}`).then((resp) => {
      setCardInfo([...cardInfo, ...resp.data.products])
      setNewUrl(resp.data.nextPage)
  })
  };

  return (
    <div className="CardContainer">
      <div>
        <h2 className="especialSelection">Sua seleção Especial</h2>
      </div>
      <div className="cards">
        {cardInfo.map((card) => ( 
          <Card
            key={card.id}
            imagem={card.image}
            titulo={card.name}
            descricao={card.description}
            precoAntigo={card.oldPrice}
            precoAtual={card.price}
            parcelas={card.installments.count}
            valorParcelas={card.installments.value}
          />
        ))}
      </div>
      <div>
        <button className="addCardButton" onClick={handleClick}>Adicione mais itens aqui!</button>
      </div>
    </div>
  );
}

export default CardContainer;

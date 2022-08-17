import Card from "../Card/Card"
import { Buttons } from "../Buttons/Buttons"
import '../css/CardContainer.css'
import axios from "axios";
import { useEffect, useState } from "react";

const url = 'https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?pages=1'

 function CardContainer(){

    const [cardInfo, setCardInfo] = useState([]);

    useEffect(()=>{
         axios.get(url)
        .then(resp => setCardInfo([...resp.data.products]) )
      }, [])

    return(
        <div className="CardContainer">
            <div>
                <hr />
                <h2>Sua seleção Especial</h2>
                <hr />
            </div>
            <div className="cards">
                {cardInfo.map((card) =>
                    <Card key={card.id}
                    imagem={card.image}
                     titulo={card.name}
                     descricao={card.description}
                     precoAntigo={card.oldPrice}
                     precoAtual={card.price}
                     parcelas={card.installments.count}
                     valorParcelas={card.installments.value}
                     />
                )}
            </div>
            <div>
                <Buttons texto="Ainda mais produtos aqui!"/>
            </div>
        </div>
    )
}

export default CardContainer
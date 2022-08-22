import '../css/Card.css'

function Card(props) {
  return (
    <div className='Card'>
      <div className="responsiveCardImg">
        <img  src={props.imagem}></img>
      </div>
      <div className='responsiveCardText'>
        <h5 className='nomeProduto'>{props.titulo}</h5>
        <p className='descricao'>{props.descricao}</p>
        <div className="preco">
            <small>De: R${props.precoAntigo.toFixed(2).replace(".", ",")}</small>
            <strong>Por: R${props.precoAtual.toFixed(2).replace(".", ",")}</strong>
            <small>ou {props.parcelas}x de R${props.valorParcelas.toFixed(2).replace(".", ",")}</small>
            <button type="submit">Comprar</button>
        </div>
      </div>
    </div>
  );
}

export default Card
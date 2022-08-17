import '../css/Card.css'

function Card(props) {
  return (
    <div className='Card'>
      <img src={props.imagem}></img>
      <h5>{props.nome}</h5>
      <p>{props.descricao}</p>
      <div className="preco">
          <small>De: R${props.precoAntigo.toFixed(2).replace(".", ",")}</small>
          <strong>Por: R${props.precoAtual.toFixed(2).replace(".", ",")}</strong>
          <small>ou {props.parcelas}x de R${props.valorParcelas.toFixed(2).replace(".", ",")}</small>
          <button type="submit">Comprar</button>
      </div>
    </div>
  );
}

export default Card
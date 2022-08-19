import '../css/Buttons.css'


export const Buttons = (props) => {
    return <button className='individualButton' onClick={props.onClick}>{props.texto}</button>
}



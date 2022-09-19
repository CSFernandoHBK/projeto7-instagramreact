export default function Usuario(props) {
    return (
        <div className="usuario">
            <img src={props.imgusuario} />
            <div className="texto">
                <strong>{props.arroba}</strong>
                <span>
                    {props.nome}
                    <ion-icon name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}

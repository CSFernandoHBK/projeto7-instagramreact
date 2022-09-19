//dadossugest é como eu imagino que chegariam as informações das sugestões, enviadas por uma API

const dadossugest = [
    { imgperfil: "assets/img/bad.vibes.memes.svg", nomeperfil: "bad.vibes.memes", razaoperfil: "Segue você" },
    { imgperfil: "assets/img/chibirdart.svg", nomeperfil: "chibirdart", razaoperfil: "Segue você" },
    { imgperfil: "assets/img/razoesparaacreditar.svg", nomeperfil: "razoesparaacreditar", razaoperfil: "Novo no Instagram" },
    { imgperfil: "assets/img/adorable_animals.svg", nomeperfil: "adorable_animals", razaoperfil: "Segue você" },
    { imgperfil: "assets/img/smallcutecats.svg", nomeperfil: "smallcutecats", razaoperfil: "Segue você" },
];

function Sugestao(props) {
    return (
        <li className="sugestao">
            <div className="usuario">
                <img src={props.imgperfil} />
                <div className="texto">
                    <div className="nome">{props.nomeperfil}</div>
                    <div className="razao">{props.razaoperfil}</div>
                </div>
            </div>
            <div className="seguir">Seguir</div>
        </li>
    )
}

export default function Sugestoes() {
    return (
        <ul className="sugestoes">
            {dadossugest.map((d) => <Sugestao imgperfil={d.imgperfil} nomeperfil={d.nomeperfil} razaoperfil={d.razaoperfil}/>)}
        </ul>
    )
}
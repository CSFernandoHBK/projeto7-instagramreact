import React from "react";

export default function Usuario(props) {

    const[nome, setNome] = React.useState("Catana");
    const[imagem, setImagem] = React.useState("assets/img/catanacomics.svg");

    function alterarnome(){
        const nomeU = prompt("Qual seu nome?");
        setNome(nomeU);
    }

    function alterarImagem(){
        const imagemU = prompt("Insira o link da imagem");
        setImagem(imagemU);
    }

    return (
        <div className="usuario">
            <img onClick={alterarImagem} src={imagem} />
            <div className="texto">
                <strong>{props.arroba}</strong>
                <span>
                    {nome}
                    <ion-icon onClick={alterarnome} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}

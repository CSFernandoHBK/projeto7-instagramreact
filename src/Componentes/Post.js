import React from "react";

export default function Post(props) {

    const[like, setLike] = React.useState("heart-outline");
    const[save, setSave] = React.useState("bookmark-outline");
    const[numlikes, setNumlikes] = React.useState(props.numerolikes);
    const[corlike, setCorlike] = React.useState("");

    function botaolike(){
        const likeU = "heart";
        setLike(likeU);
        setNumlikes(numlikes + 1);
        setCorlike("vermelho");
    }

    function botaosave(){
        const saveU = "bookmark";
        setSave(saveU);
    }

    return (
        <div className="post">
            <div className="topo">
                <div className="usuario">
                    <img src={props.imgusuario} />
                    {props.nomeusuario}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo">
                <img src={props.imgpost} />
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon onClick={botaolike} class={corlike} name={like}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon onClick={botaosave} name={save}></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={props.imglike} />
                    <div className="texto">
                        Curtido por <strong>{props.usuariolike}</strong> e <strong>outras {numlikes} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}
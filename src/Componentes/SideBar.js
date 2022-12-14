import Sugestoes from "./sidebar/Sugestoes";
import Usuario from "./sidebar/Usuario";

export default function SideBar() {
    return (
        <div className="sidebar">
            <Usuario arroba="catanacomics"/>
            <Sugestoes/>
            <div className="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                Hashtags • Idioma
            </div>
            <div className="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}
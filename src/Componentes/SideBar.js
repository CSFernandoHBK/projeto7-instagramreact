import Sugestoes from "./sidebar/Sugestoes";
import Usuario from "./sidebar/Usuario";

export default function SideBar() {
    return (
        <div className="sidebar">
            <Usuario imgusuario="assets/img/catanacomics.svg" arroba="catanacomics" nome="Catana"/>
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
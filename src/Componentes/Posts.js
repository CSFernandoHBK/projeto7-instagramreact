import Post from "./Post";

const dadosposts = [
    {nomeusuario:"meowed", 
    imgusuario:"assets/img/meowed.svg", 
    imgpost:"assets/img/gato-telefone.svg",
    imglike:"assets/img/respondeai.svg",
    usuariolike:"respondeai",
    numerolikes: 101.523},
    {nomeusuario:"barked", 
    imgusuario:"assets/img/barked.svg", 
    imgpost:"assets/img/dog.svg",
    imglike:"assets/img/meowed.svg",
    usuariolike:"meowed",
    numerolikes: 201.523},
]

export default function Posts(){
    return(
        <div className="posts">
            {dadosposts.map((d) => <Post nomeusuario = {d.nomeusuario} 
            imgusuario={d.imgusuario} 
            imgpost={d.imgpost}
            imglike={d.imglike}
            usuariolike={d.usuariolike}
            numerolikes={d.numerolikes}/>)}
        </div>
    )
}
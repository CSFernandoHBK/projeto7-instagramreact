export default function Corpo(){
    const nome = prompt("Qual seu nome?");
    const idade = parseInt(prompt("Idade?"));

    return(
        <div>
            <p className="negrito">Seja bem vindo, {nome}!</p>
            <div>Voce tem {idade} anos e é {(idade > 17) ? "Maior de idade" : "Menor de idade"}</div>
        </div>
    )
}
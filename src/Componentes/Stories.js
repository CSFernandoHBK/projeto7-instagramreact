import Story from "./Story";

const dadosstories = [
    { link: "assets/img/9gag.svg", user: "9gag" },
    { link: "assets/img/meowed.svg", user: "meowed" },
    { link: "assets/img/barked.svg", user: "barked" },
    { link: "assets/img/nathanwpylestrangeplanet.svg", user: "nathanwpylestrangeplanet" },
    { link: "assets/img/wawawicomics.svg", user: "wawawicomics" },
    { link: "assets/img/respondeai.svg", user: "respondeai" },
    { link: "assets/img/filomoderna.svg", user: "filomoderna" },
    { link: "assets/img/memeriagourmet.svg", user: "memeriagourmet" },
]

export default function Stories() {
    return (
        <div className="stories">
            {dadosstories.map((d) => <Story link={d.link} user={d.user} />)}
            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}
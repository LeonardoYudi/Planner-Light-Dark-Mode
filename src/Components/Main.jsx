import { InfoStyle,ImageStyle } from "../Sections/Screen"
import NotImage from "../assets/not.jpg"

function Main(){
    return(
        <>
            <InfoStyle>
                <h2>
                    Gerencie aqui o seu Workspace
                </h2>
                <h3>
                    Rotina, calendário e agenda tudo no navegador - com Planner
                </h3>
                <button>Experimente Planner de graça</button>
            </InfoStyle>
            <ImageStyle>
                <img src={NotImage} alt="Imagem Notbook"></img>
            </ImageStyle>
        </>
    )
}

export default Main;
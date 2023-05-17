import { Link } from "react-router-dom";

export default function CharacterCard(props){
    console.log(props)
    return (
        <>
        <Link to={`/characters/${props.characters.name}`} className="character-link">
            <div style={{"background": `url(${props.characters.images}) no-repeat center center`, "WebkitBackgroundSize": "cover"}} className="item-card">
                <h2>Character: {props.characters.name}</h2>
            </div>
        </Link>
        </>
    )
}
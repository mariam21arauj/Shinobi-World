import { Link } from "react-router-dom";

export default function CharacterCard(props){
        return (
            <>
            <Link to={`/character/${props.characters.id}`} className="character-link">
                <div>
                    <h2>Character: {props.characters.name}</h2>
                </div>
            </Link>
            </>
        )
    }
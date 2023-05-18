import { Link } from "react-router-dom";

export default function ClanCard(props){
    console.log(props)
    return (
        <>
        <Link to={`/clan/${props.clans.id}`}>
                <h2>Clan: {props.clans.name}</h2>
        </Link>
        </>
    )
}
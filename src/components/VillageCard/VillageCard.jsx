import { Link } from "react-router-dom";

export default function VillageCard(props){
    console.log(props)
    return (
        <>
        <Link to={`/village/${props.villages.id}`}>
                <h2>Village: {props.villages.name}</h2>
        </Link>
        </>
    )
}
import { Link } from "react-router-dom";

export default function TailedBeastCard(props){
    console.log(props)
    return (
        <>
        <Link to={`/tailedbeasts/${props.tailedBeasts.name}`}>
                <h2>Tailed Beast: {props.tailedBeasts.name}</h2>
        </Link>
        </>
    )
}
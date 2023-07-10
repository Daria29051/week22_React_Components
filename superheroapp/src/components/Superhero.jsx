import React from "react";
import './Superhero.css';


function Superhero(props) {
    return (
<React.Fragment>
<div className="hero">
        <h1 className="hero__name">{props.name}</h1>
        <div className="hero__charactetistic hero__universe"><span className="hero__subtitle">Вселенная:</span> {props.universe}</div>
        <div className="hero__charactetistic hero__alterego"><span className="hero__subtitle">Альтер эго:</span> {props.alterego}</div>
        <div className="hero__charactetistic hero__occupation"><span className="hero__subtitle">Род деятельности:</span> {props.occupation}</div>
        <div className="hero__charactetistic hero__friends"><span className="hero__subtitle">Друзья:</span> {props.friends}</div>
        <div className="hero__charactetistic hero__superpowers"><span className="hero__subtitle">Суперсилы:</span> {props.superpowers}</div>
        <img className="hero__img"src={props.url} alt="hero image"/>
        <button className="hero__button"> О герое</button>
        </div>
</React.Fragment>

    )
}

export default Superhero;
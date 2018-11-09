import React from 'react';

const Card = (props) => {
    const style = { backgroundImage: `url(data:image/png;base64,${props.image})` };
    return (
        <div className="card" style={style}>
            <div className="card-play" onClick={props.fn}>
                <i className="fa fa-2x fa-play-circle"></i>
            </div>
            <div className="card-detail">
                <h3>{props.title}</h3>
                <h4>{props.subtitle}</h4>
            </div>
        </div>
    );
}

const Avatar = (props) => {
    const style = { backgroundImage: `url('${props.image}')` };
    return (
        <div className="avatar">
            <div className="avatar-image" style={props.image ? style : null}>
                <i className="fa fa-2x fa-play-circle"></i>
            </div>
            <div className="avatar-detail">
                <h3>{props.title}</h3>
                <h4>{props.subtitle}</h4>
            </div>
        </div>
    );
}

const Row = (props) => {
    return (
        <div className="row">
            <div className="column" onClick={props.fn}>
                <i className="fa fa-2x fa-play-circle"></i>
            </div>
            <div className="column">
                {props.text1}
            </div>
            <div className="column">
                {props.text2}
            </div>
            <div className="column">
                {props.text3}
            </div>
            <div className="column">
                {props.text4}
            </div>
        </div>
    );
}

export { Card, Avatar, Row };
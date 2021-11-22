import React, { Component } from 'react';

const Like = props => {
    let heartIcon = 'fa fa-heart';
    if (!props.liked) heartIcon += '-o';

    return (<span><i onClick={props.onClick} style={{cursor: 'pointer'}} className={heartIcon} aria-hidden="true"></i></span>);
};

export default Like;
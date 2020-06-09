import React from 'react';
import './mycss.css';

function MediaCard(props){
    return <div>
<h1>MediaCard component with three props, Title, Body and Image..!</h1>
{props.t} 
{props.b} 
<img src= {props.imgurl} alt="logo"/>
           </div>
}
export default MediaCard;
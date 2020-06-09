import React from 'react';
import './mycss.css';

const Contact = ({name, email, cell, kpk})=>{
    return <div>
        <span>
        Name : {name} <br/>
        Email : {email}<br/>
        Cellphone: {cell}<br/>
        Province: {kpk}<br/>
        </span>
    </div>
}

export default Contact;
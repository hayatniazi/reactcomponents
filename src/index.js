import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/*import App from './App';*/
import MediaCard from './MediaCard';
import Contact from './Contact';

import * as serviceWorker from './serviceWorker';



  


ReactDOM.render(
<MediaCard t={<h2>This is title where I will introduce bit about myself</h2>} b={<p>This is body tag with simple css, it's quite good and fantastic experience in bootcamp. Although I am CISCO Network Engineer by profession and have almost 6 years of experience but I have deep passion for programming. I have developed one software which is GUI in VB and Image processing to remove some confidential info from pdf documents like account details. My final year project was Autonomous wheelchair using Biiometric in which a wheelchair was controlled by eyes. this project was machine learning and was a combination of Real time embedded system, Image processing and control systems.!</p>} imgurl="https://picsum.photos/seed/picsum/220/100" />, document.getElementById('root')
);

ReactDOM.render(
<Contact name="Hayat Muhammad Niazi" email="engr.hmn@gmail.com" cell="03339158088" kpk="KPK"/>, document.getElementById("contact")
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

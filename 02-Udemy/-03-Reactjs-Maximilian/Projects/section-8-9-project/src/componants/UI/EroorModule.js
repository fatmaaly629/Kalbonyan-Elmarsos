import React from 'react';


const ErrorModal = {props) => { 
 return(
<div>
<div className = { classes.backdrop} onClick= {props.onconfirm} />
<card className = { classes.modal}>
<header className={classes.header}>
<h2>{props.title}</h2>
</header>
<div className= {classes.content}>
<p>
{props.message}
</p></div>
<footer className={classes.actions}>
  <buttom onclick={props.onconfirm}>okey</buttom>
</footer>
</card>
</div>
)}






export default EroorModule
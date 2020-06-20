import React from 'react';
import ReactDOM from 'react-dom';


import Badge from './components/Badge'
//const jsx = <h1>Hola fredy</h1>

// const element = React.createElement('a',
// {href: 'https:google.com'},
// 'ir a google');

const name = 'John';

const sum = () => 3+3 ; 
// const element = React.createElement(
//     'h1',
//     {},
//     `hola soy ${name}`);

// const jsx = <h1>Hola soy, {sum()}</h1>

// const jsx = <div>
//     <h1>Hola soy Fredy</h1>
//     <p>Este es un parrafo</p>
// </div>

// const element = React.createElement(
//     'div',
//     {},
//     React.createElement('h1',{},'Hola soy fredy'),
//     React.createElement('p',{},'esto es un parrafo')
// )

const container = document.getElementById('app')

//ReactDOM.render(__que__, __ donde __);
ReactDOM.render(<Badge/>,container);
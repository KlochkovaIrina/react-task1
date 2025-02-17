
// const currentYear = new Date().getFullYear();//декларативный подход


// export const App = ()=>{
// 	return (
// 		//декларативный подход
// 		<div className='App'>
// 			<footer className="App-footer">
// 				<a href="#" className="App-link">Learn React</a>
// 				<h1 className='currentYear'>{currentYear}</h1>
// 			</footer>
// 		</div>
// 	)
// }
import React from 'react';

const currentYear = new Date().getFullYear(); // Декларативный подход

export const App = () => {
  return React.createElement(
    'div',
    { className: 'App' },
    React.createElement(
      'footer',
      { className: 'App-footer' },
      React.createElement(
        'a',
        { href: '#', className: 'App-link' },
        'Learn React'
      ),
      React.createElement(
        'h1',
        { className: 'currentYear' },
        currentYear
      )
    )
  );
};



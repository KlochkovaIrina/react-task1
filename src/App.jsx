
const currentYear = new Date().getFullYear();//декларативный подход


export const App = ()=>{
	return (
		//декларативный подход
		<div className='App'>
			<footer className="App-footer">
				<a href="#" className="App-link">Learn React</a>
				<h1 className='currentYear'>{currentYear}</h1>
			</footer>
		</div>
	)
}







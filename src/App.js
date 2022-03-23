import logo from "./logo.svg";
import "./App.css";

function App() {
	const name = "Fabrice Geib"
	const x = true

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
			<main className="App-main">
				<div className="">
					<p>{name}</p>
					<code>const x = {x ? "True" : "False"}</code>
				</div>
			</main>
		</div>
	);
}

export default App;

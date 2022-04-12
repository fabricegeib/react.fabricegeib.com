import logo from "./logo.svg";
import "./App.css";
import { useState } from "react"
import Tasks from './components/Tasks'

function App() {
	const name = "Fabrice Geib"
	const x = true

	const [tasks, setTasks] = useState([
		{
			id: 1,
			text: 'learn react',
			day: '25 mars à 12h00',
			reminder: true,
		},
		{
			id: 2,
			text: 'second task',
			day: '25 mars à 13h00',
			reminder: false,
		},
		{
			id: 3,
			text: 'three task',
			day: '25 mars à 14h00',
			reminder: true,
		}
	])

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
				<div className="App-container">
					<p>Hello world I'm {name}</p>
					<code>const x = {x ? "True" : "False"}</code>
				</div>

				<div className="App-container">
					<h2>Tasks :</h2>
					<Tasks tasks={tasks} />
				</div>
			</main>
		</div>
	);
}

export default App;

// const tasks = [
// 	{
// 		id: 1,
// 		text: 'first task',
// 		day: '25 mars à 12h00',
// 		reminder: true,
// 	},
// 	{
// 		id: 2,
// 		text: 'second task',
// 		day: '25 mars à 13h00',
// 		reminder: false,
// 	},
// 	{
// 		id: 3,
// 		text: 'three task',
// 		day: '25 mars à 14h00',
// 		reminder: true,
// 	}
// ]

import { useState } from "react"

const Tasks = () => {
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
		<div className="container">
			{tasks.map((task) => (<h3 key={task.id} >{task.text}</h3>))}
		</div>
	)
}

export default Tasks
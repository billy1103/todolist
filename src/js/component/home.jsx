import React, { useState } from "react";

//create your first component
const Home = () => {
	const [task, setTask] = useState("");
	const [todoList, setTodoList] = useState([]);

	return (
		<div className="box">
			<h1>todos</h1>
			<div className="ib">
				<input
					type="text"
					placeholder="What needs to be done?"
					onChange={(event) => {
						console.log(event.target.value);
						setTask(event.target.value);
					}}
					value={task}
				/>
				<button
					type="button"
					onClick={() => {
						if (task !== "") {
							setTodoList([...todoList, task]);
							setTask("");
						}
					}}>
					Add Task
				</button>
			</div>
			<ul className="bullets">
				{todoList.map((todo, i) => {
					return (
						<li key={i}>
							{todo}
							<button
								onClick={() => {
									setTodoList(
										todoList.filter(
											(item, index) => index !== i
										)
									);
								}}>
								X
							</button>
						</li>
					);
				})}
			</ul>
			<span>{todoList.length} item left</span>
		</div>
	);
};

export default Home;

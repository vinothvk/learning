import React, {Component} from 'react';
import {render} from 'react-dom';
import KanbanBoard from "./KanbanBoard"

let cardsList = [
	{
		id:1,
		title: "Read the book",
		description: "I should read the whole book",
		status: "inprogress",
		tasks: []
	},
	{
		id:2,
		title: "Write Some Code",
		description: "Code along with the samples in the book",
		status: "todo",
		tasks: [
			{
				id:1,
				name: "ContactList Example",
				done: true
			},
			{
				id:2,
				name: "Kanban Example",
				done: false
			},
			{
				id:3,
				name: "My Own Experiments",
				done: false
			}
		]
	}
];

render(<KanbanBoard cards={cardsList} />, document.getElementById('root'));
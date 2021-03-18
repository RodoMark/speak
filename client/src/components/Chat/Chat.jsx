import React from "react"; 

import { BrowserRouter as router, Route } from 'react-router-dom';

import ChatInput from "./ChatInput.jsx"



export default function Chat(props){

	return	(

		<div>
			<div>Chat Display</div>
			<p>flow of messages</p>
			<ChatInput/>		
			
		</div>
	)
	
}
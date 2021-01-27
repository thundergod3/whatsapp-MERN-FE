import React, { useEffect } from "react";

import "./App.scss";

import Sidebar from "./components/layouts/Sidebar";
import MessageChatting from "./components/messages/MessageChatting";

const App = (): JSX.Element => {
	return (
		<div className="app">
			<div className="app__body">
				<Sidebar />
				<MessageChatting />
			</div>
		</div>
	);
};

export default App;

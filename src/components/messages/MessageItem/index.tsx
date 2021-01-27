import React from "react";

import { Avatar } from "@material-ui/core";
import "./style.scss";

const MessageItem = (): JSX.Element => {
	return (
		<div className="message-item">
			<Avatar />
			<div className="message-item__info">
				<h2>Room name</h2>
				<p>Last message</p>
			</div>
		</div>
	);
};

export default MessageItem;

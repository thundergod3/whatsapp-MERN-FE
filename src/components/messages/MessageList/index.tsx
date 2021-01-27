import React, { useEffect, useState } from "react";

import "./style.scss";

import MessageItem from "../MessageItem";

const MessageList = (): JSX.Element => {
	return (
		<div className="message-list">
			<MessageItem />
			<MessageItem />
			<MessageItem />
		</div>
	);
};

export default MessageList;

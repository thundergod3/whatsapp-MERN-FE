import React, { useState, useEffect } from "react";

import { Avatar, IconButton } from "@material-ui/core";
import "./style.scss";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoveVertIcon from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";

import messagesService from "../../../services/messagesService";
import { AxiosResponse } from "axios";
import Pusher from "pusher-js";

const MessageChatting = (): JSX.Element => {
	const [messages, setMessages] = useState<any>([]);
	const [input, setInput] = useState<string>("");

	const handleSendMessage = (e: any) => {
		e.preventDefault();
		messagesService.post("/messages/new", {
			message: input,
			name: "Cong 1",
			timestamp: "now",
			received: true,
		});
		setInput("");
	};

	useEffect(() => {
		messagesService.get("/messages").then((response: AxiosResponse<any>) => {
			setMessages(response.data.messageListChatting);
		});
	}, []);

	useEffect(() => {
		const pusher = new Pusher("b6d8fee16d9b680e6616", {
			cluster: "ap1",
		});

		const channel = pusher.subscribe("messages");
		channel.bind("inserted", (newMessage: any) => {
			setMessages([...messages, newMessage]);
		});

		return () => {
			channel.unbind_all();
			channel.unsubscribe();
		};
	}, [messages]);

	return (
		<div className="message-chatting">
			<div className="message-chatting__header">
				<Avatar />
				<div className="message-chatting__headerInfo">
					<h3>Room name</h3>
					<p>Last seen at...</p>
				</div>
				<div className="message-chatting__headerRight">
					<IconButton>
						<SearchOutlinedIcon />
					</IconButton>
					<IconButton>
						<AttachFileIcon />
					</IconButton>
					<IconButton>
						<MoveVertIcon />
					</IconButton>
				</div>
			</div>
			<div className="message-chatting__body">
				{messages.map(
					({ name, message, timestamp, received }: any): JSX.Element => (
						<p
							className={
								received
									? "message-chatting__receiver"
									: "message-chatting__message"
							}
						>
							<span className="message-chatting__name">{name}</span>
							{message}
							<span className="message-chatting__timestamp">{timestamp}</span>
						</p>
					)
				)}
			</div>
			<div className="message-chatting__footer">
				<InsertEmoticonIcon />
				<form>
					<input
						type="text"
						placeholder="Type a message"
						value={input}
						onChange={(e: any): void => setInput(e.target.value)}
					/>
					<button type="submit" onClick={handleSendMessage}>
						Send a message
					</button>
				</form>
				<MicIcon />
			</div>
		</div>
	);
};

export default MessageChatting;

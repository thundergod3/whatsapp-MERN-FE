import React from "react";

import { IconButton, Avatar } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

import "./style.scss";

import InputField from "../../utils/InputField";
import MessageList from "../../messages/MessageList";

const Sidebar = (): JSX.Element => {
	return (
		<div className="sidebar">
			<div className="sidebar__header">
				<Avatar />
				<div className="sidebar__headerRight">
					<IconButton>
						<DonutLargeIcon />
					</IconButton>
					<IconButton>
						<ChatIcon />
					</IconButton>
					<IconButton>
						<MoreVertIcon />
					</IconButton>
				</div>
			</div>
			<div className="sidebar__search">
				<div className="sidebar__searchContainer">
					<SearchOutlinedIcon />
					<InputField placeholder="Search or start new chat" />
				</div>
			</div>
			<div className="sidebar__chats">
				<MessageList />
			</div>
		</div>
	);
};

export default Sidebar;

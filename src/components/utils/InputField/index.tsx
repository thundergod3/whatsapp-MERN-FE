import React from "react";

import "./style.scss";

interface Props {
	placeholder: string;
}

const InputField = ({ placeholder }: Props): JSX.Element => {
	return (
		<input className="input-field" type="text" placeholder={placeholder} />
	);
};

export default InputField;

import React from "react";
import ReactDOM from "react-dom";

import Card from "./Card";
import Button from "./Button";
import classes from "./Iframe.module.css";

const Backdrop = (props) => {
	return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
	return (
		<Card className={classes.modal}>
			<header className={classes.header}>
				<h2>MatthewLi</h2>
			</header>
			<div className={classes.content}>
				<iframe
					title='showcase_frame_1'
					style={{ width: "100%", height: "95%" }}
					src={props.message}
				>
					Your browser does not support inline frames.
				</iframe>
				{/* <p>{props.message}</p> */}
			</div>
			<footer className={classes.actions}>
				<Button onClick={props.onConfirm}>Confirm</Button>
			</footer>
		</Card>
	);
};

const Iframe = (props) => {
	return (
		<React.Fragment>
			{ReactDOM.createPortal(
				<Backdrop onConfirm={props.onConfirm} />,
				document.getElementById("backdrop-root")
			)}
			{ReactDOM.createPortal(
				<ModalOverlay
					title={props.title}
					message={props.message}
					onConfirm={props.onConfirm}
				/>,
				document.getElementById("overlay-root")
			)}
		</React.Fragment>
	);
};

export default Iframe;

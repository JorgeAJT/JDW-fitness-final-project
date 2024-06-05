import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Card } from "../component/card";

import { Context } from "../store/appContext";

export const Client = () => {
	const { store, actions } = useContext(Context);
	const [ clientID, setClientID ] = useState(0) 
	const tokenCoach = localStorage.getItem("token_coach")
	const loggedCoach = JSON.parse(localStorage.getItem("loggedCoach"));
	const [dislike, setDislike] = useState("")
	const navigate = useNavigate();

	useEffect(() => {
        actions.getClients()
		actions.getLikes()
    },[]);

    // const handleLike= (clientLike) => {
	// 	let source = tokenCoach ? "coach" : "";
    //     const existingLike = store.likes.find((like) => like.source === source && like.client_id === clientLike && like.coach_id === loggedCoach.id);
    //     if(existingLike) {
    //         actions.deleteLike(existingLike.id);
    //     } 
    //     else {
    //         actions.addLikeAPI(source, clientLike, loggedCoach.id);
    //     }	
    // }

	// useEffect(() => {
	// 	if(existingLike) {
	// 		setDislike("Dislike")
	// 	} else {
	// 		setDislike("Like")
	// 	}
	// },[store.likes])


	// const handleLike = async (clientLike) => {
	// 	let source = tokenCoach ? "coach" : "";

	// 	const existingLike = store.likes.find(
	// 		(like) => like.source === source && like.client_id === clientLike && like.coach_id === loggedCoach.id
	// 	);

	// 	if (!existingLike) {
	// 		try {
	// 			await actions.addLikeAPI(source, clientLike, loggedCoach.id);
	// 			setDislike(true);
	// 		} catch (error) {
	// 			console.error("Error adding like:", error);
	// 		}
	// 	} else {
	// 		try {
	// 			await actions.deleteLike(existingLike.id);
	// 			setDislike(false);
	// 		} catch (error) {
	// 			console.error("Error deleting like:", error);
	// 		}
	// 	}
	// };

	// if(!tokenCoach) {
	// 	navigate("/coach/login")
	// }

	return (
		<div className="container">
			<div className="">
				<h1 className="text-center mt-3">Client List</h1>
				<Link to="/client/signup" className="ms-auto my-1">
					<button className="btn btn-warning fw-bold">Sign up</button>
				</Link>
				</div>	
			<div className="row d-flex justify-content-center">
				{store.clients.map((client, index) => 
					<div key={index} className="col-12 col-md-6 col-xl-3 my-xl-2">
						<Card 	
							username={client.username}
							userID={client.id}
						/>
					</div>
				)}
			</div>
		</div>
			// {/* <ul>
			// 	{store.clients.map((client, index) => 
			// 		<li key={index} className="list-group-item my-2 border-3">
			// 			<div className="d-flex flex-column justify-content-center">
			// 				<div className="d-flex">
			// 					<span className="fw-bold">Username: </span>
			// 					{client.username}
			// 				</div>
			// 				<div className="d-flex">
			// 					<Link to={`/client/${client.id}`} className="mb-1">
			// 						<button className="btn btn-info py-0 px-1 ms-auto">show more information</button>					
			// 					</Link>
			// 					<button className="btn btn-danger py-0 px-1 ms-auto mt-1" data-bs-toggle="modal" data-bs-target="#deleteModal" onClick={()=> setClientID(client.id)}>delete</button>
			// 				</div>
			// 				<div>
			// 				<button className="btn btn-warning py-0 px-1 ms-auto mt-1" onClick={()=> handleLike(client.id)}>{dislike}</button>
			// 				</div>
			// 			</div>
			// 		</li>
			// 	)}
			// </ul> */}
			// {/* <div className="modal" id="deleteModal" tabIndex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
			// 	<div className="modal-dialog">
			// 		<div className="modal-content">
			// 		<div className="modal-header">
			// 			<h1 className="modal-title fs-5" id="deteleModalLabel">Are you sure to delete this?</h1>
			// 			<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
			// 		</div>
			// 		<div className="modal-footer">
			// 			<button type="button" className="btn btn-dark" data-bs-dismiss="modal">Noooo!</button>
			// 			<button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={()=>actions.deleteClient(clientID)}>Yes, of course!</button>
			// 		</div>
			// 		</div>
			// 	</div> */}
			
		
	);
};
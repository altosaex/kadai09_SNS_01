import React, { useContext } from 'react';
import "./Share.css";
import { Analytics, Face, Gif, Image, PanTool } from '@mui/icons-material';
import { AuthContext } from "../../state/AuthContext";

export default function Share() {
	const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
	const {user} = useContext(AuthContext);
	return (
	<div className='share'>
		<div className="shareWrapper">
			<div className="shareTop">
				<img src={
						user.profilePicture 
						? PUBLIC_FOLDER + user.profilePicture 
						: PUBLIC_FOLDER + "/person/noAvatar.png"} alt="" className='shareProfileImg'/>
				<input type="text" className='shareInput' placeholder='今何してる？'/>
			</div>
			<hr className="shareHr" />

			<div className="shareButtons">
				<div className="shareOptions">
					<div className="shareOption">
					<Image className='shareIcon' htmlColor='blue' />
					<span className="shareOptionText">写真</span>
					</div>
					<div className="shareOption">
					<Gif className='shareIcon' htmlColor='hotpink'/>
					<span className="shareOptionText">GIF</span>
					</div>
					<div className="shareOption">
					<PanTool className='shareIcon' htmlColor='green'/>
					<span className="shareOptionText">質問</span>
					</div>
					<div className="shareOption">
					<Face className='shareIcon' htmlColor='yellow'/>
					<span className="shareOptionText">気持ち</span>
					</div>
					<div className="shareOption">
					<Analytics className='shareIcon' htmlColor='red'/>
					<span className="shareOptionText">投票</span>
					</div>
				</div>
				<button className="shareButton">投稿</button>
			</div>
		</div>
	</div>
	);
}

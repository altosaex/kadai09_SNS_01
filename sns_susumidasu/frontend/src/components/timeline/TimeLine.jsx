import React, { useEffect, useState } from 'react';
import "./TimeLine.css";
import Share from '../share/Share';
import Post from '../post/Post';
// import {Posts} from "../../dummyDate";
import axios from "axios";
import { useContext } from 'react';
import { AuthContext } from '../../state/AuthContext';

export default function TimeLine({ username }) {
	const [posts, setPosts] = useState([]);

	const {user} = useContext(AuthContext);

	useEffect(() => {
		const fetchPosts = async () => {
			const response = username 
			? await axios.get(`/posts/profile/${username}`) //プロフィールの場合
			: await axios.get(`/posts/timeline/${user._id}`); //ホームの場合
			// console.log(response);
			setPosts(response.data);
		};
		fetchPosts();
	}, [username, user._id]);

	return (
	<div className='timeline'>
		<div className="timelineWrapper">
			<Share />
			{posts.map((post) => (
				<Post post={post} key={post._id} />
			))}
		</div>
	</div>
	);
}

import React, { useEffect, useState } from 'react';
import "./TimeLine.css";
import Share from '../share/Share';
import Post from '../post/Post';
// import {Posts} from "../../dummyDate";
import axios from "axios";

export default function TimeLine({ username }) {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchPosts = async () => {
			const response = username 
			? await axios.get(`/posts/profile/${username}`) 
			: await axios.get("/posts/timeline/6592c5e00477106d5a9f2d45");
			// console.log(response);
			setPosts(response.data);
		};
		fetchPosts();
	}, [username]);

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

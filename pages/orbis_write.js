import React, { useState, useEffect } from 'react';
import { Button } from '@nextui-org/react';
/** Import Orbis SDK */
import { Orbis } from '@orbisclub/orbis-sdk';

let orbis = new Orbis();

const orbis_write = () => {
	const createPost = async () => {
		let res = await orbis.isConnected();
		if (!res) {
			await orbis.connect_v2({
				provider: window.ethereum,
				lit: true,
			});
		}
		/** To create a post in the 'gm' channel of the orbis group */
		let myFirstPost = await orbis.createPost({
			body: 'Drift is on the way 🚀🔥',
			context: 'my-first-post',
		});
		console.log('successfully posted: ', myFirstPost);
	};

	return (
		<div className="mx-4 my-10 flex justify-center items-center flex-col">
			<div className="text-4xl my-5 text-blue-500 text-center font-bold underline">
				Orbis - write (create post)
			</div>
			<div className="my-4">
				<Button shadow color="primary" auto onPress={createPost}>
					create post
				</Button>
			</div>
		</div>
	);
};

export default orbis_write;

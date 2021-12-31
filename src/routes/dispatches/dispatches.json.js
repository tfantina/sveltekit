import { process } from '$lib/markdown';
import fs from 'fs';
import dayjs from 'dayjs';

export function get({ params, query }) {
	let posts = fs
		.readdirSync(`src/posts`)
		.filter((fileName) => /.+\.md$/.test(fileName))
		.map((fileName) => {
			const { metadata, content } = process(`src/posts/${fileName}`);
			return {
				metadata,
				slug: fileName.slice(0, -3),
				content: content.slice(0, 800)
			};
		});

	if (query.get('length')) {
		posts = posts.slice(-query.get('length'));
	}
	// sort the posts by create date.
	posts.sort(
		(a, b) => dayjs(b.metadata.date, 'MMM D, YYYY') - dayjs(a.metadata.date, 'MMM D, YYYY')
	);

	let body = JSON.stringify(posts);

	return {
		body
	};
}

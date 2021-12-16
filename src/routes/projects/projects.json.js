import { process } from '$lib/markdown';
import fs from 'fs';
import dayjs from 'dayjs';

export function get({ params, query }) {
	let projects = fs
		.readdirSync(`src/projects`)
		.filter((fileName) => /.+\.md$/.test(fileName))
		.map((fileName) => {
			const { metadata } = process(`src/projects/${fileName}`);
			return {
				metadata,
				slug: fileName.slice(0, -3)
			};
		});

	if (query.get('length')) {
		projects = projects.slice(-query.get('length'));
	}
	// sort the projects by create date.
	projects.sort(
		(a, b) => dayjs(a.metadata.date, 'MMM D, YYYY') - dayjs(b.metadata.date, 'MMM D, YYYY')
	);
	let body = JSON.stringify(projects);

	return {
		body
	};
}

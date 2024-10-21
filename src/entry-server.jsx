import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';

export function render({ initialPostData }) {
	const html = renderToString(
		<StrictMode>
			<App initialPostData={initialPostData} />
		</StrictMode>
	);
	return { html };
}

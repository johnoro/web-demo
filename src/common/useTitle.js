import { useState, useEffect } from 'react';

const useTitle = title => {
	const [currentTitle, setTitle] = useState(title);

	useEffect(() => {
		document.title = currentTitle;
	}, [currentTitle]);

	return [currentTitle, setTitle];
};

export default useTitle;

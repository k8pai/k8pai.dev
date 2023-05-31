import React from 'react';

const Comments = ({ comment: { created_by, body } }: { comment: any }) => {
	return (
		<div className="px-3 py-2">
			<div className="font-semibold py-1 text-neutral-500">
				{created_by}
			</div>
			<div className="text-sm font-semibold text-neutral-300 ">
				{body}
			</div>
		</div>
	);
};

export default Comments;

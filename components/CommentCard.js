import React from 'react'

const CommentCard = ({element}) => {
  return (
	<div className='rounded-md p-2 w-full'>
		<div className='commentText text-2xl'>{element.body}</div>
		<div className='flex'>
			<div className='commentText text-base'>{element.created_by} / {element.created_at}</div>
		</div>
	</div>
  )
}

export default CommentCard
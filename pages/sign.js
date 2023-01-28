import { useSession, signIn, signOut } from "next-auth/react";
import { PrismaClient } from '@prisma/client';
import CommentCard from "../components/commentCard";
import { useState } from "react";

const prisma = new PrismaClient();

const checkLogin = async (session) => {

	if (session) {
		return (
		<>
			{console.log("signed in as "+session.user.name)}
		</>
		)
	}
	return (
		<>
			{console.log("sign in")}
			{signIn('github')}
		</>
	)
}

function sign({ fallbackData }) {
	const { data: session } = useSession()
	const [comments, setComments] = useState(fallbackData);
	return (
		<div className='flex-grow flex flex-col items-center'>
			<div className='sign rounded-md ring-2 ring-sectxt flex flex-col p-5 w-full max-w-2xl mx-auto space-y-4'>
				<div className='px-3 font-semibold text-2xl'>Leave your sign here...</div>
				<div>
					<form className='flex w-full space-x-3' onSubmit={(e) => {e.preventDefault(); checkLogin(session)}}>
						<input className='w-full py-2 px-3 tracking-widest bg-transparent rounded-md flex-grow' type={'text'} placeholder="Leave your comment here..." />
						<input className='px-3 py-2 tracking-wide bg-transparent ring-2 ring-sectxt rounded-md cursor-pointer' type={'submit'} value="Sign" />
					</form>
				</div>
			</div>
			<div>
				{comments?.map((el, ind) => (
					<div key={ind} className="flex flex-col">
						<div className='rounded-md p-2 w-full'>
							<div className='commentText text-2xl'>{el.body}</div>
							<div className='flex'>
								<div className='commentText text-base'>{el.created_by} / {el.created_at}</div>
							</div>
						</div>
					</div>	
				))}
			</div>
		</div>
	)
}

export default sign



export async function getServerSideProps() {
	const entries = await prisma.guestbook.findMany({
		orderBy: {
			updated_at: 'desc',
		}
	});

	const fallbackData = entries.map((entry) => ({
		id: entry.id.toString(),
		body: entry.body,
		created_by: entry.created_by.toString(),
		updated_at: entry.updated_at.toString()
	}));
	
	return {
		props: {
			fallbackData
		}
	};
}
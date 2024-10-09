import React, { Suspense } from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'
import Form from './Form'
import { SignIn } from './actions'
import { getServerSession } from 'next-auth'
import { getComments } from '../../lib/prisma/guestbook'
import { authOptions } from 'lib/auth'
import GuestEntry from 'components/guestbook/GuestEntry'

const getGuestbook = async () => {
    const { data, error: err } = await getComments()

    return data
}

export const dynamic = 'force-dynamic'

export default async function page() {
    let data
    let session

    try {
        const [guestbookRes, sessionRes] = await Promise.allSettled([
            getGuestbook(),
            getServerSession(authOptions),
        ])

        if (
            guestbookRes.status === 'fulfilled' &&
            guestbookRes.value &&
            guestbookRes.value[0]
        ) {
            data = guestbookRes.value
        } else {
            console.error(guestbookRes)
        }

        if (sessionRes.status === 'fulfilled') {
            session = sessionRes.value
        } else {
            console.error(sessionRes)
        }
    } catch (error) {
        console.error(error)
    }
    return (
        <>
            {session?.user ? <Form user={session?.user} /> : <SignIn />}

            <div className="mt-5">
                {data?.map((value, idx) => <GuestEntry key={idx} {...value} />)}
            </div>
        </>
    )
}

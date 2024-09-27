import React from 'react'
import { Skeleton } from 'components/ui/skeleton'

const Loading = ({ length = 5 }: { length?: number }) => {
    return (
        <div>
            {Array.from({ length }).map(() => (
                <div className="my-4">
                    <Skeleton className="w-full h-[28px] mb-3 rounded-md" />
                    <Skeleton className="w-[80px] h-[16px] rounded-md" />
                </div>
            ))}
        </div>
    )
}

export default Loading

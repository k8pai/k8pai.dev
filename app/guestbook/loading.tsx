import React from 'react'
import { Skeleton } from 'components/ui/skeleton'

const Loading = ({ length = 5 }: { length?: number }) => {
    return (
        <div>
            <div key={`loading`} className="my-4">
                <Skeleton className="w-[150px] h-[28px] mb-3 rounded-md" />
            </div>
            {Array.from({ length }).map((el, index) => (
                <div key={`loading-${index}`} className="my-4">
                    <Skeleton
                        className={`w-[140px] h-[22px] mb-3 rounded-md`}
                    />
                    <Skeleton className={`w-[360px] h-[16px] rounded-md`} />
                </div>
            ))}
        </div>
    )
}

export default Loading

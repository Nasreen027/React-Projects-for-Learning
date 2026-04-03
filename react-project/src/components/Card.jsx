import React from 'react'

function Card({img, title, subtitle, year}) {
    return (
        <>
            <div className="flex flex-col items-center p-4 rounded-2xl bg-cyan-900  h-92 w-70 gap-4">
                <div>
                    <img
                        className="size-58 shadow-xl"
                        alt=""
                        src={img}
                    />
                </div>
                <div className="flex flex-col items-center gap-1">
                    <span className="text-2xl font-medium">{title}</span>
                    <span className="font-medium text-sky-300">{subtitle}</span>
                    <span className="font-medium text-beige-400">{year}</span>
                </div>
            </div>
        </>
    )
}

export default Card
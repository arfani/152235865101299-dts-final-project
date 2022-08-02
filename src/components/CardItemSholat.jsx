import classNames from "classnames"
import { useState } from "react"

export default function CardItemSholat({ waktu, pukul, className }) {
    const [isHover, setIsHover] = useState(false)

    let waktuStyle = classNames('font-courgette', className, {
        // 'text-2xl': isHover
    })

    const wrapperStyle = classNames('p-2 m-2 bg-teal-200 rounded-sm transition-transform', className, {
        'scale-125': isHover
    })

    return (
        <div className={wrapperStyle}
            onMouseEnter={() => setIsHover(!isHover)}
            onMouseLeave={() => setIsHover(!isHover)}
        >
            <h2 className={waktuStyle}>{waktu}</h2>
            <div className="font-coustard text-5xl p-3">{pukul}</div>
        </div>
    )
}
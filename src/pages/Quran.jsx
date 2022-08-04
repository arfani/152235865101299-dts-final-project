import axios from "axios"
import { useEffect, useState } from "react"

export default function Quran() {
    const [quran, setQuran] = useState({})

    useEffect(() => {
        axios({
            url: "http://api.alquran.cloud/v1/quran/quran-uthmani"
        })
            .then(res => {
                setQuran(res)
            })

        console.log(quran)
    }, [])


    return (
        <>
        <h2 className="text-lg">List Surah</h2>
        <ul>
            
        </ul>
        </>
    )
}
import axios from "axios"
import { useEffect, useState } from "react"
import CardItemSholat from "../components/CardItemSholat"
import { auth, getCredential } from "../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { Link } from "react-router-dom"

export default function Main() {
    const locationId = '1810'
    const currentDate = new Date()
    const currentDateFormatted = currentDate.getFullYear() + '/' + (currentDate.getMonth() + 1) + '/' + currentDate.getDay()

    const [jadwalSholat, setJadwalSholat] = useState({})
    const [user] = useAuthState(auth)

    useEffect(() => {
        try {
            const jadwalSholatPerHari = axios('https://api.myquran.com/v1/sholat/jadwal/' + locationId + '/' + currentDateFormatted)
            jadwalSholatPerHari.then(({ data }) => {
                setJadwalSholat(data.data)
            })

        } catch (error) {
            console.log(error);
        }
    }, []
    )

    return (
        <main className="m-5">
            <div className="flex flex-col">
                <div className="bg-teal-500 p-2 w-full rounded-sm flex">
                    <div className="flex flex-col">
                        <div className="">
                            {jadwalSholat.daerah}
                        </div>
                        <div className="">
                            {jadwalSholat.lokasi}
                        </div>
                        <div className="items-end font-courgette text-xs mt-2 text-blue-50">{jadwalSholat.jadwal?.tanggal}</div>
                    </div>
                    <div className="ml-auto mr-7">
                        <img src="/img/vector-quran.png" alt="quran" width={'200px'} />
                    </div>
                </div>
                <div className="mt-2 flex w-full justify-around flex-wrap">
                    <CardItemSholat pukul={jadwalSholat.jadwal?.subuh} waktu='Subuh' />
                    <CardItemSholat pukul={jadwalSholat.jadwal?.terbit} waktu='Terbit' isHover={false} onMouseClick={() => console.log('clicked')} />
                    <CardItemSholat pukul={jadwalSholat.jadwal?.dzuhur} waktu='Dzuhur' />
                    <CardItemSholat pukul={jadwalSholat.jadwal?.ashar} waktu='Ashar' />
                    <CardItemSholat pukul={jadwalSholat.jadwal?.maghrib} waktu='Maghrib' />
                    <CardItemSholat pukul={jadwalSholat.jadwal?.isya} waktu='Isya' />
                </div>
                <div className="mt-6">
                    <p>Hii <b>{user?.displayName.split(" ")[0]}</b>, sambil tunggu waktu sholat yuk <Link to="about" className="bg-teal-800 rounded-tr-full rounded-br-full py-1 pl-2 pr-3 text-yellow-200 font-semibold ml-1 transition-transform inline-block hover:translate-x-1">Baca Al Qur'an</Link></p>
                </div>
            </div>
        </main>
    )
}
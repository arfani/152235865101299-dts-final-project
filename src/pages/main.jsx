import axios from "axios"
import { useEffect, useState } from "react"
import CardItemSholat from "../components/CardItemSholat"

export default function Main() {
    const locationId = '1810'
    const currentDate = new Date()
    const currentDateFormatted = currentDate.getFullYear() + '/' + (currentDate.getMonth() + 1) + '/' + currentDate.getDay()

    const [jadwalSholat, setJadwalSholat] = useState({})

    useEffect(() => {
        try {
            const jadwalSholatPerHari = axios('https://api.myquran.com/v1/sholat/jadwal/' + locationId + '/' + currentDateFormatted)
            jadwalSholatPerHari.then(({ data }) => {
                setJadwalSholat(data.data)
                console.log(data.data)
            })

        } catch (error) {
            console.log(error);
        }
    }, []
    )

    return (
        <main className="m-5">
            <div className="flex flex-col">
                <div className="bg-teal-500 p-2 w-full rounded-sm">
                    <div className="">
                        {jadwalSholat.daerah}
                    </div>
                    <div className="">
                        {jadwalSholat.lokasi}
                    </div>
                    <div className="font-courgette text-xs mt-2 text-blue-50">{jadwalSholat.jadwal?.tanggal}</div>
                </div>
                <div className="mt-4 flex text-center">
                    <CardItemSholat pukul={jadwalSholat.jadwal?.subuh} waktu='Subuh' />
                    <CardItemSholat pukul={jadwalSholat.jadwal?.terbit} waktu='Terbit' />
                    <CardItemSholat pukul={jadwalSholat.jadwal?.dzuhur} waktu='Dzuhur' />
                    <CardItemSholat pukul={jadwalSholat.jadwal?.ashar} waktu='Ashar' />
                    <CardItemSholat pukul={jadwalSholat.jadwal?.maghrib} waktu='Maghrib' />
                    <CardItemSholat pukul={jadwalSholat.jadwal?.isya} waktu='Isya' />
                </div>
            </div>
        </main>
    )
}
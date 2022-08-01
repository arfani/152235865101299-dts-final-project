export default function CardItemSholat({waktu, pukul}) {
    return (
        <div className="p-2 bg-teal-200 rounded-sm">
            <h2 className="font-courgette">{waktu}</h2>
            <div className="font-coustard text-6xl p-3">{pukul}</div>
        </div>
    )
}
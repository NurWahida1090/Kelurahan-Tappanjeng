"use client";

import { useEffect, useState } from "react";

export default function Footer() {
    const [kontak,setKontak]=useState<any>(null);
    useEffect(()=>{

        fetch("/api/kontak")
        .then(res=>res.json())
        .then(res=>{

            if (res.success) {
                setKontak(res.data);
            }
        })
        .catch((err) => console.error(err));
    },[])

    return(
        <footer className="bg-green-900 text-white py-16">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-8 px-6">
                <div>

                    <h1 className="font-bold text-lg mb-3">
                        SIPATTA
                    </h1>

                    <p>
                         KKN-T Desa Wisata 116 <br />Universitas Hasanuddin
                    </p>
                </div>
                <div>

                    <h3 className="font-semibold mb-4">
                        Menu
                    </h3>

                    <ul className="space-y-2">
                        <li>Home</li>
                        <li>Profil</li>
                        <li>UMKM</li>
                        <li>Berita</li>
                    </ul>
                </div>
                <div>

                    <h3 className="font-semibold mb-4">
                        Layanan
                    </h3>

                    <ul className="space-y-2">
                        <li>Persuratan</li>
                        <li>Aduan</li>
                    </ul>
                </div>
                <div>

                    <h3 className="font-semibold mb-4">
                        Kontak
                    </h3>

                    <p className="mb-2">
                        {kontak?.alamat}
                    </p>

                    <p className="mb-2">
                        Telp: {kontak?.telepon}
                    </p>

                    <p className="mb-2">
                        WA: {kontak?.whatsapp}
                    </p>

                    <p className="mb-2">
                        {kontak?.email}
                    </p>

                    <p className="mb-2">
                        {kontak?.jam_pelayanan}
                    </p>

                    <a
                        href={kontak?.google_maps}
                        target="_blank"
                        className="block text-green-300 hover:underline"
                    >
                        Google Maps
                    </a>

                    <a
                        href={kontak?.instagram}
                        target="_blank"
                        className="block text-green-300 hover:underline"
                    >
                        Instagram
                    </a>

                    <a
                        href={kontak?.facebook}
                        target="_blank"
                        className="block text-green-300 hover:underline"
                    >
                        Facebook
                    </a>

                </div>
            </div>
        </footer>
    )
}
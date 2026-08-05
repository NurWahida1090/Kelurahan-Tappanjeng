import Link from "next/link";

export default function CTASection() {

    return (

        <section className="bg-green-700 py-20 text-white">

            <div className="max-w-7xl mx-auto px-6 text-center">

                <h2 className="text-5xl font-bold">

                    Punya Keluhan atau Pertanyaan?

                </h2>

                <p className="mt-6 text-lg">

                    Ajukan pengaduan, pertanyaan, atau permohonan secara online melalui website.

                </p>

                <Link

                    href="/pengajuan"

                    className="inline-block mt-8 bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold"

                >

                    Ajukan Sekarang

                </Link>

            </div>

        </section>

    );

}
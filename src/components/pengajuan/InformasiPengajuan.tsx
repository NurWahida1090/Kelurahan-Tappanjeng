export default function InformasiPengajuan() {
  return (
    <div className="bg-white rounded-2xl shadow p-8 h-fit">

      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Informasi
      </h2>

      <div className="space-y-5">

        <div className="flex gap-3">
          <span className="text-green-600 text-xl">✓</span>
          <p className="text-gray-600">
            Pengajuan akan diproses oleh admin Kelurahan.
          </p>
        </div>

        <div className="flex gap-3">
          <span className="text-green-600 text-xl">✓</span>
          <p className="text-gray-600">
            Pastikan nomor HP yang diisi masih aktif.
          </p>
        </div>

        <div className="flex gap-3">
          <span className="text-green-600 text-xl">✓</span>
          <p className="text-gray-600">
            Isi pengajuan secara jelas dan lengkap.
          </p>
        </div>

      </div>

    </div>
  );
}
interface Props {
  open: boolean;
  onClose: () => void;
}

export default function SuccessModal({
  open,
  onClose,
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-2xl p-8 w-full max-w-md text-center">

        <div className="text-6xl mb-5">
          ✅
        </div>

        <h2 className="text-2xl font-bold text-gray-800">
          Pengajuan Berhasil
        </h2>

        <p className="mt-4 text-gray-600">
          Terima kasih. Pengajuan Anda telah berhasil
          dikirim dan akan diproses oleh admin Kelurahan.
        </p>

        <button
          onClick={onClose}
          className="mt-8 w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-xl"
        >
          Tutup
        </button>

      </div>

    </div>
  );
}
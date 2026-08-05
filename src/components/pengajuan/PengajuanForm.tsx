"use client";

import { useState } from "react";
import SuccessModal from "./SuccessModal";

export default function PengajuanForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    nama: "",
    no_hp: "",
    kategori: "",
    isi_pengajuan: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    const res = await fetch("/api/pengajuan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        action: "tambah_pengajuan",
        ...form,
      }),
    });

    const result = await res.json();

    setLoading(false);

    if (result.success) {
      setSuccess(true);

      setForm({
        nama: "",
        no_hp: "",
        kategori: "",
        isi_pengajuan: "",
      });
    } else {
      alert(result.message);
    }
  };

  return (
    <>
      <form
        onSubmit={submit}
        className="bg-white rounded-2xl shadow p-8 space-y-6"
      >
        <div>
          <label className="font-medium text-gray-600">
            Nama
          </label>

          <input
            type="text"
            name="nama"
            required
            value={form.nama}
            onChange={handleChange}
            className="mt-2 w-full border rounded-xl p-3 text-gray-800"
          />
        </div>

        <div>
          <label className="font-medium text-gray-600">
            Nomor HP
          </label>

          <input
            type="text"
            name="no_hp"
            required
            value={form.no_hp}
            onChange={handleChange}
            className="mt-2 w-full border rounded-xl p-3 text-gray-700"
          />
        </div>

        <div>
          <label className="font-medium text-gray-600">
            Kategori
          </label>

          <select
            name="kategori"
            required
            value={form.kategori}
            onChange={handleChange}
            className="mt-2 w-full border rounded-xl p-3 text-gray-700"
          >
            <option value="">
              Pilih Kategori
            </option>

            <option>Keluhan</option>
            <option>Saran</option>
            <option>Pertanyaan</option>
            <option>Permohonan</option>
            <option>Lainnya</option>
          </select>
        </div>

        <div>
          <label className="font-medium text-gray-600">
            Isi Pengajuan
          </label>

          <textarea
            name="isi_pengajuan"
            required
            rows={6}
            value={form.isi_pengajuan}
            onChange={handleChange}
            className="mt-2 w-full border rounded-xl p-3 text-gray-700 resize-none"
          />
        </div>

        <button
          disabled={loading}
          className="w-full bg-green-700 hover:bg-green-800 text-white py-4 rounded-xl font-semibold"
        >
          {loading ? "Mengirim..." : "Kirim Pengajuan"}
        </button>
      </form>

      <SuccessModal
        open={success}
        onClose={() => setSuccess(false)}
      />
    </>
  );
}
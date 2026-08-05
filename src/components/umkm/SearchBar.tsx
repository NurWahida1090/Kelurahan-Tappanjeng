"use client";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: Props) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">

      <input
        type="text"
        placeholder="Cari nama UMKM, pemilik, atau kategori..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-white text-gray-700 placeholder:text-gray-500 border border-gray-600 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-green-600"
      />

    </div>
  );
}
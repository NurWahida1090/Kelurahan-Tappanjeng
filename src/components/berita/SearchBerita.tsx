interface Props {
  value: string;
  sort: "terbaru" | "terlama";
  onChange: (value: string) => void;
  onSortChange: (value: "terbaru" | "terlama") => void;
}

export default function SearchBerita({
  value,
  sort,
  onChange,
  onSortChange,
}: Props) {
  return (
    <div className="mx-auto mb-10 max-w-7xl px-6 py-8">
      <div className="flex flex-col gap-4 md:flex-row">

        {/* Search */}

        <div className="flex-1">
          <input
            type="text"
            placeholder="Cari berita..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full rounded-xl border border-gray-300 bg-white px-5 py-4 text-gray-700 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-600"
          />
        </div>

        {/* Filter */}

        <select
          value={sort}
          onChange={(e) =>
            onSortChange(e.target.value as "terbaru" | "terlama")
          }
          className="rounded-xl border border-gray-300 bg-white px-5 py-4 text-gray-700 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-600 md:w-48"
        >
          <option value="terbaru">Terbaru</option>
          <option value="terlama">Terlama</option>
        </select>

      </div>
    </div>
  );
}
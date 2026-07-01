export default function SpecTable({ specs }) {
  return (
    <div className="overflow-hidden rounded-xl border border-gold/10 bg-navy-light">
      <table className="w-full text-left text-[0.95rem]">
        <tbody>
          {specs.map((row) => (
            <tr key={row.label} className="border-b border-white/[0.06] last:border-b-0">
              <th className="w-[40%] px-6 py-4 font-medium text-slate-400">{row.label}</th>
              <td className="px-6 py-4 text-white">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

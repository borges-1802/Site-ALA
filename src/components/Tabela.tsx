interface TabelaProps {
  headers: string[];
  rows: (string | React.ReactNode)[][];
}

export default function Tabela({ headers, rows }: TabelaProps) {
  return (
    <div className="overflow-x-auto flex justify-center">
      <table className=" border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-6 py-3 text-left text-sm text-gray-700"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        {/* CORPO */}
        <tbody className="divide-y">
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-50">
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-6 py-4 font text-gray-600"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}

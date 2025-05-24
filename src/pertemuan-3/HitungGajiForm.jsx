import { useState } from "react";
import InputGaji from "./components/inputGaji";
import ErorMessage from "./components/ErorMessage";
export default function HitungGajiForm() {
  const [gaji, setGaji] = useState("");
  const pajak = 0.60;
  const totalGaji = gaji - gaji * pajak;

  return (
    <div className="flex flex-col items-center justify-center m-5 p-5 bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-4 text-gray-700">
          Hitung Gaji Bersih
        </h2>
        <label className="block text-gray-700 font-medium">Gaji pokok </label>

        <InputGaji
          label="gaji"
          type="number"
          placeholder="masukan gaji anda"
          value={gaji}
          onChange={(e) => setGaji(e.target.value)}
        />

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">
            Pajak: <b class="text-red-500">60%</b>
          </label>
        </div>

        {(!gaji  || gaji <= 0)? (
          <ErorMessage message="silahkan masukan gaji yang valid (Tidak boleh kosong atau minus)"/>
        ) : (
            
          <div className="mt-4 p-3 bg-blue-100 border-1-4 border-blue-500 text-blue-700">
            <p className="font-semibold">
              Total Take Home Pay (THP): Rp {totalGaji.toLocaleString()}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

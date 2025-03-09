import { Metadata } from "next";
import { FaCalculator, FaCar } from "react-icons/fa6";
import { GiExitDoor } from "react-icons/gi";
import { LuCircleParking } from "react-icons/lu";
import { MdAttachMoney } from "react-icons/md";

export const metadata: Metadata = {
  title: "Quantum Parking - Dashboard",
};

export default function Home() {
  return (
    <div className="w-full h-full grid grid-cols-2 gap-5">
      <section className="bg-white p-5 rounded-lg col-span-2">
        <h2 className="text-xl font-semibold text-gray-500 mb-3">Totals</h2>

        <div className="grid grid-cols-4 gap-2">
          <div className="p-5 shadow-md flex items-center">
            <MdAttachMoney className="text-green-500 text-5xl" />
            <div>
              <h2 className="text-xl font-semibold text-green-500">
                Shift Total
              </h2>
              <p className="text-gray-500 font-semibold">100 EGP</p>
            </div>
          </div>

          <div className="p-5 shadow-md flex items-center gap-4">
            <FaCar className="text-accent text-5xl" />
            <div>
              <h2 className="text-xl font-semibold text-accent">
                Total Cars Entry
              </h2>
              <p className="text-gray-500 font-semibold">50</p>
            </div>
          </div>

          <div className="p-5 shadow-md flex items-center gap-4">
            <GiExitDoor className="text-red-500 text-5xl" />
            <div>
              <h2 className="text-xl font-semibold text-red-500">
                Total Cars Exit
              </h2>
              <p className="text-gray-500 font-semibold">45</p>
            </div>
          </div>

          <div className="p-5 shadow-md flex items-center gap-4">
            <LuCircleParking className="text-yellow-600 text-5xl" />
            <div>
              <h2 className="text-xl font-semibold text-yellow-600">
                Inside Parking
              </h2>
              <p className="text-gray-500 font-semibold">5</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white p-5 rounded-lg col-span-1">
        <h2 className="text-xl font-semibold text-gray-500 mb-3">
          Ticket Payment
        </h2>

        <div className="flex gap-5">
          <input
            type="text"
            placeholder="Enter ticket number"
            className="w-full text-sm py-2 px-2 pr-8 rounded-md focus:outline-none focus:ring-1 font-normal border-gray-200 border-2"
          />

          <button className="flex items-center gap-2 bg-green-500 hover:bg-green-700 transition duration-300 px-5 rounded-lg text-white font-semibold">
            <FaCalculator />
            Calculate
          </button>
        </div>
      </section>

      <section className="bg-white p-5 rounded-lg overflow-auto col-span-1 row-span-2">
        <div className="flex justify-between items-center gap-3 mb-3">
          <h2 className="text-xl font-semibold text-gray-500 shrink-0">
            Inside The Parking
          </h2>

          <input
            type="text"
            placeholder="Search by ticket number"
            className="w-full text-sm py-2 px-2 pr-8 rounded-md focus:outline-none focus:ring-1 font-normal border-gray-200 border-2"
          />
        </div>

        <div className="space-y-2 overflow-auto">
          <div className="bg-white shadow-md p-3 flex items-center justify-between">
            <h4 className="text-gray-500">Ticket : #12345</h4>
            <p className="text-green-500">27.02.2025 05:20PM</p>
          </div>
          <div className="bg-white shadow-md p-3 flex items-center justify-between">
            <h4 className="text-gray-500">Ticket : #12345</h4>
            <p className="text-green-500">27.02.2025 05:20PM</p>
          </div>
          <div className="bg-white shadow-md p-3 flex items-center justify-between">
            <h4 className="text-gray-500">Ticket : #12345</h4>
            <p className="text-green-500">27.02.2025 05:20PM</p>
          </div>
          <div className="bg-white shadow-md p-3 flex items-center justify-between">
            <h4 className="text-gray-500">Ticket : #12345</h4>
            <p className="text-green-500">27.02.2025 05:20PM</p>
          </div>
          <div className="bg-white shadow-md p-3 flex items-center justify-between">
            <h4 className="text-gray-500">Ticket : #12345</h4>
            <p className="text-green-500">27.02.2025 05:20PM</p>
          </div>
          <div className="bg-white shadow-md p-3 flex items-center justify-between">
            <h4 className="text-gray-500">Ticket : #12345</h4>
            <p className="text-green-500">27.02.2025 05:20PM</p>
          </div>
          <div className="bg-white shadow-md p-3 flex items-center justify-between">
            <h4 className="text-gray-500">Ticket : #12345</h4>
            <p className="text-green-500">27.02.2025 05:20PM</p>
          </div>
          <div className="bg-white shadow-md p-3 flex items-center justify-between">
            <h4 className="text-gray-500">Ticket : #12345</h4>
            <p className="text-green-500">27.02.2025 05:20PM</p>
          </div>
          <div className="bg-white shadow-md p-3 flex items-center justify-between">
            <h4 className="text-gray-500">Ticket : #12345</h4>
            <p className="text-green-500">27.02.2025 05:20PM</p>
          </div>
          <div className="bg-white shadow-md p-3 flex items-center justify-between">
            <h4 className="text-gray-500">Ticket : #12345</h4>
            <p className="text-green-500">27.02.2025 05:20PM</p>
          </div>
        </div>
      </section>

      <section className="bg-white p-5 rounded-lg overflow-auto">
        <div className="flex justify-between items-center gap-3 mb-3">
          <h2 className="text-xl font-semibold text-gray-500 shrink-0">
            Shift Transactions
          </h2>

          <input
            type="text"
            placeholder="Search by ticket number"
            className="w-full text-sm py-2 px-2 pr-8 rounded-md focus:outline-none focus:ring-1 font-normal border-gray-200 border-2"
          />
        </div>

        <div className="space-y-2">
          <div className="bg-white shadow-md p-3 flex items-center justify-between">
            <h4 className="text-gray-500">Ticket : #12345</h4>
            <p className="text-green-500">10 EGP</p>
          </div>
          <div className="bg-white shadow-md p-3 flex items-center justify-between">
            <h4 className="text-gray-500">Ticket : #12345</h4>
            <p className="text-green-500">10 EGP</p>
          </div>
          <div className="bg-white shadow-md p-3 flex items-center justify-between">
            <h4 className="text-gray-500">Ticket : #12345</h4>
            <p className="text-green-500">10 EGP</p>
          </div>
          <div className="bg-white shadow-md p-3 flex items-center justify-between">
            <h4 className="text-gray-500">Ticket : #12345</h4>
            <p className="text-green-500">10 EGP</p>
          </div>
          <div className="bg-white shadow-md p-3 flex items-center justify-between">
            <h4 className="text-gray-500">Ticket : #12345</h4>
            <p className="text-green-500">10 EGP</p>
          </div>
          <div className="bg-white shadow-md p-3 flex items-center justify-between">
            <h4 className="text-gray-500">Ticket : #12345</h4>
            <p className="text-green-500">10 EGP</p>
          </div>
        </div>
      </section>
    </div>
  );
}

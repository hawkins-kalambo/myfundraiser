"use client";
import { FaMobileAlt, FaUniversity } from "react-icons/fa";
import { SiAirtel, SiTmobile } from "react-icons/si";

export default function DonateSection() {
  return (
    <section id="donate" className="bg-white shadow-md rounded-2xl p-8 mb-16">
      <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
        Donate & Support My Education
      </h2>
      <p className="text-gray-700 mb-6">
        You can support my tuition fees directly using the payment details
        below. Any contribution is greatly appreciated 🙏
      </p>

      {/* Airtel Money */}
      <div className="mb-6 p-4 border rounded-lg shadow-sm">
        <h3 className="flex items-center gap-2 text-lg font-semibold text-red-600 mb-2">
          <SiAirtel className="text-2xl" /> Airtel Money
        </h3>
        <p className="text-gray-700">
          Agent Code: <strong>1119300</strong>
        </p>
        <p className="text-gray-700">
          Number: <strong>0982 734 797</strong>
        </p>
        <p className="text-gray-700">Name: <strong>Hawkins Kalambo</strong></p>
      </div>

      {/* TNM Mpamba */}
      <div className="mb-6 p-4 border rounded-lg shadow-sm">
        <h3 className="flex items-center gap-2 text-lg font-semibold text-green-600 mb-2">
          <SiTmobile className="text-2xl" /> TNM Mpamba
        </h3>
        <p className="text-gray-700">
          Agent Code: <strong>123873</strong>
        </p>
        <p className="text-gray-700">
          Number: <strong>0897 833 027</strong>
        </p>
        <p className="text-gray-700">Name: <strong>Hawkins Kalambo</strong></p>
      </div>

      {/* National Bank */}
      <div className="mb-6 p-4 border rounded-lg shadow-sm">
        <h3 className="flex items-center gap-2 text-lg font-semibold text-blue-600 mb-2">
          <FaUniversity className="text-2xl" /> National Bank of Malawi
        </h3>
        <p className="text-gray-700">
          Account Number: <strong>1010752015</strong>
        </p>
        <p className="text-gray-700">Account Name: <strong>Hawkins Kalambo</strong></p>
        <p className="text-gray-700">Branch: <strong>Mzuzu</strong></p>
      </div>

      <p className="text-gray-600 italic">
        After making a donation, kindly send me a confirmation on WhatsApp so I
        can acknowledge your support 💚
      </p>
    </section>
  );
}

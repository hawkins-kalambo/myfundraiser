"use client";
import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { FaUniversity, FaWhatsapp } from "react-icons/fa";

export default function Home() {
  const [showPdf, setShowPdf] = useState(false);

  return (
    <div>
      <Navbar />
      <main className="pt-20 max-w-4xl mx-auto px-6">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold text-indigo-600 mb-4">
            Welcome to My Fundraising Journey
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            I’m raising funds to pursue my Bachelor of Science (Honors) in
            Renewable Energy Systems Engineering at Mzuzu University.
          </p>
          <a
            href="#donate"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition"
          >
            Donate Now
          </a>
        </section>

        {/* Story Section */}
        <section id="about" className="bg-white shadow-md rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
            My Story
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            My name is <strong>Hawkins Kalambo</strong>. I have been selected to
            study a <strong>Bachelor of Science (Honors) in Renewable Energy
            Systems Engineering</strong> at Mzuzu University. My classes begin
            on <strong>29th September</strong>.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The tuition fee is <strong>MK 2,006,371 per year</strong>, and I am
            required to pay at least <strong>MK 1,000,000</strong> to register.
            I cannot raise this full amount on my own, so I am seeking support
            to make my education possible.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            My journey started back in 2015 when I passed my MSCE with 15
            points. Since then, I have been applying to different institutions
            but was not considered. This is my chance to finally achieve my
            dream of contributing to renewable energy innovation in Malawi.
          </p>
          <a
            href="#donate"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition"
          >
            Support My Education
          </a>
        </section>

        {/* Admission Letter Section */}
        <section
          id="admission"
          className="bg-gray-50 shadow-md rounded-2xl p-8 mb-16"
        >
          <h2 className="text-2xl font-semibold text-emerald-700 mb-4">
            Admission Letter
          </h2>
          <p className="text-gray-700 mb-4">
            Below is a copy of my official admission letter from Mzuzu
            University for verification.
          </p>

          {!showPdf ? (
            <button
              onClick={() => setShowPdf(true)}
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition"
            >
              📄 View Admission Letter
            </button>
          ) : (
            <div className="relative">
              {/* Small Close X Button */}
              <button
                onClick={() => setShowPdf(false)}
                className="absolute top-2 right-2 bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center shadow hover:bg-red-700 transition"
                aria-label="Close Admission Letter"
              >
                ✕
              </button>

              <div className="w-full h-[600px] border rounded-lg overflow-hidden shadow">
                <iframe
                  src="/admission-letter.pdf"
                  className="w-full h-full rounded-lg"
                  title="Admission Letter"
                />
              </div>
            </div>
          )}

          <a
            href="/admission-letter.pdf"
            target="_blank"
            className="mt-4 inline-block text-indigo-600 hover:underline"
          >
            📥 Download Admission Letter (PDF)
          </a>
        </section>

        {/* Donate Section */}
        <section
          id="donate"
          className="bg-white shadow-md rounded-2xl p-8 mb-16"
        >
          <h2 className="text-2xl font-semibold text-indigo-600 mb-6">
            Donate & Support
          </h2>
          <p className="text-gray-700 mb-6">
            All donations should be made to: <strong>Joshua Kalambo</strong>
          </p>

          <div className="space-y-4">
            {/* Airtel Money */}
            <div className="flex items-center gap-3 p-4 border rounded-lg shadow-sm">
              <Image src="/icons/airtel.png" alt="Airtel" width={40} height={40} />
              <div>
                <p className="font-semibold text-gray-800">Airtel Money</p>
                <p className="text-gray-600">Agent Code: <strong>1119300</strong></p>
                <p className="text-gray-600">Number: <strong>0982 734 797</strong></p>
              </div>
            </div>

            {/* TNM Mpamba */}
            <div className="flex items-center gap-3 p-4 border rounded-lg shadow-sm">
              <Image src="/icons/tnm.png" alt="TNM" width={40} height={40} />
              <div>
                <p className="font-semibold text-gray-800">TNM Mpamba</p>
                <p className="text-gray-600">Agent Code: <strong>123873</strong></p>
                <p className="text-gray-600">Number: <strong>0897 833 027</strong></p>
              </div>
            </div>

            {/* National Bank */}
            <div className="flex items-center gap-3 p-4 border rounded-lg shadow-sm">
              <Image src="/icons/nbm.png" alt="National Bank" width={40} height={40} />
              <div>
                <p className="font-semibold text-gray-800">National Bank</p>
                <p className="text-gray-600">Account Number: <strong>1010752015</strong></p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="bg-white shadow-md rounded-2xl p-8 mb-16"
        >
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
            Contact Me
          </h2>
          <p className="text-gray-700 mb-2">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:hgkalambo@gmail.com"
              className="text-emerald-600 hover:underline"
            >
              hgkalambo@gmail.com
            </a>
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Phone:</strong> 0989 127 308 / 0886 470 843
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Parents Contact:</strong> 0999 335 581
          </p>
        </section>
      </main>

      {/* Floating WhatsApp Icon Button */}
      <a
        href="https://wa.me/265989127308"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition flex items-center justify-center"
      >
        <FaWhatsapp className="text-3xl" />
      </a>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="bg-indigo-50 text-center pt-32 pb-20 px-6">
      <h1 className="text-4xl font-bold text-indigo-700">Support My Education Journey</h1>
      <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
        My name is <strong>Hawkins Kalambo</strong>, admitted to study 
        <em> BSc (Honors) Renewable Energy Systems Engineering </em> at Mzuzu University.  
        I need to raise <span className="font-semibold">MK 1,000,000</span> before 
        <strong> 29th September 2025</strong> to register.
      </p>
      <a href="#donate">
        <button className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-xl shadow-lg hover:bg-indigo-700 transition">
          Donate Now
        </button>
      </a>
    </section>
  );
}

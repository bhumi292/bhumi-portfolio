function Contact() {
  return (
    <section
      id="contact"
      className="bg-zinc-900 text-white py-24 px-6"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          Get In Touch
        </h2>

        <p className="text-gray-400 mb-12">
          Feel free to reach out for opportunities or collaboration.
        </p>

        <div className="grid md:grid-cols-3 gap-6 ">
          <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:border-pink-500 transition">
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-gray-400">
              bhumi@example.com
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:border-pink-500 transition">
            <h3 className="font-semibold mb-2">LinkedIn</h3>
            <p className="text-gray-400">
              linkedin.com/in/bhumi
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:border-pink-500 transition">
            <h3 className="font-semibold mb-2">GitHub</h3>
            <p className="text-gray-400">
              github.com/bhumi
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
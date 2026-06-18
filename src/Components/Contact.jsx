function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-10">
        Contact Me
      </h2>

      <form className="max-w-xl mx-auto space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full border p-3 rounded"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded"
        />

        <textarea
          rows="5"
          placeholder="Message"
          className="w-full border p-3 rounded"
        ></textarea>

        <button className="bg-blue-600 text-white px-6 py-3 rounded">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
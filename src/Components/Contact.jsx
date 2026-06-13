function Contact() {
  return (
    <section
      id="contact"
      className="bg-gray-100 py-20 px-8"
    >
      <h2 className="text-4xl font-bold text-center">
        Contact Me
      </h2>

      <form className="max-w-xl mx-auto mt-10">

        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border rounded mb-4"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border rounded mb-4"
        />

        <textarea
          rows="5"
          placeholder="Message"
          className="w-full p-3 border rounded"
        ></textarea>

        <button
          className="mt-5 bg-blue-600 text-white px-6 py-3 rounded"
        >
          Send Message
        </button>

      </form>
    </section>
  );
}

export default Contact;

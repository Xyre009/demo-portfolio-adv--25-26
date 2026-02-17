import Navbar from "../component/navbar";

export default function Contact_me() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="px-6 md:px-20 lg:px-40 py-12">
        <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
        <p className="text-lg mb-8">
          Interested in working together or have a question? Feel free to reach
          out using the form below.
        </p>

        <form className="max-w-xl flex flex-col gap-4">
          <div>
            <label htmlFor="name" className="block font-semibold mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
            />
          </div>
          <div>
            <label htmlFor="message" className="block font-semibold mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Your message..."
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
            />
          </div>
          <button
            type="submit"
            className="bg-green-400 text-yellow-950 font-semibold py-3 px-6 rounded-lg hover:bg-green-500 transition-colors w-fit"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}

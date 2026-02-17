
import Image from "next/image";
import Navbar from "./component/navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero / About Me */}
      <section className="px-6 md:px-20 lg:px-40 py-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <Image
              src="/OIP.png"
              alt="Erick Fernandez"
              width={200}
              height={200}
              className="rounded-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <p className="text-lg leading-relaxed">
              Hello! My name is Erick Fernandez. I am a student at Tech High,
              motivated to learn computer science. I have more than 2 years of
              experience with multiple CS languages.
            </p>
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section className="px-6 md:px-20 lg:px-40 py-12 bg-green-50 dark:bg-green-950">
        <h2 className="text-3xl font-bold mb-6">What I Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow">
            <h3 className="text-xl font-semibold mb-2">Find Business Problems</h3>
            <p>Identify real-world challenges that can be solved through technology and thoughtful design.</p>
          </div>
          <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow">
            <h3 className="text-xl font-semibold mb-2">Design Web Solutions</h3>
            <p>Create user-friendly designs and interfaces that address user needs effectively.</p>
          </div>
          <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow">
            <h3 className="text-xl font-semibold mb-2">Develop Web Applications</h3>
            <p>Build functional web applications using modern frameworks and best practices.</p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="px-6 md:px-20 lg:px-40 py-12">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-lg border border-green-400 text-center">
            <p className="font-semibold">Figma Design</p>
          </div>
          <div className="p-4 rounded-lg border border-green-400 text-center">
            <p className="font-semibold">SQL</p>
          </div>
          <div className="p-4 rounded-lg border border-green-400 text-center">
            <p className="font-semibold">Communication</p>
          </div>
          <div className="p-4 rounded-lg border border-green-400 text-center">
            <p className="font-semibold">Web Development</p>
          </div>
        </div>
      </section>
    </div>
  );
}

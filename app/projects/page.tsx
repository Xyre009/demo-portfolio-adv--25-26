import Navbar from "../component/navbar";
import Project_card from "../component/Project_card";

export default function Projects() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="px-6 md:px-20 lg:px-40 py-12">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <p className="text-lg mb-8">
          A collection of projects I have worked on. Each one showcases
          different skills and technologies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Project_card
            title="Portfolio Website"
            date="2025"
            info="A personal portfolio built with Next.js and Tailwind CSS to showcase my work and skills."
            src="/globe.svg"
            alt="Portfolio website project"
          />
          <Project_card
            title="Web Application"
            date="2025"
            info="A web application developed to solve real business problems using modern web technologies."
            src="/window.svg"
            alt="Web application project"
          />
          <Project_card
            title="Database Project"
            date="2025"
            info="A database-driven project demonstrating SQL proficiency and data management skills."
            src="/file.svg"
            alt="Database project"
          />
        </div>
      </section>
    </div>
  );
}

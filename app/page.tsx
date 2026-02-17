import Button from "./component/Button";
import Button_danger from "./component/Button_danger";
import Project_card from "./component/Project_card";
import Image from "next/image";
import Navbar from "./component/navbar";
export default function About() {
  return (
    <div className="bg-white text-yellow-800 px-6">
      {/* Navbar */}
      <div>
        <Navbar />
      </div>

      {/* Main Heading */}
     <div className="flex items-center justify-center h-20 ">
  <h1 className="text-2xl sm:text-3xl lg:text-xl font-bold text-center">
    About Me
  </h1>
</div>


      {/* About Section */}
      <p className="mt-4 max-w-2xl mx-auto text-center">
        Hello! My name is `Erick Fernandez. I am a student at Tech High motivated to learn CS. 
        I have more than 2 years of experience with multiple programming languages.
      </p>

      {/* What I Do */}
      <h1 className="text-3xl font-semibold mt-10 text-center">What I Do</h1>
      <ul className="list-disc mt-4 max-w-xl mx-auto">
        <li>Find business problems</li>
        <li>Design solutions for the web</li>
        <li>Develop web applications</li>
      </ul>

      {/* Skills */}
      <h1 className="text-3xl font-semibold mt-10 text-center">Skills</h1>
      <ul className="list-disc mt-4 max-w-xl mx-auto">
        <li>Basic understanding of Figma web design</li>
        <li>Proficiency with SQL</li>
        <li>Strong conversational communication skills</li>
        <li>Comprehensive understanding of web development</li>
      </ul>

      {/* Button */}
      <div className="text-center mt-6">
        <button className="button">Click Here</button>
      </div>

      {/* Stylesheet Section */}
      <div className="mt-12 text-center">
        <p>This is my stylesheet</p>

        <Image 
          src="/OIP.png" 
          alt="My Image" 
          width={400} 
          height={900} 
          className="mx-auto mt-4"
        />

        <h1 className="heading1 mt-6">This is my Heading 1</h1>
        <h2 className="mt-2">This is my heading 2</h2>

        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <Button text="Click Me!" />
          <Button text="Hover Me!" />
          <Button text="Hold Me!" />
          <Button text="Drag Me!" />
          <Button_danger text="Delete Me!" />
        </div>
      </div>

      {/* Project Card */}
      <div className="mt-10 flex justify-center">
        <Project_card 
          title="Project" 
          date="" 
          info="" 
          src="path/to/image.jpg" 
          alt="Description of the image" 
        />
      </div>
    </div>
  );
}

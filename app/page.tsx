
import Button from "./component/Button";
import Button_danger from "./component/Button_danger";
import Project_card from "./component/Project_card";
import Image from "next/image";
import Navbar from "./component/navbar";
export default function Home() {
  return (
    <div className=" bg- text-yellow-800">
  <div>    <Navbar/>
  </div>
    <h1> About Me</h1>
    <p> Hello! my name is Erick Fernandez, I am a student at Tech High motivated to learn cs. I have more then +2 years in experience with multiple cs languages.</p>
   <h1>What I do</h1>
   <ul>
    <li>
    Find business problems
    </li>
    <li>design solutions for the web</li>
    <li>develop web aplications</li>
   </ul>
   
   <h1> Skills</h1>
   <ul>
    <li>basic understanding with making a Figma web design</li>
   <li>proficiency with SQL</li>
   <li>conversational communication skills</li>
   <li>comprehensive understamding with web dev</li>

   </ul>
   <button className="button">click here</button>
   
   
   <div>
   
    <p> This is my stylesheet</p>
    <Image src="/OIP.png" alt="My Image" width={400} height={900} />
    <h1 className="heading1">This is my Heading 1</h1>
    <h2>This is my heading 2</h2>
   <Button text={"Click Me!"} />
   <Button text={"hover  Me!"} />
   <Button text={"hold Me!"} />
   <Button text={"drag Me!"} />
   <Button_danger text={"delete Me!"} />
   </div>
<Project_card title={"project"} date={""} info={""} src={"path/to/image.jpg"} alt={"Description of the image"}/>
    
     </div>

  );
}

 
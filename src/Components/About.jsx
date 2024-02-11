/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description = 
"Driven to unlock creative solutions for the full-stack. My passion lies in crafting innovative software that doesn't just work, it wows. I thrive on finding unconventional approaches, as seen in projects like [Hygieora] (reduced [redundant code] by [20%]) and [LHydra] (achieved a 15% increase in traffic). Always up for a challenge, I'm constantly seeking new ways to apply my skills and dive into emerging technologies. Let's collaborate and build something exceptional together!";
/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Web design and Development (HTML, CSS, JavaScript, React, Next js,Flask, Blazor etc.)",
  "User Interface and experience (Figma) ",
  "Data Analysis (Excel, Python, SQL)",
  "Database management and Administration (SQL, MongoDB, Firebase, SQL Server, etc.)",
  "Machine Leaning (Python, TensorFlow, PyTorch, etc.)",
  "Prompt engineering",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
"Nothing is impossible, the word itself says 'I'm possible!' - Audrey Hepburn. This quote embodies my approach to software development. I believe in the power of ingenuity and a never-give-up attitude to turn seemingly impossible ideas into reality.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;

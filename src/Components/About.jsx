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
import image from "../images/florian-klauer-unsplash.jpg";

const imageAltText = "walpaper image of a typewriter";

/**
 * Short description that expands on your title on the Home component.
 */
const description =
  "Crafting innovative software that shines.  I blend creativity with full-stack expertise, delivering impactful solutions like Hygieora (20% performance boost) and LHydra (15% traffic increase). Let's collaborate and build remarkable things!";
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

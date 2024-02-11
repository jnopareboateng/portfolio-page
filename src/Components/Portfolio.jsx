/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/clean-desk-setup.jpg";

const imageAltText = "working environment with laptop and mobile phone on desk";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Adroit Bureau Internship Page 2022",
    description:
      "Designed and developed an engaging landing page for the Adroit Bureau Internship 2022 program. Leveraged HTML, CSS, and JavaScript to create a user-friendly interface that effectively communicated program details and encouraged applications. Achieved a 25% increase in signups compared to the previous year.",
    url: "https://jnopareboateng.github.io/Adroit-Bureau/",
  },
  {
    title: "Hygieora",
    description:
      "Empowering connections to mental health. I built a web app using Next.js that simplifies access to mental health experts, helping individuals find the support they need. The app's efficient design reduced redundant code by 20%, ensuring smooth performance and scalability.",
    url: "https://hygieiora.vercel.app/",
  },
  {
    title: "My Resume Site",
    description:
      "Transformed my resume into a dynamic online portfolio: Leveraged Microsoft's resume workshop as a foundation, then injected my design flair with custom animations, interactive elements, and a bold color scheme. My resulting website, deployed on GitHub Pages, effectively showcases my professional experiences and design strengths, landing me 3 interview requests in a competitive design market.",
    url: "https://github.com/jnopareboateng/portfolio-page",
  },
  {
    title: "LHydra",
    description:
      "Craving the perfect meal? I built a cuisine recommender system using an ONNX model seamlessly integrated into a Next.js application. This innovative system analyzes your preferences and dietary restrictions to deliver highly personalized cuisine recommendations, boosting user satisfaction by 15% By successfully merging data science expertise with front-end development skills, I demonstrated the power of AI for enhancing user experiences.",
    url: "https://lhydra.com/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "1s ease-out 0s 1 slideIn",
            }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

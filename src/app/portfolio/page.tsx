"use client";
import React, { useState } from "react";
import Image from "next/image";
// Sample project data
const projects = [
  {
    id: 1,
    title: "Lumin Project for Lighthouse",
    category: "css",
    image: "https://demosites.royal-elementor-addons.com/developer-portfolio-v1/wp-content/uploads/sites/107/2024/01/Project-4.jpg",
    link: "https://demosites.royal-elementor-addons.com/developer-portfolio-v1/2024/01/22/lumin-project-for-lighthouse/",
  },
  {
    id: 2,
    title: "Creative Magic App for Branding",
    category: "html",
    image: "https://demosites.royal-elementor-addons.com/developer-portfolio-v1/wp-content/uploads/sites/107/2024/01/Project-9.jpg",
    link: "https://demosites.royal-elementor-addons.com/developer-portfolio-v1/2024/01/22/creative-magic-app-for-branding/",
  },
  {
    id: 3,
    title: "Back-end Popups and Graphic Design",
    category: "css",
    image: "https://demosites.royal-elementor-addons.com/developer-portfolio-v1/wp-content/uploads/sites/107/2024/01/Project-6.jpg",
    link: "https://demosites.royal-elementor-addons.com/developer-portfolio-v1/2024/01/22/back-end-popups-and-graphic-design/",
  },
  {
    id: 4,
    title: "The All-In-One Financial Platform",
    category: "html",
    image: "https://demosites.royal-elementor-addons.com/developer-portfolio-v1/wp-content/uploads/sites/107/2024/01/Project-8.jpg",
    link: "https://demosites.royal-elementor-addons.com/developer-portfolio-v1/2024/01/22/the-all-in-one-financial-platform/",
  },
];



export default function Portfolio(){
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filtered projects based on the selected category
  const filteredProjects = selectedCategory === "all"
    ? projects
    : projects.filter((project) => project.category === selectedCategory);

    return(
        <div className="grid items-center justify-items-center pb-20 gap-18 ">

            {/* hero section */}

            <main
        className="min-h-screen md:min-h-80 grid  gap-8  w-full items-center justify-content justify-items-center"
        style={{
          background: "url('/img/index/main.jpg') no-repeat center",
          backgroundSize: "cover",
        }}
      >

        <div
          className="container text-center"
         
        >
          <h2 className="md:text-4l text-9xl ">
        My portfolio 
          </h2>
        </div>
      </main>

{/* project list */}
<div className="container py-10">
      {/* Filter Buttons */}

      <div className="filter-buttons flex justify-center gap-5 pb-8">
        <button onClick={() => setSelectedCategory("all")} className="py-1 px-8 text-black bg-[#C5FF41]">All</button>
        <button onClick={() => setSelectedCategory("css")} className="py-1 px-8 text-black bg-[#C5FF41]">CSS</button>
        <button onClick={() => setSelectedCategory("html")} className="py-1 px-8 text-black bg-[#C5FF41]">HTML</button>
      </div>

      {/* Project Grid */}
      <section className="project-grid grid grid-cols-1 sm:grid-cols-2 gap-9">
        {filteredProjects.map((project) => (
          <article key={project.id} className="">
            <div className="image-wrap ">
              <a href={project.link} target="_blank" rel="noopener noreferrer">

<Image 
  src={project.image} 
  alt={project.title} 
  className="rounded-t-md rounded-r-md" 
  width={500} // Replace with your desired width
  height={300} // Replace with your desired height
  layout="responsive" // Optional, for responsive images
/>;

              </a>
            </div>
            <h2>{project.title}</h2>
          </article>
        ))}
      </section>

    </div>

<section>
  <div>

  </div>
</section>


            </div>

    )
}
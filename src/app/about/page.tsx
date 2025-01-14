"use client";
// import React, { useState } from "react";
// import Image from "next/image";
// Sample project data
// const projects = [
//   {
//     id: 1,
//     title: "Lumin Project for Lighthouse",
//     category: "css",
//     image: "https://demosites.royal-elementor-addons.com/developer-portfolio-v1/wp-content/uploads/sites/107/2024/01/Project-4.jpg",
//     link: "https://demosites.royal-elementor-addons.com/developer-portfolio-v1/2024/01/22/lumin-project-for-lighthouse/",
//   },
//   {
//     id: 2,
//     title: "Creative Magic App for Branding",
//     category: "html",
//     image: "https://demosites.royal-elementor-addons.com/developer-portfolio-v1/wp-content/uploads/sites/107/2024/01/Project-9.jpg",
//     link: "https://demosites.royal-elementor-addons.com/developer-portfolio-v1/2024/01/22/creative-magic-app-for-branding/",
//   },
//   {
//     id: 3,
//     title: "Back-end Popups and Graphic Design",
//     category: "css",
//     image: "https://demosites.royal-elementor-addons.com/developer-portfolio-v1/wp-content/uploads/sites/107/2024/01/Project-6.jpg",
//     link: "https://demosites.royal-elementor-addons.com/developer-portfolio-v1/2024/01/22/back-end-popups-and-graphic-design/",
//   },
//   {
//     id: 4,
//     title: "The All-In-One Financial Platform",
//     category: "html",
//     image: "https://demosites.royal-elementor-addons.com/developer-portfolio-v1/wp-content/uploads/sites/107/2024/01/Project-8.jpg",
//     link: "https://demosites.royal-elementor-addons.com/developer-portfolio-v1/2024/01/22/the-all-in-one-financial-platform/",
//   },
// ];



export default function Portfolio(){
  // const [selectedCategory, setSelectedCategory] = useState("all");

  // Filtered projects based on the selected category
  // const filteredProjects = selectedCategory === "all"
  //   ? projects
  //   : projects.filter((project) => project.category === selectedCategory);

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
    {"<About>"}
          </h2>
        </div>
      </main>

{/*My story */}
<div className="container py-10">

   <div className="">
        <h2 className="text-5xl sm:text-7xl">{"< Biography >"}</h2>

        <p className="text-xl">
        Greatly hearted has who believe. Drift allow green son walls years for blush. Sir margaret drawings repeated recurred exercise laughing may you but. Do repeated  passed. Absolute one hastened mrs any sensible. Death there mirth way the noisy merit. Piqued shy spring nor six though mutual living ask extent. Replying of dashwood advanced ladyship smallest disposal or. Attempt offices own improve now see. Called person are around county talked her esteem. Those fully these way nay thing seems.
        </p>
    
   </div>

    </div>
{/*Work Experience*/}
<div className="container py-10">

   <div className="py-8">
        <h2 className="text-5xl sm:text-7xl">{"< Over 12 Years of Experience >"}</h2>
        <button className="py-1 px-8 text-black bg-[#C5FF41] w-auto">
          Hire Me
        </button>
    
   </div>

    </div>

{/*Dedication*/}
<div className="container py-10">

   <div className="py-8">
        <h2 className="text-5xl sm:text-7xl">{"< What Drives My Work >"}</h2>
        <p className="text-xl">
        Greatly hearted has who believe. Drift allow green son walls years for blush. Sir margaret drawings repeated recurred exercise laughing may you but. Do repeated  passed. Absolute one hastened mrs any sensible.
        </p>

        <div className="points">

          <ul className="points-container">

            <li className="point">
            Crafting Digital Excellence with Heart

            </li>
            <li className="point">A Web Developer Dedication to Seamless Online Experiences
</li>
            <li className="point">A Web Developer Dedication to Transformative Digital Solutions
</li>
            <li className="point">The Heartbeat of a Web Developer Commitment to Excellence
</li>
            <li className="point">The Driving Force Behind a Web Developer Work
           </li>
            <li className="point"> The Motivations Fueling a Web Developer Tireless Pursuit
           </li>
          </ul>

        </div>
    
   </div>

    </div>

{/*Main Details*/}
<div className="container py-10">

   <div className="py-8">
        <h2 className="text-5xl sm:text-7xl  ">{"< What is Coding >"}</h2>
        {/* <p className="text-xl">
        Greatly hearted has who believe. Drift allow green son walls years for blush. Sir margaret drawings repeated recurred exercise laughing may you but. Do repeated  passed. Absolute one hastened mrs any sensible.
        </p> */}

        <div className="flex mt-4">

<div className="items">
  <img src="" alt="" />
  <span className="text-3xl">
  CodeCraft
  </span>
  <p className="text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.

</p>
</div>

<div className="items">
  <img src="" alt="" />
  <span className="text-3xl">
  CodeCraft
  </span>
  <p className="text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.

</p>
</div>

<div className="items">
  <img src="" alt="" />
  <span className="text-3xl">
  CodeCraft
  </span>
  <p className="text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.

</p>
</div>

<div className="items">
  <img src="" alt="" />
  <span className="text-3xl">
  CodeCraft
  </span>
  <p className="text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.

</p>
</div>

 

        </div>
    
   </div>

    </div>

<section>
  <div>

  </div>
</section>


            </div>

    )
}
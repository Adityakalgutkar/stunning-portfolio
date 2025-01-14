/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
export default function Home() {
  const services = [
    {
      id: 1,
      title: "Next.js",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      imgSrc: "/arrow.png", // Adjust path as per your 'public' folder structure
    },
    {
      id: 2,
      title: "Angular",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      imgSrc: "/arrow.png",
    },
    {
      id: 3,
      title: "Wordpress",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      imgSrc: "/arrow.png",
    },
    {
      id: 4,
      title: "Scss",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      imgSrc: "/arrow.png",
    },
    {
      id: 5,
      title: "Shopify",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      imgSrc: "/arrow.png",
    },
    {
      id: 6,
      title: "Javascript",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      imgSrc: "/arrow.png",
    },
    {
      id: 7,
      title: "Typescript",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      imgSrc: "/arrow.png",
    },
    {
      id: 8,
      title: "Python",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      imgSrc: "/arrow.png",
    },
    {
      id: 9,
      title: "git",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      imgSrc: "/arrow.png",
    },
    {
      id: 10,
      title: "dsa",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      imgSrc: "/arrow.png",
    },
  ];

  const testimonials = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque impedit tenetur dolores consectetur nam.",
      clientName: "Wade",
      clientRole: "CEO",
      clientImage: "/path/to/image1.jpg",
    },
    {
      id: 2,
      text: "Vel quam eius. Odit molestiae eius, impedit obcaecati rerum labore libero nesciunt in voluptates minus.",
      clientName: "Sophia",
      clientRole: "Manager",
      clientImage: "/path/to/image2.jpg",
    },
  ];

 
//   const words=[

// "Frontend developer",
// "Wordpress developer",
// "Software developer",
// "Shopify deeveloper"
//   ]



  return (
    <div className="grid items-center justify-items-center pb-20 gap-18 ">
     
      <main
        className="min-h-screen grid gap-8 w-full items-center justify-content justify-items-center"
        style={{
          // background: "url('/img/index/cover.jpg') no-repeat center",
          backgroundSize: "cover",
        }}
      >
        <div className="container grid gap-4 md:gap-5 max-w-6xl mx-auto p-8 justify-center">
          <div className="text-center">
            <h2 className="text-xl md:text-2xl text-gray-200">
              {"// Hi, I'm Aditya Kalgutkar..."}
            </h2>
            <h3 className="text-4xl md:text-7xl font-bold text-white">
              <span className="dynamic-text text-[#C5FF41]">
                {"<_Front-end Developer For "}
                <br />
              </span>
              <span className="rotating-text">{"Web...>"}</span>
            </h3>
            <h2 className="text-xl md:text-xl text-gray-400 mt-2 md:mt-4 ">
            Your Partner in Developing Tomorrow's Tech.
            </h2>
          </div>
          <div className="action-btn__container flex gap-2 md:gap-5 justify-center">
          <button className="py-2 px-8 text-black bg-[white]">
            {" "}
            Read more
          </button>

          <button className="py-2 px-8 text-black bg-[#C5FF41]">
            {" "}
           Download Resume
          </button>

          </div>
        </div>
      </main>
      {/* Hero Section */}
      <section className="hero"></section>

      {/* Experience Section */}
      <section className="experience p-10">
        <div className="container grid grid-cols-[1fr_1fr] gap-4">
          <div className="sm:p-6">
            <h2>Years of Experience</h2>
            <p>
              Greatly hearted has who believe. Drift allow green son walls years
              for blush. Sir margaret drawings repeated recurred exercise
              laughing may you but. Greatly hearted has who believe. Drift allow
              green son walls years for blush. Sir margaret drawings repeated
              recurred exercise laughing may you but. Greatly hearted has who
              believe. Drift allow green son walls years for blush. Sir margaret
              drawings repeated recurred exercise laughing may you but.
            </p>
          </div>
          <div className="sm:p-6">
            <h2>Years of Experience</h2>
            <p>
              Greatly hearted has who believe. Drift allow green son walls years
              for blush. Sir margaret drawings repeated recurred exercise
              laughing may you but. Greatly hearted has who believe. Drift allow
              green son walls years for blush. Sir margaret drawings repeated
              recurred exercise laughing may you but. Greatly hearted has who
              believe. Drift allow green son walls years for blush. Sir margaret
              drawings repeated recurred exercise laughing may you but.
            </p>
          </div>
          {/* <a href="/resume" className="btn">
            Explore More
          </a> */}
        </div>
      </section>

      {/* Numbers */}

      <section className="container py-10">
        <div className=" text-center flex justify-center ">
          <div className="p-4 capitalize ">
            <h2 className="text-[#C5FF41] text-4xl md:text-8xl">10+</h2>
            <p className="text-md md:text-2xl">Years of experience</p>
          </div>
          <div className="p-4">
            <h2 className="text-[#C5FF41] text-4xl md:text-8xl">9k+</h2>
            <p className="text-md md:text-2xl">Project Complete</p>
          </div>
          <div className="p-4">
            <h2 className="text-[#C5FF41] text-4xl md:text-8xl">99.99%</h2>
            <p className="text-md md:text-2xl">Client Satisfaction</p>
          </div>
          <div className="p-4">
            <h2 className="text-[#C5FF41] text-4xl md:text-8xl">2</h2>
            <p className="text-md md:text-2xl">Award winner</p>
          </div>
        </div>

        <div className="text-center">
          <button className="py-1 px-8 text-black bg-[#C5FF41]">
            {" "}
            Read more
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="about py-10">
        {/* <div className="container">

          <div>
          <blockquote>
            <p>
              Hi there! I’m a bike messenger by day, aspiring actor by night,
              and this is my website. I live in Los Angeles, have a great dog
              named Jack, and I like piña coladas. (And gettin’ caught in the
              rain.)
            </p>
          </blockquote>

          </div>
          <blockquote>
            <p>
              The XYZ Doohickey Company was founded in 1971 and has been
              providing quality doohickeys to the public ever since. Located in
              Gotham City, XYZ employs over 2,000 people and does all kinds of
              awesome things for the Gotham community.
            </p>
          </blockquote>
          <p>
            As a new WordPress user, you should go to{" "}
            <a href="/dashboard">your dashboard</a> to delete this page and
            create new pages for your content. Have fun!
          </p>
        </div> */}
      </section>

      {/* Services */}

      <section>
        <div className="container mx-auto py-10 px-4 grid grid-cols-3 md:grid-cols-8  justify-center items-center gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex items-center bg-[#313131] shadow-lg py-3 px-2  rounded-lg hover:shadow-xl transition duration-300 gap-4 text-center text-white justify-center cursor-pointer"
            >
              {/* <Image
                src={service.imgSrc}
                alt=""
                width={30}
                height={30}
                className="rounded-full"
              /> */}
              <div>
                <h3 className="text-lg text-center font-regular capitalize  ">
                  {service.title}
                </h3>
                {/* <p className="font-regular">{service.description}</p> */}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Explore */}

      <section className="py-10">
        <div
          className="container grid sm:grid-cols-[1fr_1fr] p-5 py-15 rounded-xl"
          style={{
            background:
              "url('http://wordpressportfolio.kesug.com/wp-content/uploads/2024/11/banner.jpg') no-repeat center",
          }}
        >
          <div className="text-center sm:text-right py-5 flex flex-col gap-4 col-start-2">
            <h2 className=" text-4xl md:text-6xl">
              Let's Explore Popular skills & experience
            </h2>

            <p className="text-xl sm:ps-10 sm:ml-7">
              Greatly hearted has who believe. Drift allow green son walls years
              for blush. Sir
            </p>
            <div>
              <button className="py-1 px-8 text-black bg-[#C5FF41] w-auto">
                Explore More
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      <section className="testimonials py-10">
        <div className="container grid grid-cols-1 sm:grid-cols-[1.2fr_3fr] gap-7">
          <div className="flex flex-col gap-4">
            <h2 className="text-[#C5FF41] text-xl md:text-2xl">
             { "// Clients Testimonials"}
            </h2>
            <h3 className="text-white text-4xl md:text-8xl">
              Feedbacks & Reviews
            </h3>
            <p className="text-white text-xl md:text-2xl">
              Greatly hearted has who believe. Drift allow green son walls years
              for blush. Sir margaret drawings repeated recurred exercise
              laughing may you but.Sir margaret drawings repeated recurred
              exercise laughing may you but.
            </p>
          </div>
          <div className="testimonial-carousel flex">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="testimonial grid grid-rows-[1fr_0.35fr]  p-2 mx-9 gap-5 text-center "
              >
                <div className="p-6 px-4 mx-2 flex flex-col gap-6 border-2 rounded-xl border-[#C5FF41] bg-[#313131] ">
                  <span className="star text-[#C5FF41]">⭐⭐⭐⭐</span>{" "}
                  {/* Replace with an actual star icon if needed */}
                  <p>{testimonial.text}</p>
                </div>

                <div className="client flex flex-col items-center">
                  <Image width={50} height={50}
                    src={testimonial.clientImage}
                    alt={`${testimonial.clientName}'s avatar`}
                  />
                  <p className="text-white rounded">{testimonial.clientName}</p>
                  <p className="text-[#C5FF41]">{testimonial.clientRole}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* hire me */}

      <section>
        <div className="container py-10 ">
          <div className="grid grid-cols-1 md:grid-cols-2  ">
            <div className="flex flex-col justify-between pr-20">
              <div>
                <h2 className="text-[#C5FF41] text-xl md:text-2xl">
                  {"// Hire Me"}
                </h2>
              </div>
              <div className="text-white text-4xl md:text-xl">
                <h2>
                  Greatly hearted has who believe. Drift allow green son walls
                  years for blush. Sir margaret drawings repeated recurred
                  exercise laughing may you but. Do repeated whatever to
                  welcome.
                </h2>
              </div>
              <div className="flex items-start gap-5">
                <svg
                  className="fill-[#c5ff41]"
                  width={30}
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                </svg>
                <div>
                  <h3 className="text-[#c5ff41] text-xl md:text-3xl">
                    +1-(360) 416-7563
                  </h3>
                  <p className="text-white text-md md:text-2xl">Phone Number</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <svg
                  className="fill-[#c5ff41]"
                  width={30}
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                </svg>
                <div>
                  <h3 className="text-[#c5ff41] text-xl md:text-3xl">
                    FelicitymcDowell@mail.com
                  </h3>
                  <p className="text-white text-md md:text-2xl">
                    Email Address
                  </p>
                </div>
              </div>
            </div>
            <div>
              <form className="mx-auto pl-8">
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="shadow-sm bg-[#26282c] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full bg-[#26282c] p-2.5 py-1 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    required
                    placeholder="name"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  bg-[#26282c] p-2.5  py-1 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    required
                    placeholder="email"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="repeat-password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Repeat password
                  </label>
                  <textarea
                    id="repeat-password"
                    rows={7}
                    className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  bg-[#26282c] p-2.5  py-1 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    required
                    placeholder="message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="text-black bg-[#cdff41] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-2xl px-5 py-1 text-center dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full leading-none"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import React from "react";

const Bio = () => {
  return (
    <section className="bio-container">
      <div className="paragraph-container">
        {/* Intro 'Who?' */}
        <h2
          data-aos="fade-right"
          data-aos-once="false"
          data-aos-duration="1000"
          className="bio-heading"
        >
          Who?
        </h2>
        <p
          data-aos="fade-up"
          data-aos-once="false"
          data-aos-delay="200"
          data-aos-duration="1000"
          className="bio-paragraphs"
        >
          Creative full-stack web developer specialising in{" "}
          <span className="bio-emphasized-text-p-1">frontend</span> development
          - <span className="bio-emphasized-text-p-1"> design</span> focused
          with a background in{" "}
          <span className="bio-emphasized-text-p-1">fine arts</span>, looking
          for an exciting{" "}
          <span className="bio-emphasized-text-p-1"> job opportunity </span> and
          to keep learning.
        </p>

        {/*  'Where?' */}
        <h2
          data-aos="fade-left"
          data-aos-once="false"
          data-aos-duration="1000"
          className="bio-heading"
        >
          Where?
        </h2>

        <p
          data-aos="fade-up"
          data-aos-once="false"
          data-aos-delay="400"
          data-aos-duration="1000"
          className="bio-paragraphs"
        >
          Australian born,{" "}
          <span className="bio-emphasized-text-p-1">Berlin</span> based -
          currently finishing up an intensive one year web development course in{" "}
          <span className="bio-emphasized-text-p-1">MERN </span>
          stack at the Digital Career Institute.
          {/* after completing a 1 year intensive training 
          program at Digital Career Institute in Berlin. */}
        </p>

        {/*  'What?' */}
        <h2
          data-aos="fade-right"
          data-aos-once="false"
          data-aos-duration="1000"
          className="bio-heading"
        >
          What?
        </h2>
        <p
          data-aos="fade-up"
          data-aos-once="false"
          data-aos-delay="200"
          data-aos-duration="1000"
          className="bio-paragraphs"
        >
          <span className="bio-emphasized-text-p-1"> In depth </span> knowledge
          of <span className="bio-emphasized-text-p-1">frontend</span>,
          particularly React development, digital literacy and
          <span className="bio-emphasized-text-p-1"> UI/UX</span>, creating
          <span className="bio-emphasized-text-p-1">
            {" "}
            dynamic,
            <span className="bio-emphasized-text-p-1"> sophisticated</span>
          </span>{" "}
          and <span className="bio-emphasized-text-p-1">scalable</span> websites
          and <span className="bio-emphasized-text-p-1">apps.</span>
        </p>
        <p
          data-aos="fade-up"
          data-aos-once="false"
          data-aos-delay="400"
          data-aos-duration="1000"
          className="bio-paragraphs"
        >
          Well-versed in{" "}
          <span className="bio-emphasized-text-p-1">programming </span> basics
          and <span className="bio-emphasized-text-p-1"> backend </span>{" "}
          development - servers, databases and deployment.
        </p>
      </div>
    </section>
  );
};

export default Bio;

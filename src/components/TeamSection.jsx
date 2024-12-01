import React from "react";
import team1 from "../assets/img3.jpeg"; // Replace with actual paths
import team2 from "../assets/img3.jpeg";
import team3 from "../assets/img3.jpeg";
import team4 from "../assets/img3.jpeg";
import team5 from "../assets/img3.jpeg";
import team6 from "../assets/img3.jpeg";
import team7 from "../assets/img2.jpeg";

// Team data
const teamMembers = [
  { id: 1, name: "Laureen Smith", image: team1, linkedin: "#" },
  { id: 2, name: "Hanna I. Keaton", image: team2, linkedin: "#" },
  { id: 3, name: "Henrick Beeman", image: team3, linkedin: "#" },
  { id: 4, name: "Oliver Hawthorne", image: team4, linkedin: "#" },
  { id: 5, name: "Cola Puncanno", image: team5, linkedin: "#" },
  { id: 6, name: "Mason Archer", image: team6, linkedin: "#" },
];

const TeamSection = () => {
  return (
    <section id="teams" className="bg-neutral-50 py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4 mb-14">
          <div className="w-full lg:w-1/2 p-4">
            <h1 className="text-6xl sm:text-9xl xl:text-11xl font-semibold mb-16 font-heading">
              Team
            </h1>
            <p className="text-neutral-600 text-2xl font-semibold tracking-tight max-w-md">
              Meet our dedicated team of experts driving innovation and
              achieving outstanding results.
            </p>
          </div>
          <div className="text-5xl max-w-3xl mx-5 sm:mx-0 mt-16">
            Our dedicated team of experts collaborates passionately to drive
            innovation and achieve outstanding results.
          </div>
        </div>

        <div className="max-w-5xl mx-auto p-10 bg-white ">
          <p className="text-5xl font-oswald pb-5 ">Our Mentor</p>
          <img src={team7} className="rounded-2xl" alt="" />
          <p className="ml-10 text-4xl pt-10 ">Name</p>
          <button className="bg-blue-600 text-3xl  my-5 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-200 ml-10">
            {" "}
            LinkedIn
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="rounded object-cover mb-4"
              />
              <h4 className="text-xl font-semibold text-neutral-900 mb-2">
                {member.name}
              </h4>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-200"
              >
                LinkedIn
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

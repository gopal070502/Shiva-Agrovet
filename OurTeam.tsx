import React from "react";

const teamMembers = [
  { name: "Narasimha Reddy G", role: "CEO & Director", image: "/images/alice.jpg", description: "Alice leads our team with vision and expertise." },
  { name: "Vani G", role: "Director - SHIVA AGROVET PVT LTD", image: "/images/bob.jpg", description: "Bob drives technological innovation in our company." },
  { name: "Sandeep Reddy E", role: "Operations Manager - Shiva Traders", image: "/images/charlie.jpg", description: "Charlie ensures our brand reaches the right audience." },
  { name: "Venkat Rao K", role: "Operations Manager - Shiva Traders", image: "/images/david.jpg", description: "David oversees daily operations to maintain efficiency." },
  { name: "Praveen V", role: "Accounting Head - Shiva Traders", image: "/images/eve.jpg", description: "Eve manages financial strategy and operations." },
  { name: "Bobby", role: "Sales - Shiva Traders", image: "/images/eve.jpg", description: "Eve manages financial strategy and operations." }
];

const OurTeam: React.FC = () => {
  return (
    <div className="relative">
    {/* Background color extending under the header */}
    <div className="absolute top-0 left-0 w-full h-[50vh] bg-gray-900 -z-10"></div>

    {/* Centered Team Header Section */}
    <div className="flex flex-col items-center justify-center h-[50vh] text-center">
      <h1 className="text-5xl font-bold text-white">Our Team</h1>
      <p className="text-lg text-gray-300 mt-3">
        Meet the passionate individuals behind our success.
      </p>
    </div>

      {/* Team Section with Slight Overlap */}
      <div className="relative -mt-10 flex flex-col items-center p-12">
        {/* First Row - 3 Members */}
        <div className="flex flex-wrap justify-center gap-10">
          {teamMembers.slice(0, 3).map((member, index) => (
            <div
              key={index}
              className="bg-white border border-neutral rounded-2xl p-8 shadow-lg w-96 h-[450px] flex flex-col items-center"
            >
              <img src={member.image} alt={member.name} className="w-44 h-44 mx-auto rounded-full mb-6 object-cover" />
              <h2 className="text-2xl font-bold text-secondary">{member.name}</h2>
              <h3 className="text-lg italic text-neutral mb-3">{member.role}</h3>
              <p className="text-md text-neutral px-4 text-center">{member.description}</p>
            </div>
          ))}
        </div>

        {/* Space between the two rows */}
        <div className="my-6"></div>

        {/* Second Row - 2 Members Positioned Between Upper Boxes */}
        <div className="flex flex-wrap justify-center gap-10">
          {teamMembers.slice(3,6).map((member, index) => (
            <div
              key={index}
              className="bg-white border border-neutral rounded-2xl p-8 shadow-lg w-96 h-[450px] flex flex-col items-center"
            >
              <img src={member.image} alt={member.name} className="w-44 h-44 mx-auto rounded-full mb-6 object-cover" />
              <h2 className="text-2xl font-bold text-secondary">{member.name}</h2>
              <h3 className="text-lg italic text-neutral mb-3">{member.role}</h3>
              <p className="text-md text-neutral px-4 text-center">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;

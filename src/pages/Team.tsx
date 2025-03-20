import React from 'react';
import { motion } from 'framer-motion';

const coreMembers = [
  {
    name: 'Anand kumar Singh',
    role: 'President',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQELrH9UiyDLKA/profile-displayphoto-shrink_800_800/B56ZWgIHc0GoAc-/0/1742148237996?e=1747872000&v=beta&t=baL-X5VtPKEHBXzqITly4wQyGl39w0Tbu9AouULx_Gg',
  },
  {
    name: 'Piyush Yadav',
    role: 'Marketing Head',
    image: 'https://pbs.twimg.com/profile_images/1891205289288052736/JqaWTFB5_400x400.jpg',
    bio: 'Driving growth and engagement strategies',
  },
  {
    name: 'Agyanshu Kumar',
    role: 'Treasurer',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQHsGN-HnusQkA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1721807976950?e=1747267200&v=beta&t=HoqHhzamAS8P2OF2HXptkO5tnDXT4vlY7kR8XXhF0YI',
    bio: 'Managing finances and budgeting',
  },
  {
    name: 'Shivam Kundu',
    role: 'Social Media Manager',
    //image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'Handling our social media presence',
  },
  {
    name: 'Ritikant juhi ',
    role: 'EventManager',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQGAUN7witLBKA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718252678856?e=1747872000&v=beta&t=iBcfHez5LYbds28oJATBMgzbCbM3-t5iAo3ZbZ2i2oM',
    bio: 'Handling the evtnts ',
  },
];

//const domainLeads = [
  // {
  //   name: 'xyz',
  //   role: 'Photography Lead',
  //   //image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  //   bio: 'Capturing moments that matter',
  // },
  // {
  //   name: 'abc',
  //   role: 'Web Development Lead',
  //   //image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  //   //image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  //   bio: 'Building the digital future',
  // },
  // {
  //   name: '123',
  //   role: 'Hackathon Lead',
  //   //image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  //   bio: 'Fostering innovation through code',
  // },
//];

const TeamMemberCard = ({ member }: { member: typeof coreMembers[0] }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
  >
    <img
      className="w-full h-64 object-cover"
      src={member.image}
      alt={member.name}
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
        {member.name}
      </h3>
      <p className="text-orange-600 dark:text-orange-400 mt-1">{member.role}</p>
      <p className="mt-3 text-gray-600 dark:text-gray-300">{member.bio}</p>
    </div>
  </motion.div>
);

export default function Team() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-16">
          <span className="text-orange-600">PeerHub</span>{' '}
          <span className="text-blue-600">IEM</span> Team
        </h1>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-8">Core Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreMembers.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>
        </section>

        {/* <section>
          <h2 className="text-3xl font-semibold text-center mb-8">Domain Leads</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {domainLeads.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>
        </section> */}
      </div>
    </div>
  );
} 
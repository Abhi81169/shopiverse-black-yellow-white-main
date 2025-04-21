
// src/pages/AboutUsPage.tsx

// import { motion } from 'framer-motion';
// import { useEffect } from 'react';
// import { Link } from 'react-router-dom';

// const journeyTimeline = [
//   { year: '2020', text: 'Our journey began with a vision to redefine online shopping.' },
//   { year: '2021', text: 'Launched our first collection and hit 10,000 users milestone.' },
//   { year: '2022', text: 'Expanded globally and partnered with top brands.' },
//   { year: '2023', text: 'Introduced AI-powered recommendations and smarter search.' },
//   { year: '2024', text: 'Reached over 1 million happy customers worldwide.' },
// ];

// const AboutUsPage = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <div className="container mx-auto p-6">
//       <motion.h1
//         className="text-4xl md:text-5xl font-bold text-center mb-8"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         About <span className="text-yellow-500">ShopiVerse</span>
//       </motion.h1>

//       <motion.div
//         className="mb-12 text-lg text-gray-700 text-center max-w-4xl mx-auto"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.3, duration: 0.6 }}
//       >
//         ShopiVerse is your ultimate destination for trendy fashion, quality products, and seamless shopping. 
//         Our mission is to bring a delightful shopping experience with innovation and care at its core.
//       </motion.div>

//       {/* Timeline Section */}
//       <div className="mb-16">
//         <h2 className="text-2xl font-semibold mb-6 text-center">Our Journey</h2>
//         <div className="space-y-6 relative border-l-4 border-yellow-500 pl-6">
//           {journeyTimeline.map((event, idx) => (
//             <motion.div
//               key={idx}
//               className="hover:bg-yellow-100 p-4 rounded-lg border shadow transition-transform"
//               initial={{ opacity: 0, x: -40 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: idx * 0.2 }}
//             >
//               <h3 className="text-xl font-bold">{event.year}</h3>
//               <p className="text-gray-600">{event.text}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Team & Values */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//         <motion.img
//           src="/about-image.jpg"
//           alt="Our Team"
//           className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
//           initial={{ scale: 0.9, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         />

//         <motion.div
//           className="text-gray-700 text-lg"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <p>
//             We believe in building a community that loves fashion and innovation. Our dedicated team of
//             designers, developers, and marketers work round the clock to keep ShopiVerse at the top of
//             your wishlist.
//           </p>
//           <Link
//             to="/contact"
//             className="inline-block mt-6 text-yellow-600 hover:underline font-semibold"
//           >
//             Contact Us →
//           </Link>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default AboutUsPage;

// src/pages/AboutUsPage.tsx

import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Abhishek Singh",
    role: "Founder & CEO",
    image: "/images/team1.jpg",
    bio: "Visionary leader with a passion for innovation and fashion tech."
  },
  {
    name: "Aditya",
    role: "Marketing Head",
    image: "/images/team2.jpg",
    bio: "Expert in digital strategy and customer engagement."
  },
  {
    name: "Anuj Gupta",
    role: "Lead Developer",
    image: "/images/team3.jpg",
    bio: "Full-stack developer passionate about e-commerce solutions."
  }
];

const AboutUsPage = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          About Us
        </motion.h1>
        <motion.p
          className="text-center max-w-3xl mx-auto text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          ShopiVerse is your trusted destination for premium fashion and trendsetting styles. We are passionate about delivering quality, convenience, and innovation to our customers every day.
        </motion.p>
      </section>
      <motion.h1 
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Meet Our Team
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-xl shadow-xl border hover:shadow-2x1 transition-shadow"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img 
              src={member.image} 
              alt={member.name}
              className="rounded-full w-32 h-32 object-cover mx-auto mb-4 border-4 border-blue-400"
            />
            <h2 className="text-xl font-semibold text-center">{member.name}</h2>
            <p className="text-center text-brand-yellow">{member.role}</p>
            <p className="text-center text-gray-800 mt-2">{member.bio}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutUsPage;

// import { motion } from 'framer-motion';

// const teamMembers = [
//   {
//     name: 'Abhishek Kumar',
//     role: 'Founder & CEO',
//     image: 'https://randomuser.me/api/portraits/men/32.jpg',
//     description: 'Visionary leader focused on growth and innovation.',
//   },
//   {
//     name: 'Priya Singh',
//     role: 'Lead Designer',
//     image: 'https://randomuser.me/api/portraits/women/44.jpg',
//     description: 'Creates elegant, user-centered designs with flair.',
//   },
//   {
//     name: 'Rahul Verma',
//     role: 'Head of Development',
//     image: 'https://randomuser.me/api/portraits/men/76.jpg',
//     description: 'Ensures smooth performance and clean architecture.',
//   },
// ];

// const AboutUs = () => {
//   return (
//     <div className="bg-white text-gray-800">
//       {/* About Section */}
//       <section className="py-16 px-4 md:px-8 lg:px-16">
//         <motion.h1
//           className="text-4xl md:text-5xl font-bold text-center mb-6"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//         >
//           About Us
//         </motion.h1>
//         <motion.p
//           className="text-center max-w-3xl mx-auto text-lg"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3 }}
//         >
//           ShopiVerse is your trusted destination for premium fashion and trendsetting styles. We are passionate about delivering quality, convenience, and innovation to our customers every day.
//         </motion.p>
//       </section>

//       {/* My Team Section */}
//       <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-16">
//         <motion.h2
//           className="text-3xl md:text-4xl font-semibold text-center mb-12"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//         >
//           My Team
//         </motion.h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
//           {teamMembers.map((member, index) => (
//             <motion.div
//               key={index}
//               className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all border p-6 text-center"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.2 }}
//               viewport={{ once: true }}
//             >
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className="w-28 h-28 mx-auto rounded-full border-4 border-brand-yellow mb-4 object-cover"
//               />
//               <h3 className="text-xl font-semibold">{member.name}</h3>
//               <p className="text-brand-yellow font-medium">{member.role}</p>
//               <p className="text-gray-600 mt-2">{member.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AboutUs;


import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Abhishek Kumar",
    role: "Founder & CEO",
    image: "/images/team1.jpg",
    bio: "Full-stack developer passionate about e-commerce solutions."
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
    bio: "Visionary leader with a passion for innovation and fashion tech."
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

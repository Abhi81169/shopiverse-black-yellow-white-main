import { Facebook, Instagram, Mail, Twitter } from 'lucide-react';
import { useState } from 'react';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-4">Contact Us</h1>
      <p className="text-center text-gray-600 mb-10">
        We'd love to hear from you! Fill out the form below and we'll get in touch.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-lg p-6 space-y-5"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
            <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-yellow"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-yellow"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
            <textarea
              name="message"
              rows={5}
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-yellow"
            />
          </div>

          <button
            type="submit"
            className="bg-brand-yellow text-black px-6 py-2 rounded font-semibold hover:bg-yellow-400 transition-all"
          >
            Send Message
          </button>

          {submitted && (
            <p className="text-green-600 mt-3">Your message has been sent. Thank you!</p>
          )}
        </form>

        {/* Map & Social */}
        <div className="flex flex-col space-y-6">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1354191539053!2d-122.41941528467998!3d37.774929279759434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808b931fbf7d%3A0xf49a8aa28fbd48db!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1615192951713!5m2!1sen!2sus"
            className="w-full h-64 rounded-md shadow-md"
            loading="lazy"
            allowFullScreen
          ></iframe>

          <div className="flex space-x-6 justify-center mt-4 text-gray-600">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <Facebook className="w-6 h-6 hover:text-blue-500" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <Instagram className="w-6 h-6 hover:text-pink-500" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <Twitter className="w-6 h-6 hover:text-sky-500" />
            </a>
            <a href="https://Gmail.com">
              <Mail className="w-6 h-6 hover:text-red-500" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;

// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { useState } from 'react';

// const ContactPage = () => {
//   const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Form Submitted:', form);
//     // Send form data to your backend or email service here
//   };

//   return (
//     <div className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
//       <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <Input
//           name="name"
//           placeholder="Your Name"
//           value={form.name}
//           onChange={handleChange}
//           required
//         />
//         <Input
//           type="email"
//           name="email"
//           placeholder="Your Email"
//           value={form.email}
//           onChange={handleChange}
//           required
//         />
//         <Input
//           name="subject"
//           placeholder="Subject"
//           value={form.subject}
//           onChange={handleChange}
//           required
//         />
//         <Textarea
//           name="message"
//           placeholder="Your Message"
//           value={form.message}
//           onChange={handleChange}
//           rows={5}
//           required
//         />
//         <Button type="submit" className="w-full">Send Message</Button>
//       </form>
//     </div>
//   );
// };

// export default ContactPage;

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Shirt, User, Baby, } from 'lucide-react';

const tabs = [
  { label: 'Men', icon: <User />, key: 'men' },
  { label: 'Women', icon: <Shirt />, key: 'women' },
  //{ label: 'Boys', icon: <Boys />, key: 'boys' },
  { label: 'Girls', icon: <Baby />, key: 'girls' },
];

const sizeData: Record<string, { size: string; chest: string; waist: string }[]> = {
  men: [
    { size: 'S', chest: '36-38"', waist: '30-32"' },
    { size: 'M', chest: '39-41"', waist: '33-35"' },
    { size: 'L', chest: '42-44"', waist: '36-38"' },
  ],
  women: [
    { size: 'S', chest: '32-34"', waist: '25-27"' },
    { size: 'M', chest: '35-37"', waist: '28-30"' },
    { size: 'L', chest: '38-40"', waist: '31-33"' },
  ],
  boys: [
    { size: 'S', chest: '26-28"', waist: '22-24"' },
    { size: 'M', chest: '29-31"', waist: '25-27"' },
    { size: 'L', chest: '32-34"', waist: '28-30"' },
  ],
  girls: [
    { size: 'S', chest: '24-26"', waist: '20-22"' },
    { size: 'M', chest: '27-29"', waist: '23-25"' },
    { size: 'L', chest: '30-32"', waist: '26-28"' },
  ],
};

const SizeGuidePage = () => {
  const [activeTab, setActiveTab] = useState('men');

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-6">Size Guide</h1>

      <div className="flex justify-center gap-4 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all ${
              activeTab === tab.key ? 'bg-black text-white shadow-md' : 'bg-white text-black border-gray-300'
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="overflow-x-auto"
      >
        <table className="min-w-full text-sm text-left border shadow-md rounded-xl overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 border-b">Size</th>
              <th className="px-6 py-3 border-b">Chest</th>
              <th className="px-6 py-3 border-b">Waist</th>
            </tr>
          </thead>
          <tbody>
            {sizeData[activeTab].map((row, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-all">
                <td className="px-6 py-4 border-b">{row.size}</td>
                <td className="px-6 py-4 border-b">{row.chest}</td>
                <td className="px-6 py-4 border-b">{row.waist}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
};

export default SizeGuidePage;

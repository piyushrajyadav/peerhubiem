import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  {
    id: 1,
    src: '/gallery/event1.jpg',
    title: 'Quiz Competition (QuizVerse)',
    description: 'Students competing in the quiz competition',
  },
  {
    id: 2,
    src: '/gallery/event2.jpg',
    title: 'Hackathon Winners',
    description: 'Winners of our annual hackathon',
  },
  {
    id: 3,
    src: '/gallery/event3.jpg',
    title: 'Guest Lecture',
    description: 'Industry expert sharing insights',
  },
  {
    id: 4,
    src: '/gallery/event4.jpg',
    title: 'Team Building Activity',
    description: 'Students participating in team activities',
  },
  {
    id: 5,
    src: '/gallery/event5.jpg',
    title: 'Project Showcase',
    description: 'Students presenting their projects',
  },
  {
    id: 6,
    src: '/gallery/event6.jpg',
    title: 'Cultural Event',
    description: 'Celebrating diversity in tech',
  },
];

interface ImageModalProps {
  image: typeof images[0] | null;
  onClose: () => void;
}

function ImageModal({ image, onClose }: ImageModalProps) {
  if (!image) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative max-w-4xl w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image.src}
          alt={image.title}
          className="w-full h-[60vh] object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{image.title}</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300">{image.description}</p>
        </div>
        <button
          className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors"
          onClick={onClose}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </motion.div>
    </motion.div>
  );
}

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(null);

  return (
    <div className="py-12">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Gallery</h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Explore moments from our past events and activities
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold">{image.title}</h3>
                  <p className="text-gray-200 text-sm mt-1">{image.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedImage && (
            <ImageModal
              image={selectedImage}
              onClose={() => setSelectedImage(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
} 
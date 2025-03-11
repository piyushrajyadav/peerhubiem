import React from 'react';
import { motion } from 'framer-motion';

const benefits = [
  {
    title: "Access to Events",
    description: "Get priority access to all PeerHub events, workshops, and competitions."
  },
  {
    title: "Mentorship",
    description: "Connect with experienced mentors and industry professionals."
  },
  {
    title: "Resources",
    description: "Access exclusive learning resources and materials."
  },
  {
    title: "Community",
    description: "Join a vibrant community of like-minded students."
  }
];

const requirements = [
  "Must be a current student of IEM",
  "Maintain a minimum attendance of 75% in PeerHub events",
  "Actively participate in community activities",
  "Follow the code of conduct"
];

export default function JoinUs() {
  return (
    <div className="py-12">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Join PeerHub</h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Become a part of IEM's most active student community and unlock endless opportunities.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Benefits</h2>
            <div className="mt-6 space-y-6">
              {benefits.map((benefit, index) => (
                <div key={benefit.title} className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      {index + 1}
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                      {benefit.title}
                    </h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Requirements</h2>
            <ul className="mt-6 space-y-4">
              {requirements.map((requirement) => (
                <li key={requirement} className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 text-primary-500">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="ml-3 text-gray-600 dark:text-gray-300">{requirement}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Ready to Join?</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Fill out our registration form to become a member of PeerHub.
          </p>
          <div className="mt-6">
            <a
              href="https://forms.google.com/peerhub-registration"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary inline-flex items-center text-lg px-8 py-3"
            >
              Register Now
              <svg
                className="ml-2 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 
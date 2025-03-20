import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero section */}
      <div className="relative pt-6 pb-16 sm:pb-24">
        <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl"
            >
              <span className="block">Welcome to</span>
              <span className="block text-primary-600 dark:text-primary-500">IEM PeerHub</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
            >
              Empowering students through peer learning, innovation, and collaboration.
            </motion.p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link
                  to="/join-us"
                  className="btn btn-primary w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md md:py-4 md:text-lg md:px-10"
                >
                  Join Now
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-3 sm:mt-0 sm:ml-3"
              >
                <Link
                  to="/events"
                  className="btn btn-secondary w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md md:py-4 md:text-lg md:px-10"
                >
                  View Events
                </Link>
              </motion.div>
            </div>
          </div>
        </main>
      </div>

      {/* Features section */}
      <div className="relative bg-white dark:bg-gray-900 py-16 sm:py-24">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <h2 className="text-base font-semibold tracking-wider text-primary-600 uppercase">Why Join Us?</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight sm:text-4xl">
            Benefits of Being a PeerHub Member
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Skill Development',
                description: 'Enhance your technical and soft skills through workshops and hands-on projects.',
              },
              {
                title: 'Networking',
                description: 'Connect with like-minded peers and industry professionals.',
              },
              {
                title: 'Leadership Opportunities',
                description: 'Take on leadership roles and organize impactful events.',
              },
              {
                title: 'Industry Exposure',
                description: 'Get insights into the latest industry trends and technologies.',
              },
              {
                title: 'Certifications',
                description: 'Earn certificates for your participation and achievements.',
              },
              {
                title: 'Fun Events',
                description: 'Participate in exciting competitions, hackathons, and social events.',
              },
            ].map((feature) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="pt-6"
              >
                <div className="flow-root bg-gray-50 dark:bg-gray-800 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <h3 className="mt-8 text-lg font-medium text-gray-900 dark:text-white tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="mt-5 text-base text-gray-500 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 
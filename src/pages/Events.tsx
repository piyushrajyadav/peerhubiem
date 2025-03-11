import React from 'react';
import { motion } from 'framer-motion';

interface Event {
  id: number;
  name: string;
  date: string;
  description: string;
  image: string;
  sponsors: string[];
  prizes: string[];
  certificates: boolean;
  registrationLink: string;
  faqs: Array<{ question: string; answer: string }>;
}

const featuredEvent: Event = {
  id: 1,
  name: "Quiz Competition",
  date: "22nd March",
  description: "Test your knowledge and compete with the best! The winner gets exciting prizes and recognition.",
  image: "/events/quiz.jpg",
  sponsors: ["TechCorp", "InnovateHub"],
  prizes: ["1st Prize: ₹10,000", "2nd Prize: ₹5,000", "3rd Prize: ₹3,000"],
  certificates: true,
  registrationLink: "https://forms.google.com/quiz-competition",
  faqs: [
    {
      question: "Who can participate?",
      answer: "Any student from IEM can participate in the quiz competition."
    },
    {
      question: "What is the format?",
      answer: "The quiz will have multiple rounds including technical, general knowledge, and rapid-fire rounds."
    }
  ]
};

const upcomingEvents: Event[] = [
  {
    id: 2,
    name: "Hackathon 2024",
    date: "5th April",
    description: "24-hour coding challenge to solve real-world problems.",
    image: "/events/hackathon.jpg",
    sponsors: ["Microsoft", "AWS"],
    prizes: ["1st Prize: ₹50,000", "2nd Prize: ₹30,000", "3rd Prize: ₹20,000"],
    certificates: true,
    registrationLink: "https://forms.google.com/hackathon",
    faqs: [
      {
        question: "Team size?",
        answer: "2-4 members per team"
      },
      {
        question: "What to bring?",
        answer: "Your laptop and enthusiasm!"
      }
    ]
  },
  {
    id: 3,
    name: "Tech Workshop",
    date: "15th April",
    description: "Learn about the latest technologies from industry experts.",
    image: "/events/workshop.jpg",
    sponsors: ["Google Developers", "Intel"],
    prizes: [],
    certificates: true,
    registrationLink: "https://forms.google.com/workshop",
    faqs: [
      {
        question: "Prerequisites?",
        answer: "Basic programming knowledge"
      },
      {
        question: "Duration?",
        answer: "Full day workshop (9 AM - 5 PM)"
      }
    ]
  }
];

function EventCard({ event, featured = false }: { event: Event; featured?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden ${featured ? 'lg:col-span-2' : ''}`}
    >
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{event.name}</h3>
        <p className="mt-2 text-primary-600 dark:text-primary-400">{event.date}</p>
        <p className="mt-4 text-gray-600 dark:text-gray-300">{event.description}</p>
        
        {event.sponsors.length > 0 && (
          <div className="mt-4">
            <h4 className="font-semibold text-gray-900 dark:text-white">Sponsors</h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {event.sponsors.map((sponsor) => (
                <span key={sponsor} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">
                  {sponsor}
                </span>
              ))}
            </div>
          </div>
        )}

        {event.prizes.length > 0 && (
          <div className="mt-4">
            <h4 className="font-semibold text-gray-900 dark:text-white">Prizes</h4>
            <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-300">
              {event.prizes.map((prize) => (
                <li key={prize}>{prize}</li>
              ))}
            </ul>
          </div>
        )}

        {event.certificates && (
          <div className="mt-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
              Certificates Available
            </span>
          </div>
        )}

        <div className="mt-6">
          <a
            href={event.registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary inline-flex items-center"
          >
            Register Now
          </a>
        </div>

        {event.faqs.length > 0 && (
          <div className="mt-6">
            <h4 className="font-semibold text-gray-900 dark:text-white">FAQs</h4>
            <dl className="mt-2 space-y-4">
              {event.faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="font-medium text-gray-900 dark:text-white">{faq.question}</dt>
                  <dd className="mt-1 text-gray-600 dark:text-gray-300">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Events() {
  return (
    <div className="py-12">
      <div className="container">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Events</h1>
        
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Featured Event</h2>
          <div className="mt-6">
            <EventCard event={featuredEvent} featured />
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Upcoming Events</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
} 
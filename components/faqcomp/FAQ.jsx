"use client";

import React, { useState } from "react";
import { HeaderText } from "../preschool";
import { wantCard } from "@/utils/arrays/PreSchool";

const FAQ = () => {
  // State to manage expanded questions, defaulting to the first item
  const [expandedIndex, setExpandedIndex] = useState(0);

  const faqs = [
    {
      question: "What is your return policy?",
      answer:
        "Our return policy allows for returns within 30 days of purchase. Items must be in their original condition and packaging.",
    },
    {
      question: "How can I track my order?",
      answer:
        "You can track your order using the tracking number provided in your confirmation email. Visit our tracking page and enter the number.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we offer international shipping to many countries. Shipping fees and delivery times vary based on your location.",
    },
    {
      question: "How do I contact customer support?",
      answer:
        "You can contact customer support through our contact page or by emailing support@example.com. We are available Monday to Friday from 9 AM to 6 PM.",
    },
    {
      question: "What is your return policy?",
      answer:
        "Our return policy allows for returns within 30 days of purchase. Items must be in their original condition and packaging.",
    },
    {
      question: "How can I track my order?",
      answer:
        "You can track your order using the tracking number provided in your confirmation email. Visit our tracking page and enter the number.",
    },
    
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  
  const wantCard = [
    {
      header: "Frequently asked questions",
      // para: "To display the lessons, select the book you want:"
    },
  ];

  return (
    <div className="py-5">
      <div className="container mx-auto px-4">

        {wantCard &&
            wantCard.map((data, index) => {
              return <HeaderText data={data} key={index} />;
            })}

        <div className="border-2 border-gray-400 border-b-0 rounded-xl">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white shadow-md border-b-2 border-gray-400 rounded-t-xl ${
                expandedIndex === index ? "bg-gray-100" : ""
              }`}
            >
              <button
                className={`w-full flex items-center justify-between px-6 py-4 text-left rounded-t-lg focus:outline-none ${
                  expandedIndex === index
                    ? "bg-[#F4BD50] rounded-t-none text-gray-100"
                    : "bg-white text-gray-700"
                }`}
                onClick={() => toggleExpand(index)}
              >
                <span className="sm:text-lg font-medium">{faq.question}</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-200 ${
                    expandedIndex === index ? "transform rotate-180" : ""
                  } ${
                    expandedIndex === index ? "text-orange-500" : "text-gray-500"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {expandedIndex === index && (
                <div
                  className={`px-6 py-4 text-gray-600 rounded-b-lg ${
                    expandedIndex === index ? "bg-[#FFEFD0] text-gray-800" : ""
                  }`}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;

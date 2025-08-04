import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center text-gray-900">
            About Me
          </h1>

          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
            <div className="grid grid-cols-1 md:grid-cols-5">
              {/* Profile Image */}
              <div className="md:col-span-2 h-full">
                <img 
                  src="https://images.pexels.com/photos/5439147/pexels-photo-5439147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Data Visualization Expert" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Bio */}
              <div className="md:col-span-3 p-6 md:p-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">Data Storyteller & Visualization Specialist</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  I'm a data visualization specialist with over 8 years of experience transforming complex datasets into clear, actionable insights through beautiful interactive dashboards.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  My expertise spans across various data visualization platforms including Tableau, Power BI, Google Data Studio, and custom D3.js implementations. I've helped organizations across finance, healthcare, retail, and technology sectors make better data-driven decisions through effective visualization.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  When I'm not designing dashboards, I'm either exploring new visualization techniques, contributing to open data projects, or mentoring aspiring data analysts.
                </p>
              </div>
            </div>
          </div>

          {/* Expertise */}
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">My Expertise</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-xl font-medium mb-3 text-gray-800">Visualization Platforms</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-blue-500 mr-2"></span>
                    Tableau Public & Tableau Desktop
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-blue-500 mr-2"></span>
                    Microsoft Power BI
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-blue-500 mr-2"></span>
                    Google Data Studio / Looker Studio
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-blue-500 mr-2"></span>
                    D3.js & Observable
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-blue-500 mr-2"></span>
                    Qlik Sense
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-3 text-gray-800">Data Skills</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-teal-500 mr-2"></span>
                    Data Wrangling & Preparation
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-teal-500 mr-2"></span>
                    ETL Process Design
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-teal-500 mr-2"></span>
                    Statistical Analysis
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-teal-500 mr-2"></span>
                    SQL & Database Management
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-teal-500 mr-2"></span>
                    Python & R for Data Analysis
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-3 text-gray-800">Industries Served</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-50 p-3 rounded-md text-center">
                  <span className="text-gray-700">Finance</span>
                </div>
                <div className="bg-gray-50 p-3 rounded-md text-center">
                  <span className="text-gray-700">Healthcare</span>
                </div>
                <div className="bg-gray-50 p-3 rounded-md text-center">
                  <span className="text-gray-700">Retail</span>
                </div>
                <div className="bg-gray-50 p-3 rounded-md text-center">
                  <span className="text-gray-700">Technology</span>
                </div>
                <div className="bg-gray-50 p-3 rounded-md text-center">
                  <span className="text-gray-700">Education</span>
                </div>
                <div className="bg-gray-50 p-3 rounded-md text-center">
                  <span className="text-gray-700">Non-Profit</span>
                </div>
                <div className="bg-gray-50 p-3 rounded-md text-center">
                  <span className="text-gray-700">Manufacturing</span>
                </div>
                <div className="bg-gray-50 p-3 rounded-md text-center">
                  <span className="text-gray-700">Government</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-900 to-teal-800 rounded-lg shadow-md p-8 text-white text-center">
            <h2 className="text-2xl font-semibold mb-4">Let's Work Together</h2>
            <p className="mb-6 max-w-xl mx-auto">
              Have a data visualization project in mind? I'd love to help bring your data to life through interactive, insightful dashboards.
            </p>
            <Link 
              to="/contact" 
              className="inline-block px-6 py-3 bg-white hover:bg-gray-100 text-gray-900 font-medium rounded-md transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
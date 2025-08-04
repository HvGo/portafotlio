import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, LineChart, PieChart, AreaChart } from 'lucide-react';
import { useProjects } from '../context/ProjectsContext';
import ProjectCard from '../components/ProjectCard';

const HomePage: React.FC = () => {
  const { projects, loading, fetchProjects } = useProjects();

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  const featuredProjects = projects.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-blue-900 to-teal-800 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Bringing Data to Life Through Interactive Visualizations
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Transforming complex data into clear, actionable insights through beautiful, interactive dashboards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/projects" 
                className="inline-block px-8 py-3 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-md transition-colors"
              >
                View Projects
              </Link>
              <Link 
                to="/contact" 
                className="inline-block px-8 py-3 bg-transparent hover:bg-white/10 border border-white text-white font-medium rounded-md transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Featured Projects</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore some of my recent data visualization work across various industries and platforms.
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-600"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Link 
              to="/projects" 
              className="inline-block px-6 py-3 bg-white hover:bg-gray-100 text-gray-900 font-medium rounded-md shadow-sm border border-gray-200 transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Visualization Expertise</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              I specialize in creating interactive dashboards across various platforms and visualization types.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <BarChart3 className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Tableau Dashboards</h3>
              <p className="text-gray-600">
                Interactive visualizations built with Tableau's powerful analytics platform.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <div className="bg-green-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <LineChart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Power BI Reports</h3>
              <p className="text-gray-600">
                Business intelligence visualizations with Microsoft's dynamic BI tools.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <div className="bg-purple-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <PieChart className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Google Data Studio</h3>
              <p className="text-gray-600">
                Streamlined reports connected to your Google marketing and analytics data.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <div className="bg-orange-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <AreaChart className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Custom D3.js</h3>
              <p className="text-gray-600">
                Bespoke web-based visualizations using D3.js for unique requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-teal-800 to-blue-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Visualize Your Data?</h2>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              Let's collaborate to transform your data into beautiful, actionable insights that drive decisions.
            </p>
            <Link 
              to="/contact" 
              className="inline-block px-8 py-3 bg-white hover:bg-gray-100 text-gray-900 font-medium rounded-md transition-colors"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
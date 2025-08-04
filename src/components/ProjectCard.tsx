import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  date: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  // Truncate description to a reasonable length
  const truncateDescription = (text: string, maxLength = 120) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.thumbnail} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-3 right-3">
          <span className="inline-block px-3 py-1 bg-teal-600 text-white text-xs font-medium rounded-full">
            {project.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <Calendar size={14} className="mr-1" />
          {new Date(project.date).toLocaleDateString('en-US', { 
            year: 'numeric',
            month: 'long'
          })}
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
        
        <p className="text-gray-600 mb-4">
          {truncateDescription(project.description)}
        </p>
        
        <Link 
          to={`/projects/${project.id}`}
          className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium transition-colors"
        >
          View Project
          <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
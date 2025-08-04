import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, Tag, ArrowLeft, ExternalLink } from 'lucide-react';
import { useProjects } from '../context/ProjectsContext';
import DashboardEmbed from '../components/DashboardEmbed';

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getProject } = useProjects();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      if (id) {
        setLoading(true);
        try {
          const projectData = await getProject(id);
          setProject(projectData);
        } catch (error) {
          console.error('Error fetching project:', error);
          navigate('/projects', { replace: true });
        } finally {
          setLoading(false);
        }
      }
    };

    fetchProject();
  }, [id, getProject, navigate]);

  if (loading) {
    return (
      <div className="pt-24 pb-16 flex justify-center items-center min-h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-600"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="pt-24 pb-16 flex justify-center items-center min-h-screen bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Project Not Found</h2>
          <p className="text-gray-600 mb-6">The project you're looking for doesn't exist or has been removed.</p>
          <button 
            onClick={() => navigate('/projects')}
            className="px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        {/* Back Button */}
        <button 
          onClick={() => navigate('/projects')}
          className="flex items-center text-gray-600 hover:text-teal-600 mb-6 transition-colors"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Projects
        </button>

        {/* Project Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{project.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center">
                  <Calendar size={16} className="mr-1" />
                  {new Date(project.date).toLocaleDateString('en-US', { 
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
                <span className="flex items-center">
                  <Tag size={16} className="mr-1" />
                  {project.category}
                </span>
              </div>
            </div>
            
            {project.sourceUrl && (
              <a 
                href={project.sourceUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-4 md:mt-0 flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md transition-colors"
              >
                <ExternalLink size={16} className="mr-2" />
                View Source
              </a>
            )}
          </div>
          
          <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>
          
          {/* Tags */}
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag: string, index: number) => (
                <span 
                  key={index}
                  className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Dashboard Embed */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Interactive Dashboard</h2>
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <DashboardEmbed embedCode={project.embedCode} title={project.title} />
          </div>
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Methodology */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Methodology</h2>
            <p className="text-gray-700 leading-relaxed">{project.methodology || "No methodology information available."}</p>
          </div>
          
          {/* Key Insights */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Key Insights</h2>
            {project.insights ? (
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {project.insights.map((insight: string, index: number) => (
                  <li key={index}>{insight}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-700">No key insights available.</p>
            )}
          </div>
          
          {/* Tools Used */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Tools Used</h2>
            {project.tools ? (
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {project.tools.map((tool: string, index: number) => (
                  <li key={index}>{tool}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-700">No tools information available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
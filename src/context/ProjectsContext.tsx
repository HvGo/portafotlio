import React, { createContext, useContext, useState, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';

// Sample data
const initialProjects = [
  {
    id: '1',
    title: 'Sales Performance Dashboard',
    description: 'An interactive Tableau dashboard analyzing sales performance across regions, product categories, and time periods. Includes trend analysis, forecasting, and key performance indicators.',
    embedCode: '<iframe src="https://public.tableau.com/views/RegionalSampleWorkbook/Storms?:embed=yes&:display_count=yes&:showVizHome=no" width="100%" height="500" frameborder="0"></iframe>',
    category: 'Tableau',
    thumbnail: 'https://images.pexels.com/photos/7947226/pexels-photo-7947226.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: '2023-10-15',
    methodology: 'This dashboard was created using Tableau Desktop with data from our SQL Server database. I performed data cleaning and transformation in SQL before importing into Tableau. The dashboard is updated daily with scheduled refreshes.',
    sourceUrl: 'https://public.tableau.com/app/profile/tableau.public',
    tags: ['Sales', 'Analytics', 'KPI', 'Tableau'],
    insights: [
      'Northeast region consistently outperforms other regions by 23%',
      'Product category A shows seasonal patterns with peaks in Q4',
      'Customer retention correlates strongly with purchase frequency'
    ],
    tools: [
      'Tableau Desktop',
      'SQL Server',
      'Excel'
    ]
  },
  {
    id: '2',
    title: 'Healthcare Patient Analytics',
    description: 'A comprehensive Power BI dashboard tracking patient outcomes, treatment effectiveness, and operational metrics for a healthcare provider. Visualizes patient demographics, treatment success rates, and resource utilization.',
    embedCode: '<iframe title="Healthcare Analytics" width="100%" height="500" src="https://app.powerbi.com/view?r=eyJrIjoiZWZhZmJjMzktMGRiMC00NGMyLTkyNzAtYTUwNjRjNmQ4NTlkIiwidCI6IjE4YjVlOWI0LTdkYTUtNGFjYi05NmU0LTUwZjkxZWZjNmMyYyIsImMiOjN9" frameborder="0" allowFullScreen="true"></iframe>',
    category: 'Power BI',
    thumbnail: 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: '2023-09-05',
    methodology: 'Data was collected from the hospital\'s electronic health records system and anonymized for analysis. Power BI was used to create the visualization with measures created using DAX. The dashboard is refreshed daily.',
    sourceUrl: 'https://app.powerbi.com/',
    tags: ['Healthcare', 'Power BI', 'Patient Analytics'],
    insights: [
      'Treatment protocol B shows 15% better outcomes for patients over 65',
      'Average length of stay reduced by 2.3 days after process improvement',
      'Readmission rates decreased by 8% year-over-year'
    ],
    tools: [
      'Power BI Desktop',
      'Azure SQL Database',
      'R for statistical analysis'
    ]
  },
  {
    id: '3',
    title: 'Marketing Campaign Performance',
    description: 'A Google Data Studio dashboard tracking marketing campaign performance across channels. Visualizes conversion rates, cost per acquisition, ROI, and customer journey metrics for digital marketing campaigns.',
    embedCode: '<iframe width="100%" height="500" src="https://lookerstudio.google.com/embed/reporting/1a743209-e682-4714-9067-71ca6ae26007/page/DZ7kB" frameborder="0" allowfullscreen></iframe>',
    category: 'Google Data Studio',
    thumbnail: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: '2023-11-20',
    methodology: 'This dashboard connects directly to Google Analytics, Google Ads, and Facebook Ads APIs to pull real-time marketing data. Custom calculations were created to standardize metrics across platforms.',
    sourceUrl: 'https://lookerstudio.google.com/',
    tags: ['Marketing', 'Google Data Studio', 'Campaign Analytics'],
    insights: [
      'Email campaigns deliver 3.2x higher ROI than social media ads',
      'Mobile conversion rate increased 18% after landing page optimization',
      'Video content generates 2.5x more engagement than static images'
    ],
    tools: [
      'Google Data Studio',
      'Google Analytics',
      'Google Ads API',
      'Facebook Marketing API'
    ]
  }
];

interface Project {
  id: string;
  title: string;
  description: string;
  embedCode: string;
  category: string;
  thumbnail: string;
  date: string;
  methodology?: string;
  sourceUrl?: string;
  tags: string[];
  insights: string[];
  tools: string[];
}

interface ProjectsContextType {
  projects: Project[];
  loading: boolean;
  fetchProjects: () => void;
  getProject: (id: string) => Promise<Project | null>;
  createProject: (project: Omit<Project, 'id'>) => Promise<Project>;
  updateProject: (id: string, project: Partial<Project>) => Promise<Project>;
  deleteProject: (id: string) => Promise<void>;
}

const ProjectsContext = createContext<ProjectsContextType | undefined>(undefined);

export const useProjects = () => {
  const context = useContext(ProjectsContext);
  if (context === undefined) {
    throw new Error('useProjects must be used within a ProjectsProvider');
  }
  return context;
};

interface ProjectsProviderProps {
  children: React.ReactNode;
}

export const ProjectsProvider: React.FC<ProjectsProviderProps> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch projects - in a real app this would be an API call
  const fetchProjects = useCallback(() => {
    setLoading(true);
    // Simulate API delay
    setTimeout(() => {
      // Try to get projects from localStorage first
      const storedProjects = localStorage.getItem('projects');
      if (storedProjects) {
        try {
          setProjects(JSON.parse(storedProjects));
        } catch (error) {
          console.error('Failed to parse stored projects:', error);
          // Fall back to initial projects if parsing fails
          setProjects(initialProjects);
          localStorage.setItem('projects', JSON.stringify(initialProjects));
        }
      } else {
        // If no projects in localStorage, use initial data
        setProjects(initialProjects);
        localStorage.setItem('projects', JSON.stringify(initialProjects));
      }
      setLoading(false);
    }, 500);
  }, []);

  // Get a single project by ID
  const getProject = async (id: string): Promise<Project | null> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const project = projects.find(p => p.id === id) || null;
        resolve(project);
      }, 300);
    });
  };

  // Create a new project
  const createProject = async (projectData: Omit<Project, 'id'>): Promise<Project> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newProject = {
          ...projectData,
          id: uuidv4()
        };
        setProjects(prev => {
          const updated = [...prev, newProject];
          localStorage.setItem('projects', JSON.stringify(updated));
          return updated;
        });
        resolve(newProject);
      }, 500);
    });
  };

  // Update an existing project
  const updateProject = async (id: string, projectData: Partial<Project>): Promise<Project> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const index = projects.findIndex(p => p.id === id);
        if (index === -1) {
          reject(new Error('Project not found'));
          return;
        }
        
        const updatedProject = {
          ...projects[index],
          ...projectData
        };
        
        setProjects(prev => {
          const updated = [...prev];
          updated[index] = updatedProject;
          localStorage.setItem('projects', JSON.stringify(updated));
          return updated;
        });
        
        resolve(updatedProject);
      }, 500);
    });
  };

  // Delete a project
  const deleteProject = async (id: string): Promise<void> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        setProjects(prev => {
          const updated = prev.filter(p => p.id !== id);
          localStorage.setItem('projects', JSON.stringify(updated));
          return updated;
        });
        resolve();
      }, 500);
    });
  };

  const value = {
    projects,
    loading,
    fetchProjects,
    getProject,
    createProject,
    updateProject,
    deleteProject
  };

  return <ProjectsContext.Provider value={value}>{children}</ProjectsContext.Provider>;
};
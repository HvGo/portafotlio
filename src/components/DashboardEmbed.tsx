import React, { useState } from 'react';

interface DashboardEmbedProps {
  embedCode: string;
  title: string;
}

const DashboardEmbed: React.FC<DashboardEmbedProps> = ({ embedCode, title }) => {
  const [isLoading, setIsLoading] = useState(true);

  // Function to safely create markup from embed code
  const createMarkup = () => {
    return { __html: embedCode };
  };

  // Handle iframe load event
  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative w-full">
      {/* Loading indicator */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-600 mb-4"></div>
            <p className="text-gray-600">Loading dashboard...</p>
          </div>
        </div>
      )}
      
      {/* Dashboard embed container */}
      <div 
        className="dashboard-embed w-full aspect-[16/9]"
        dangerouslySetInnerHTML={createMarkup()} 
        onLoad={handleIframeLoad}
      />
      
      {/* Fallback for when embed doesn't contain an iframe */}
      <noscript>
        <div className="p-8 text-center">
          <p className="text-gray-600">
            The interactive dashboard "{title}" could not be loaded. Please enable JavaScript to view.
          </p>
        </div>
      </noscript>
    </div>
  );
};

export default DashboardEmbed;
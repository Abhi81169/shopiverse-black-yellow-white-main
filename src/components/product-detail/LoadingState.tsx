
import React from 'react';

const LoadingState = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2 bg-gray-200 animate-pulse h-[500px]"></div>
        <div className="w-full md:w-1/2 space-y-4">
          <div className="h-8 bg-gray-200 animate-pulse rounded w-3/4"></div>
          <div className="h-6 bg-gray-200 animate-pulse rounded w-1/4"></div>
          <div className="h-24 bg-gray-200 animate-pulse rounded"></div>
          <div className="h-10 bg-gray-200 animate-pulse rounded w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingState;

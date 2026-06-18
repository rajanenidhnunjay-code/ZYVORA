import React from 'react';
import { motion } from 'motion/react';

interface PageSkeletonProps {
  page: string;
}

export default function PageSkeleton({ page }: PageSkeletonProps) {
  // Let's create an animated shimmer effect for dark/light theme compatability
  const shimmerVariant = {
    animate: {
      opacity: [0.35, 0.6, 0.35],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }
    }
  };

  const renderHomeSkeleton = () => (
    <div className="space-y-16 py-12">
      {/* Hero Skeleton */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-800 animate-pulse" />
          <div className="h-4 w-36 bg-neutral-200 dark:bg-neutral-800 rounded-md" />
        </div>
        <div className="h-12 sm:h-16 w-3/4 bg-neutral-200 dark:bg-neutral-800 rounded-xl" />
        <div className="h-12 sm:h-16 w-1/2 bg-neutral-200 dark:bg-neutral-800 rounded-xl" />
        <div className="h-4 w-2/3 bg-neutral-100 dark:bg-neutral-900 rounded-md pt-2" />
      </div>

      {/* Hero Buttons Skeleton */}
      <div className="flex flex-wrap gap-4 pt-4">
        <div className="h-12 w-40 bg-neutral-200 dark:bg-neutral-800 rounded-full" />
        <div className="h-12 w-36 bg-neutral-100 dark:bg-neutral-900 rounded-full border border-neutral-200/50 dark:border-neutral-800" />
      </div>

      {/* Showcase Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10">
        {[1, 2, 3].map((i) => (
          <div key={i} className="space-y-4">
            <div className="aspect-[4/5] bg-neutral-150 dark:bg-neutral-900 rounded-2xl" />
            <div className="h-4 w-1/4 bg-neutral-200 dark:bg-neutral-800 rounded-md" />
            <div className="h-6 w-3/4 bg-neutral-150 dark:bg-neutral-900 rounded-md" />
          </div>
        ))}
      </div>
    </div>
  );

  const renderWorkSkeleton = () => (
    <div className="space-y-12">
      {/* Portfolio Title Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-800 animate-pulse" />
            <div className="h-4 w-28 bg-neutral-200 dark:bg-neutral-800 rounded" />
          </div>
          <div className="h-10 w-64 bg-neutral-200 dark:bg-neutral-800 rounded-lg" />
        </div>

        {/* Categories Bar */}
        <div className="flex gap-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-9 w-20 bg-neutral-200 dark:bg-neutral-800 rounded-full" />
          ))}
        </div>
      </div>

      {/* Grid of Case Studies */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="space-y-5">
            {/* Project Image Frame */}
            <div className="aspect-[16/11] bg-neutral-150 dark:bg-neutral-900 rounded-2xl" />
            
            <div className="flex items-center justify-between">
              <div className="space-y-2 w-2/3">
                <div className="h-3 w-1/3 bg-neutral-200 dark:bg-neutral-800 rounded" />
                <div className="h-5 w-full bg-neutral-200 dark:bg-neutral-800 rounded" />
              </div>
              <div className="h-7 w-7 rounded-full bg-neutral-200 dark:bg-neutral-800" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderPhilosophySkeleton = () => (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
      {/* Title block */}
      <div className="lg:col-span-5 space-y-6">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-800 animate-pulse" />
          <div className="h-4 w-32 bg-neutral-200 dark:bg-neutral-800 rounded" />
        </div>
        <div className="h-10 w-full bg-neutral-200 dark:bg-neutral-800 rounded-lg" />
        <div className="h-10 w-2/3 bg-neutral-200 dark:bg-neutral-800 rounded-lg" />
        <div className="h-24 w-full bg-neutral-100 dark:bg-neutral-900 rounded-lg" />
      </div>

      {/* Philosophy principles column */}
      <div className="lg:col-span-7 space-y-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="p-8 rounded-2xl bg-neutral-100 dark:bg-neutral-900 space-y-4">
            <div className="flex items-center justify-between">
              <div className="h-4 w-1/6 bg-neutral-250 dark:bg-neutral-800 rounded" />
              <div className="h-5 w-1/3 bg-neutral-250 dark:bg-neutral-800 rounded" />
            </div>
            <div className="h-12 w-full bg-neutral-200 dark:bg-neutral-850 rounded" />
          </div>
        ))}
      </div>
    </div>
  );

  const renderServicesSkeleton = () => (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
      {/* Sticky header copy */}
      <div className="lg:col-span-4 space-y-6">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-800 animate-pulse" />
          <div className="h-4 w-24 bg-neutral-200 dark:bg-neutral-800 rounded" />
        </div>
        <div className="h-10 w-3/4 bg-neutral-200 dark:bg-neutral-800 rounded-lg" />
        <div className="h-4 w-full bg-neutral-100 dark:bg-neutral-900 rounded" />
        <div className="h-12 w-4/5 bg-neutral-150 dark:bg-neutral-850 rounded-full" />
      </div>

      {/* Accordians panel */}
      <div className="lg:col-span-8 space-y-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="border-b border-neutral-200 dark:border-neutral-800 py-6 flex justify-between items-center">
            <div className="space-y-2 w-1/2">
              <div className="h-6 w-3/4 bg-neutral-200 dark:bg-neutral-800 rounded" />
              <div className="h-3 w-1/2 bg-neutral-100 dark:bg-neutral-900 rounded" />
            </div>
            <div className="h-6 w-6 rounded-full bg-neutral-200 dark:bg-neutral-800" />
          </div>
        ))}
      </div>
    </div>
  );

  const renderProcessSkeleton = () => (
    <div className="space-y-12">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-800 animate-pulse" />
          <div className="h-4 w-28 bg-neutral-200 dark:bg-neutral-800 rounded" />
        </div>
        <div className="h-10 w-64 bg-neutral-200 dark:bg-neutral-800 rounded-lg" />
      </div>

      {/* Horizontal workflow timeline cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="p-6 rounded-2xl bg-neutral-100 dark:bg-neutral-900 space-y-4 min-h-[200px]">
            <div className="h-8 w-8 bg-neutral-200 dark:bg-neutral-800 rounded-full" />
            <div className="h-6 w-2/3 bg-neutral-200 dark:bg-neutral-800 rounded" />
            <div className="space-y-2">
              <div className="h-3 w-full bg-neutral-150 dark:bg-neutral-850 rounded" />
              <div className="h-3 w-4/5 bg-neutral-150 dark:bg-neutral-850 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderEstimatorSkeleton = () => (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
      {/* Description */}
      <div className="lg:col-span-5 space-y-4">
        <div className="h-4 w-28 bg-neutral-200 dark:bg-neutral-800 rounded" />
        <div className="h-10 w-3/4 bg-neutral-200 dark:bg-neutral-800 rounded-lg" />
        <div className="h-16 w-full bg-neutral-100 dark:bg-neutral-900 rounded-lg" />
      </div>

      {/* Planner Card Form */}
      <div className="lg:col-span-7 p-8 rounded-3xl bg-neutral-100 dark:bg-neutral-900 space-y-8">
        <div className="h-6 w-1/3 bg-neutral-200 dark:bg-neutral-850 rounded" />
        
        {/* Tier Grid */}
        <div className="grid grid-cols-3 gap-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-16 bg-neutral-150 dark:bg-neutral-800 rounded-xl" />
          ))}
        </div>

        {/* Sliders */}
        <div className="space-y-4">
          <div className="h-4 w-1/4 bg-neutral-200 dark:bg-neutral-850 rounded" />
          <div className="h-2 w-full bg-neutral-250 dark:bg-neutral-800 rounded" />
        </div>

        <div className="h-14 w-full bg-neutral-200 dark:bg-neutral-850 rounded-full" />
      </div>
    </div>
  );

  const renderContactSkeleton = () => (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
      {/* Direct Line */}
      <div className="lg:col-span-5 space-y-8">
        <div className="space-y-3">
          <div className="h-4 w-32 bg-neutral-200 dark:bg-neutral-800 rounded" />
          <div className="h-10 w-2/3 bg-neutral-200 dark:bg-neutral-800 rounded-lg" />
        </div>

        {/* Founders Cards */}
        {[1, 2].map((i) => (
          <div key={i} className="p-6 rounded-2xl bg-neutral-100 dark:bg-neutral-900 space-y-3">
            <div className="h-3 w-1/6 bg-neutral-200 dark:bg-neutral-800 rounded" />
            <div className="h-5 w-1/2 bg-neutral-255 dark:bg-neutral-800 rounded" />
            <div className="h-4 w-1/3 bg-neutral-200 dark:bg-neutral-800 rounded" />
          </div>
        ))}
      </div>

      {/* Send Message Form Box */}
      <div className="lg:col-span-7 p-8 sm:p-12 rounded-3xl bg-neutral-100 dark:bg-neutral-900 space-y-6">
        <div className="h-6 w-1/3 bg-neutral-200 dark:bg-neutral-850 rounded" />
        <div className="h-4 w-2/3 bg-neutral-150 dark:bg-neutral-850 rounded" />
        
        <div className="space-y-5">
          <div className="h-10 w-full bg-neutral-150 dark:bg-neutral-850 rounded-xl" />
          <div className="h-10 w-full bg-neutral-150 dark:bg-neutral-850 rounded-xl" />
          <div className="h-24 w-full bg-neutral-150 dark:bg-neutral-850 rounded-xl" />
        </div>
        <div className="h-12 w-full bg-neutral-200 dark:bg-neutral-800 rounded-full" />
      </div>
    </div>
  );

  const renderFAQSkeleton = () => (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Title */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-800" />
          <div className="h-4 w-28 bg-neutral-200 dark:bg-neutral-800 rounded" />
        </div>
        <div className="h-10 w-3/4 max-w-sm mx-auto bg-neutral-200 dark:bg-neutral-800 rounded-lg" />
        <div className="h-4 w-1/2 max-w-xs mx-auto bg-neutral-100 dark:bg-neutral-900 rounded" />
      </div>

      {/* Categories & Search block skeleton */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex gap-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-9 w-24 bg-neutral-200 dark:bg-neutral-800 rounded-full" />
          ))}
        </div>
        <div className="h-10 w-full md:w-64 bg-neutral-150 dark:bg-neutral-850 rounded-2xl" />
      </div>

      {/* Accordions */}
      <div className="space-y-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="p-6 rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/50 dark:border-neutral-800 flex justify-between items-center">
            <div className="space-y-3 w-3/4">
              <div className="h-3 w-1/6 bg-neutral-200 dark:bg-neutral-800 rounded" />
              <div className="h-5 w-4/5 bg-neutral-200 dark:bg-neutral-800 rounded-md" />
            </div>
            <div className="h-8 w-8 rounded-full bg-neutral-200 dark:bg-neutral-800" />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <motion.div
      variants={shimmerVariant}
      animate="animate"
      className="max-w-7xl mx-auto px-6 sm:px-12 py-16 sm:py-24"
    >
      {page === 'home' && renderHomeSkeleton()}
      {page === 'work' && renderWorkSkeleton()}
      {page === 'philosophy' && renderPhilosophySkeleton()}
      {page === 'services' && renderServicesSkeleton()}
      {page === 'process' && renderProcessSkeleton()}
      {page === 'estimator' && renderEstimatorSkeleton()}
      {page === 'contact' && renderContactSkeleton()}
      {page === 'faq' && renderFAQSkeleton()}
    </motion.div>
  );
}

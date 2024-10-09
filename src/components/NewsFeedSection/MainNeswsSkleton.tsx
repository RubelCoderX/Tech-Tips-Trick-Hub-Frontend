"use client";

import { Card, CardBody, Skeleton } from "@nextui-org/react";

export default function MainNeswsSkleton() {
  return (
    <div className="w-full bg-gray-900 text-white min-h-screen">
      {/* Header */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-20">
        {/* Main featured article skeleton */}
        <div className="md:col-span-2 lg:col-span-2 relative border-r dark:border-r-slate-200">
          <div className="overflow-hidden relative">
            <Skeleton className="object-cover w-full h-[700px]" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
            <Skeleton className="inline-block bg-pink-500 text-white px-3 py-1 text-sm font-semibold mb-2" />
            <Skeleton className="text-white block text-2xl md:text-3xl font-bold mb-2" />
            <Skeleton className="text-white block w-3/4 h-5 mb-2" />
            <Skeleton className="text-white block w-1/2 h-5" />
          </div>
        </div>

        {/* Smaller articles skeletons */}
        <div className="">
          {[...Array(2)].map((_, index) => (
            <div key={index} className="relative border-b last:border-b-0">
              <div className="overflow-hidden relative">
                <Skeleton className="object-cover w-full h-[350px]" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <Skeleton className="inline-block bg-pink-500 text-white px-3 py-1 text-sm font-semibold mb-2" />
                <Skeleton className="text-white block text-lg font-bold mb-1" />
                <Skeleton className="text-white block w-3/4 h-5 mb-1" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trending Section */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {[1, 2, 3].map((item) => (
            <Card key={item} className="bg-gray-800">
              <Skeleton className="rounded-t-xl h-40" />
              <CardBody>
                <Skeleton className="h-4 w-3/4 rounded-lg" />
                <Skeleton className="h-3 w-1/2 rounded-lg mt-2" />
              </CardBody>
            </Card>
          ))}
        </div>
      </div>

      {/* Banner */}
      <div className="container mx-auto px-4 mb-8">
        <Skeleton className="w-full h-32 rounded-xl" />
      </div>

      {/* What's New Section */}
      <div className="container mx-auto px-4 flex">
        <div className="w-3/4 pr-4">
          {/* <h2 className="text-2xl font-bold mb-4">What's New</h2> */}
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex mb-4">
              <Skeleton className="w-1/4 h-24 rounded-lg" />
              <div className="w-3/4 pl-4">
                <Skeleton className="h-4 w-3/4 rounded-lg mb-2" />
                <Skeleton className="h-3 w-1/2 rounded-lg" />
              </div>
            </div>
          ))}
        </div>
        <div className="w-1/4">
          <Skeleton className="h-64 rounded-lg" />
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 py-4 bg-gray-800">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Skeleton className="h-6 w-40 rounded-lg" />
          <div className="flex space-x-2">
            {[1, 2, 3, 4].map((item) => (
              <Skeleton key={item} className="w-6 h-6 rounded-full" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

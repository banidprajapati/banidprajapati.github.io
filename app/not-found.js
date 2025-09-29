"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary-color px-4">
      <h1 className="text-6xl font-bold text-secondary-color mb-4">404</h1>
      <h2 className="text-2xl text-center mb-6">Page Not Found</h2>
      <p className="text-lg text-center mb-8 max-w-md">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link 
        href="/" 
        className="bg-selected-text-color text-primary-color px-6 py-3 rounded-lg hover:bg-opacity-90 transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
}
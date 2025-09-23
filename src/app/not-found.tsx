

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600">Page Not Found</p>
      <p className="text-center text-gray-500 mt-2">
        The page you are looking for does not exist or has been moved.
      </p>
    </div>
  );
}
function LoadingState() {
  return (
    <div className="space-y-4 animate-pulse">
      <div className="bg-white rounded-2xl p-5 border border-gray-100">
        <div className="h-3 bg-gray-200 rounded w-32 mb-4" />
        <div className="flex justify-between items-end mb-5">
          <div>
            <div className="h-14 bg-gray-200 rounded w-28 mb-2" />
            <div className="h-3 bg-gray-200 rounded w-20" />
          </div>
          <div className="h-12 w-12 bg-gray-200 rounded-full" />
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[1, 2, 3].map((i) => <div key={i} className="bg-gray-100 rounded-xl h-16" />)}
        </div>
      </div>
      <div className="bg-white rounded-2xl p-5 border border-gray-100">
        <div className="h-3 bg-gray-200 rounded w-40 mb-4" />
        <div className="h-20 bg-gray-100 rounded-xl" />
      </div>
    </div>
  );
}

export default LoadingState
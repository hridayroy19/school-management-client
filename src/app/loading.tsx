const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-2xl text-white font-semibold">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;

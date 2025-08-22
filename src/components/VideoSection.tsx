const VideoSection = () => {
  return (
    <div 
      className="relative z-10 mb-[-105px] top-[-75px] w-[800px] h-[450px] max-md:w-[355px] max-md:h-[200px]"
      style={{
        borderRadius: "32px",
        boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.1)",
        border: "none",
        opacity: 1,
        backgroundImage: `url('https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=450&fit=crop')`,
        backgroundRepeat: "repeat"
      }}
    >
      <div className="w-full h-full flex items-center justify-center bg-black/20 rounded-[32px]">
        <button className="bg-red-600 hover:bg-red-700 text-white rounded-full w-20 h-20 flex items-center justify-center shadow-lg">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M10 8l12 8-12 8V8z" fill="currentColor"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default VideoSection;
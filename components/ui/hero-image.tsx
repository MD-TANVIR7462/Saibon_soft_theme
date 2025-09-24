export const HeroImage = () => {
  return (
    <div className="relative h-full w-full">
      <div className="relative h-[600px] w-full overflow-hidden rounded-2xl">
        <img
          src="images/banner.jpg"
          alt="Modern software development"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-500/20 " />
        
        {/* Floating Elements */}
        <div className="absolute -right-4 top-10 h-20 w-20 rounded-xl bg-blue-500/30 backdrop-blur-md" />
        <div className="absolute bottom-10 right-10 h-16 w-16 rounded-full bg-blue-500/30 backdrop-blur-md" />
        <div className="absolute left-10 top-20 h-24 w-24 rounded-full bg-indigo-500/20 backdrop-blur-md" />
      </div>
    </div>
  );
};
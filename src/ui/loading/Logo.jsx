import "./Loading.scss";

const Logo = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen p-5">
      
      <div className="shadow-xl shadow-orange-500 rounded-lg p-6 bg-white dark:bg-gray-800">
        <div className="flex items-center justify-center">
          <div className="animate-charcter text-4xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-red-500">
            TM BRANDING
          </div>
        </div>
      </div>


    </div>
  );
};

export default Logo;

export const Nav = () => {
  return (
    <div className="w-full h-20 absolute top-0 left-0 z-10">
      <div className="flex justify-between items-center h-full px-10">
        {/* Logo */}
        <div className="w-20 h-full">
          <img className="w-full h-full object-cover rounded-full" src="src/Img/logo.jpg" alt="Logo" />
        </div>
        
        <div className="border-2 border-black px-6 py-2 rounded-lg text-lg font-semibold">
          299-xxx-xxxx
        </div>
      </div>
    </div>
  );
};

export default Nav;

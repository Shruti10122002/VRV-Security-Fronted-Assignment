const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-blue-400 text-white px-3 sm:px-6 py-2 sm:py-4 flex flex-wrap sm:flex-nowrap justify-between items-center h-auto sm:h-14 z-10">
      <h1 className="text-base sm:text-xl font-bold font-serif text-center sm:text-left">
        RBAC Dashboard
      </h1>
      <div className="flex flex-wrap justify-center sm:justify-end mt-2 sm:mt-0 space-y-2 sm:space-y-0 space-x-0 sm:space-x-4">
        <button className="bg-white text-blue-500 text-sm sm:text-base px-2 py-1 sm:px-4 sm:py-2 rounded w-full sm:w-auto">
          Login
        </button>
        <button className="bg-red-500 text-white text-sm sm:text-base px-2 py-1 sm:px-4 sm:py-2 rounded w-full sm:w-auto">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

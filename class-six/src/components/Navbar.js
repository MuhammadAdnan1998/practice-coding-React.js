function Navbar() {
  return (
    <div className="bg-black text-white">
            <div className="container mx-auto p-5 flex justify-between items-center">
                {/* Logo Section */}
                <div className="flex items-center">
                    <img 
                        src="https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg" 
                        alt="Logo" 
                        className="h-10 w-10 rounded-full mr-3" 
                    />
                </div>

                {/* Centered Navbar Links */}
                <div className="flex-1 flex justify-center">
                    <div className="flex space-x-6">
                        <p className="hover:text-gray-400 cursor-pointer font-bold text-lg">Home</p>
                        <p className="hover:text-gray-400 cursor-pointer font-bold text-lg">About</p>
                        <p className="hover:text-gray-400 cursor-pointer font-bold text-lg">Services</p>
                        <p className="hover:text-gray-400 cursor-pointer font-bold text-lg">Contact</p>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default Navbar;
const Navbar = () => {
    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="/" className="text-xl font-bold text-blue-600">
                            E-Shop
                        </a>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex space-x-8">
                        <a
                            href="/"
                            className="text-gray-700 hover:text-blue-600 transition duration-200"
                        >
                            Accueil
                        </a>
                        <a
                            href="/shop"
                            className="text-gray-700 hover:text-blue-600 transition duration-200"
                        >
                            Boutique
                        </a>
                        <a
                            href="/contact"
                            className="text-gray-700 hover:text-blue-600 transition duration-200"
                        >
                            Contact
                        </a>
                    </div>

                    {/* Search Bar */}
                    <div className="relative hidden md:block">
                        <input
                            type="text"
                            placeholder="Rechercher..."
                            className="w-64 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                        <button className="absolute top-0 right-0 mt-2 mr-3 text-gray-500 hover:text-blue-600">
                            <i className="fas fa-search"></i>
                        </button>
                    </div>

                    {/* Cart Icon */}
                    <div className="flex items-center space-x-4">
                        <a
                            href="/cart"
                            className="relative text-gray-700 hover:text-blue-600 transition duration-200"
                        >
                            <i className="fas fa-shopping-cart"></i>
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                3
              </span>
                        </a>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden">
                    <button
                        type="button"
                        className="text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

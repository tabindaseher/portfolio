
const Footer = () => {
    return (
      <footer className="bg-purple-500  py-8 ">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Left Section - Social Links */}
            <div className="mb-4 md:mb-0">
           
              <div className=" flex  space-x-6">
                <a href="https://www.linkedin.com/in/tabinda-seher/" target="_blank" rel="noopener noreferrer" className="text-black font-semibold hover:text-gray-300">
                   LinkedIn
                </a>
                <a href="https://github.com/tabindaseher" target="_blank" rel="noopener noreferrer" className="text-black font-semibold hover:text-gray-300">
                 GitHub
                </a>
                <a href="seher616@gmail.com" className="text-black font-semibold hover:text-gray-300">
                   Email
                </a>
              </div>
            </div>
  
            {/* Right Section - Copyright */}
            <div className="text-center md:text-right font-semibold">
              <p className="text-sm">© 2025 Tabinda Seher. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
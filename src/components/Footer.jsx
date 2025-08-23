import React from 'react';
import logo from "../../public/logofooter.svg"

const Footer = () => {
  return (
    <footer 
      className="relative text-white"
      style={{
        backgroundColor: '#000000',
        backgroundImage: 'url(https://immi.homeaffairs.gov.au/AssetLibrary/dist/assets/images/footer-circle-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundBlendMode: 'screen'
      }}
    >
      {/* Top Section */}
      <div className="py-3 sm:py-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        <div className="max-w-[1200px] mx-auto px-3 sm:px-4 lg:px-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 text-xs sm:text-sm">
          <div className="flex items-center gap-2 order-2 sm:order-1">
            <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xs">i</span>
            </div>
            <span>Tell us what you think of this page</span>
          </div>
          <div className="text-gray-200 order-1 sm:order-2">
            Last updated: 6 November 2024
          </div>
          <div className="flex items-center gap-2 order-3">
            <span className="hidden sm:inline">Print this page</span>
            <span className="sm:hidden">Print</span>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
              <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
              <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-8 sm:py-10 lg:py-12" style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
        <div className="max-w-[1200px] mx-auto px-3 sm:px-4 lg:px-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* First Column */}
            <div className="space-y-3 sm:space-y-4 sm:col-span-2 lg:col-span-1">
              <div className="space-y-2 sm:space-y-3">
                <a href="#" className="block text-white hover:text-gray-200 transition-colors font-medium text-sm sm:text-base">
                  HOME AFFAIRS PORTFOLIO
                </a>
                <a href="#" className="block text-white hover:text-gray-200 transition-colors font-medium text-sm sm:text-base">
                  <span className="hidden sm:inline">TRAVEL AND CROSSING THE BORDER</span>
                  <span className="sm:hidden">TRAVEL & BORDER</span>
                </a>
                <a href="#" className="block text-white hover:text-gray-200 transition-colors font-medium text-sm sm:text-base">
                  <span className="hidden sm:inline">IMPORT, EXPORT AND BUYING ONLINE</span>
                  <span className="sm:hidden">IMPORT & EXPORT</span>
                </a>
                <a href="#" className="block text-white hover:text-gray-200 transition-colors font-medium text-sm sm:text-base">
                  NATIONAL SECURITY
                </a>
                <a href="#" className="block text-white hover:text-gray-200 transition-colors font-medium text-sm sm:text-base">
                  EMERGENCY MANAGEMENT
                </a>
                <a href="#" className="block text-white hover:text-gray-200 transition-colors font-medium text-sm sm:text-base">
                  CYBER SECURITY
                </a>
                <a href="#" className="block text-white hover:text-gray-200 transition-colors font-medium text-sm sm:text-base">
                  MULTICULTURAL AFFAIRS
                </a>
              </div>
            </div>

            {/* Second Column */}
            <div className="space-y-3 sm:space-y-4">
              <div className="space-y-2 sm:space-y-3">
                <a href="#" className="block text-gray-200 hover:text-white transition-colors flex items-center gap-1 text-sm sm:text-base">
                  Who we are
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </a>
                <a href="#" className="block text-gray-200 hover:text-white transition-colors flex items-center gap-1 text-sm sm:text-base">
                  Our Ministers
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </a>
                <a href="#" className="block text-gray-200 hover:text-white transition-colors text-sm sm:text-base">
                  Popular questions
                </a>
                <a href="#" className="block text-gray-200 hover:text-white transition-colors text-sm sm:text-base">
                  Glossary
                </a>
                <a href="#" className="block text-gray-200 hover:text-white transition-colors text-sm sm:text-base">
                  Forms
                </a>
                <a href="#" className="block text-gray-200 hover:text-white transition-colors text-sm sm:text-base">
                  Online services
                </a>
                <a href="#" className="block text-gray-200 hover:text-white transition-colors flex items-center gap-1 text-sm sm:text-base">
                  <span className="hidden sm:inline">Compliments, complaints and suggestions</span>
                  <span className="sm:hidden">Feedback</span>
                  <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Third Column - Empty on desktop, hidden on mobile */}
            <div className="hidden lg:block"></div>

            {/* Fourth Column - Logo */}
            <div className="flex justify-center sm:justify-end lg:justify-end sm:col-span-2 lg:col-span-1">
              <div className="text-center sm:text-right">
                <img 
                  src={logo}
                  alt="Australian Government Department of Home Affairs"
                  className="h-24 sm:h-32 lg:h-36 w-auto mx-auto sm:ml-auto"
                />
              </div>
            </div>
          </div>

          {/* Acknowledgment Text */}
          <div className="mt-8 sm:mt-10 lg:mt-12 max-w-4xl">
            <p className="text-gray-200 text-xs sm:text-sm leading-relaxed">
              The Department of Home Affairs acknowledges the Traditional Custodians of Country throughout Australia and their continuing 
              connection to land, sea and community. We pay our respects to all Aboriginal and Torres Strait Islander peoples, their cultures 
              and to their elders past, present and emerging.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }} className="border-t border-white border-opacity-30 py-4 sm:py-6">
        <div className="max-w-[1200px] mx-auto px-3 sm:px-4 lg:px-5">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            {/* Footer Links */}
            <div className="flex flex-wrap gap-3 sm:gap-4 lg:gap-6 text-xs sm:text-sm">
              <a href="#" className="text-gray-200 hover:text-white transition-colors">
                <span className="hidden sm:inline">Conditions of use</span>
                <span className="sm:hidden">Terms</span>
              </a>
              <a href="#" className="text-gray-200 hover:text-white transition-colors">
                <span className="hidden sm:inline">Web privacy statement</span>
                <span className="sm:hidden">Privacy</span>
              </a>
              <a href="#" className="text-gray-200 hover:text-white transition-colors">
                <span className="hidden sm:inline">Accessibility of this website</span>
                <span className="sm:hidden">Accessibility</span>
              </a>
              <a href="#" className="text-gray-200 hover:text-white transition-colors">
                <span className="hidden lg:inline">Freedom of information</span>
                <span className="lg:hidden">FOI</span>
              </a>
              <a href="#" className="text-gray-200 hover:text-white transition-colors">
                <span className="hidden lg:inline">Information publication scheme</span>
                <span className="lg:hidden">IPS</span>
              </a>
            </div>
            
            {/* Back to Top and Social Icons */}
            <div className="flex items-center gap-3 sm:gap-4">
              <button className="text-gray-200 hover:text-white transition-colors flex items-center gap-1 text-xs sm:text-sm">
                <span className="hidden sm:inline">Back to top</span>
                <span className="sm:hidden">Top</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5A.5.5 0 0 0 8 12z"/>
                </svg>
              </button>
              
              <div className="flex gap-2">
                {/* Facebook Icon - Using SVG instead of react-icons */}
                <a 
                  href="#" 
                  className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-600 hover:bg-blue-700 rounded flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                
                {/* LinkedIn Icon - Using SVG instead of react-icons */}
                <a 
                  href="#" 
                  className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-700 hover:bg-blue-800 rounded flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright Row */}
          <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-white border-opacity-30">
            <div className="flex flex-wrap gap-3 sm:gap-4 lg:gap-6 text-xs sm:text-sm text-gray-200">
              <a href="#" className="hover:text-white transition-colors">
                <span className="hidden sm:inline">Copyright and disclaimer</span>
                <span className="sm:hidden">Copyright</span>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Privacy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
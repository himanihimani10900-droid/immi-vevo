import React, { useState } from 'react';

const VEVOContentPage = () => {
  const [activeSubItem, setActiveSubItem] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const subItems = [
    'Visa holders',
    'Organisations'
  ];

  const handleSubItemClick = (item) => {
    setActiveSubItem(item);
    setSidebarOpen(false); // Close sidebar on mobile after selection
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-5 py-4 lg:py-8 mt-4 lg:mt-8">
        {/* Mobile Menu Button */}
        <div className="lg:hidden mb-4">
          <button
            onClick={toggleSidebar}
            className="bg-[#004D8E] text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
            Menu
          </button>
        </div>

        <div className="flex gap-4 lg:gap-8 relative">
          {/* Sidebar - Responsive */}
          <div className={`
            w-full lg:w-80 flex-shrink-0 
            ${sidebarOpen ? 'block' : 'hidden lg:block'}
            ${sidebarOpen ? 'fixed inset-0 z-40 bg-black bg-opacity-50 lg:relative lg:bg-transparent' : ''}
          `}>
            <div className={`
              bg-[#F2F2F2] border border-gray-300 border-b-2 border-b-gray-400 rounded-lg overflow-hidden py-2
              ${sidebarOpen ? 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 max-w-[90vw]' : ''}
            `}>
              {/* Close button for mobile */}
              {sidebarOpen && (
                <div className="lg:hidden flex justify-end p-2">
                  <button
                    onClick={() => setSidebarOpen(false)}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              )}
              
              {/* Sidebar Heading - Not clickable */}
              <div className="px-4 lg:px-6 py-4 lg:py-6 text-sm lg:text-base font-medium text-[#004D8E] border-b border-gray-300 bg-white">
                Check conditions online (VEVO)
              </div>
              
              {/* Sub Items */}
              {subItems.map((item, index) => (
                <div key={index}>
                  <button
                    onClick={() => handleSubItemClick(item)}
                    className={`w-full text-left px-4 lg:px-6 py-4 lg:py-6 text-sm lg:text-base font-medium transition-colors border-b border-gray-300 last:border-b-0 ${
                      activeSubItem === item
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {item}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Page Title */}
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 lg:mb-6">
              Check conditions online (VEVO)
            </h1>

            {/* Content Sections */}
            <div className="space-y-6 lg:space-y-8">
              {/* Introduction */}
              <div>
                <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                  Visa Entitlement Verification Online (VEVO) allows visa holders, employers, education providers and other 
                  organisations to check visa conditions.
                </p>
              </div>

              <div>
                <p className="text-gray-700 text-sm lg:text-base leading-relaxed mb-4">
                  VEVO can only provide current visa information about visa holders whose details are available in our systems. 
                  You may not have a searchable record if you migrated to Australia before 1990 and have not travelled out of 
                  Australia. If this applies to you, you may need to request an{' '}
                  <a href="#" className="text-blue-600 underline hover:text-blue-800 break-words">
                    electronic record of your permanent visa
                  </a>.
                </p>

                <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
                  Some people may have an ImmiCard issued by us. You can check your{' '}
                  <a href="#" className="text-blue-600 underline hover:text-blue-800 break-words">
                    eligibility for an ImmiCard
                  </a>. Government 
                  agencies can then use the ImmiCard to check a visa holder's commencement of identity in Australia.
                </p>
              </div>

              <div>
                <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
                  Australian citizens have unlimited work and study rights in Australia. You cannot use VEVO to confirm Australian 
                  citizenship. You can provide a copy of your Australian citizenship certificate or your Australian passport as proof 
                  of your Australian citizenship.
                </p>
              </div>

              {/* Workplace rights section */}
              <div className="pt-2 lg:pt-4">
                <h2 className="text-xl lg:text-3xl font-bold text-gray-900 mb-3 lg:mb-4">
                  Workplace rights of visa holders
                </h2>
                <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
                  Everyone working in Australia has basic rights and protections in the workplace, including minimum pay and 
                  conditions. Learn more about{' '}
                  <a href="#" className="text-blue-600 underline hover:text-blue-800 break-words">
                    workplace rights in Australia
                  </a>.
                </p>
              </div>

              {/* Visa holders section */}
              <div className="pt-2 lg:pt-4">
                <h2 className="text-xl lg:text-3xl font-bold text-gray-900 mb-3 lg:mb-4">
                  Visa holders
                </h2>
                <p className="text-gray-700 text-sm lg:text-base leading-relaxed mb-4">
                  You can use VEVO to{' '}
                  <a href="#" className="text-blue-600 underline hover:text-blue-800 border-b border-blue-600 pb-1 break-words">
                    check your visa details and conditions
                    <span className="inline-block ml-1">
                      <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor">
                        <path d="M6.5 1.75a.75.75 0 0 0-1.5 0V5H1.75a.75.75 0 0 0 0 1.5H5v3.25a.75.75 0 0 0 1.5 0V6.5h3.25a.75.75 0 0 0 0-1.5H6.5V1.75Z"/>
                      </svg>
                    </span>
                  </a>. Use VEVO to send proof of your visa conditions 
                  to others, for example, employers, landlords or the government of a country you would like to visit.
                </p>
                <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
                  Learn{' '}
                  <a href="#" className="text-blue-600 underline hover:text-blue-800 break-words">
                    how to use VEVO
                  </a>
                </p>
              </div>

              {/* Organisations section */}
              <div className="pt-2 lg:pt-4">
                <h2 className="text-xl lg:text-3xl font-bold text-gray-900 mb-3 lg:mb-4">
                  Organisations
                </h2>
                <p className="text-gray-700 text-sm lg:text-base leading-relaxed mb-4">
                  Registered organisations can{' '}
                  <a href="#" className="text-blue-600 underline hover:text-blue-800 border-b border-blue-600 pb-1 break-words">
                    check someone's visa details
                    <span className="inline-block ml-1">
                      <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor">
                        <path d="M6.5 1.75a.75.75 0 0 0-1.5 0V5H1.75a.75.75 0 0 0 0 1.5H5v3.25a.75.75 0 0 0 1.5 0V6.5h3.25a.75.75 0 0 0 0-1.5H6.5V1.75Z"/>
                      </svg>
                    </span>
                  </a>.
                </p>
                <p className="text-gray-700 text-sm lg:text-base leading-relaxed mb-4">
                  <a href="#" className="text-blue-600 underline hover:text-blue-800 border-b border-blue-600 pb-1 break-words">
                    Register for an ImmiAccount
                    <span className="inline-block ml-1">
                      <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor">
                        <path d="M6.5 1.75a.75.75 0 0 0-1.5 0V5H1.75a.75.75 0 0 0 0 1.5H5v3.25a.75.75 0 0 0 1.5 0V6.5h3.25a.75.75 0 0 0 0-1.5H6.5V1.75Z"/>
                      </svg>
                    </span>
                  </a>{' '}
                  and then use VEVO to see the visa conditions of visa holders who have given you permission.
                </p>
                <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
                  Learn how to use{' '}
                  <a href="#" className="text-blue-600 underline hover:text-blue-800 break-words">
                    VEVO for organisations
                  </a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ask a question button - Responsive positioned */}
      <div className="fixed bottom-4 right-4 lg:bottom-6 lg:right-6 z-50">
        <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-lg shadow-lg font-medium flex items-center gap-2 transition-colors text-sm lg:text-base">
          <span className="hidden sm:inline">Ask a question</span>
          <span className="sm:hidden">Ask</span>
          <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 12a.5.5 0 0 1-.5-.5V8.707l-2.146 2.147a.5.5 0 0 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 8.707V11.5A.5.5 0 0 1 8 12z"/>
            <path d="M8 1a.5.5 0 0 1 .5.5v3.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L7.5 5.293V1.5A.5.5 0 0 1 8 1z"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default VEVOContentPage;
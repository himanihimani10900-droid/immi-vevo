import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import logo from "../../public/logoheader.png"
import flower from "../../public/flowerimage.jpg"

const VisaCheckPage = () => {

  const [activeTab, setActiveTab] = useState('See visa conditions');

  const tabs = [
    'Overview',
    'Check conditions online (VEVO)',
    'See visa conditions',
    'Conditions list'
  ];

 

  const handleTabClick = (tab) => setActiveTab(tab);

  return (
    <div className="h-content-fit font-sans bg-white">
      {/* Header Container */}
      <div className="bg-[#061B36] w-full">
        <div className="flex w-full">
          {/* Menu Button */}
          <button 
            type="button"
            className="bg-[#004D8E] hover:bg-[#003A6B] text-white border-none py-2 px-3 lg:py-3 lg:px-5 text-sm lg:text-base font-bold cursor-pointer flex items-center gap-1 lg:gap-2 flex-shrink-0"
          >
            <svg className="w-[18px] lg:w-[22px] h-[12px] lg:h-[14px] fill-white" viewBox="0 0 22 14">
              <g fill="#FFFFFF">
                <path d="M21.2377,6.468 L0.7623,6.468 C0.4389,6.468 0.1771,6.706 0.1771,7 C0.1771,7.294 0.4389,7.532 0.7623,7.532 L21.2377,7.532 C21.5611,7.532 21.8229,7.294 21.8229,7 C21.8229,6.706 21.5611,6.468 21.2377,6.468 Z"></path>
                <path d="M21.2377,12.787 L0.7623,12.787 C0.4389,12.787 0.1771,13.025 0.1771,13.319 C0.1771,13.613 0.4389,13.851 0.7623,13.851 L21.2377,13.851 C21.5611,13.851 21.8229,13.613 21.8229,13.319 C21.8229,13.025 21.5611,12.787 21.2377,12.787 Z"></path>
                <path d="M0.7623,1.214 L21.2377,1.214 C21.5611,1.214 21.8229,0.976 21.8229,0.682 C21.8229,0.388 21.5611,0.15 21.2377,0.15 L0.7623,0.15 C0.4389,0.15 0.1771,0.388 0.1771,0.682 C0.1771,0.976 0.4389,1.214 0.7623,1.214 Z"></path>
              </g>
            </svg>
            <span className="hidden sm:inline">Menu</span>
          </button>
          {/* Logo and heading */}
          <div className="flex-1 flex items-center justify-between py-2 px-2 sm:px-3 lg:py-[15px] lg:px-5">
            <div className="flex-1 flex items-center justify-center">
              <button className="flex items-center gap-2 lg:gap-4 bg-transparent border-none cursor-pointer">
                <img 
                  src={logo}
                  alt="Australian Government - Department of Home Affairs" 
                  className="h-[30px] sm:h-[35px] lg:h-[50px] w-auto" 
                />
                <span className="text-white text-sm sm:text-base lg:text-xl font-bold hidden sm:block">Immigration and citizenship</span>
              </button>
            </div>
            <div className="flex items-center flex-shrink-0">
              <button 
                type="button" 
                className="bg-[#041527] hover:bg-[#030f1a] text-white cursor-pointer p-2 lg:p-3 rounded border-0" 
                aria-label="search"
              >
                <FiSearch size={16} className="text-white sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex border-t border-[#1a3a5c]">
          <div className="bg-[#004D8E] px-3 lg:px-5 flex items-center gap-1 lg:gap-2 flex-shrink-0">
            <div className="w-[18px] lg:w-[22px] h-[12px] lg:h-[14px]"></div>
            <span className="text-sm lg:text-base font-bold text-transparent hidden sm:inline">Menu</span>
          </div>
          <div className="flex-1 flex items-center justify-between py-2 px-2 sm:px-3 lg:px-5">
            <div className="flex-1"></div>
            <div className="flex items-center flex-shrink-0">
              <ul className="inline-flex list-none m-0 p-0 gap-2 sm:gap-3 lg:gap-0">
                <li className="lg:ml-7">
                  <button className="text-white bg-transparent border-none text-xs lg:text-sm hover:underline cursor-pointer">
                    <span className="hidden sm:inline">ImmiAccount</span>
                    <span className="sm:hidden">Immi</span>
                  </button>
                </li>
                <li className="lg:ml-7">
                  <button className="text-white bg-transparent border-none text-xs lg:text-sm hover:underline cursor-pointer">
                    <span className="hidden lg:inline">Visa Entitlement Verification Online (VEVO)</span>
                    <span className="lg:hidden">VEVO</span>
                  </button>
                </li>
                <li className="lg:ml-7">
                  <button className="text-white bg-transparent border-none text-xs lg:text-sm hover:underline cursor-pointer">
                    <span className="hidden lg:inline">My Tourist Refund Scheme (TRS)</span>
                    <span className="hidden sm:inline lg:hidden">My TRS</span>
                    <span className="sm:hidden">TRS</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="h-[40vh] sm:h-[50vh] lg:h-[60vh] flex flex-col relative">
        <div className="flex-1 relative overflow-hidden">
          {/* Background Image and Diagonal Overlay - Hidden on mobile */}
          <div 
            className="absolute inset-0 w-full h-full hidden lg:block"
            style={{
              backgroundImage: `url(${flower})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          ></div>
          {/* Mobile background - solid color */}
          <div className="absolute inset-0 w-full h-full lg:hidden bg-[#004D8E]"></div>
          
          <div 
            className="absolute inset-0 bg-[#004D8E] hidden lg:block"
            style={{
              clipPath: 'polygon(0 0, 42% 0, 57% 100%, 0 100%)'
            }}
          ></div>
          
          {/* Breadcrumbs */}
          <div className="absolute top-3 sm:top-4 lg:top-6 left-0 right-0 z-30">
            <div className="max-w-[1200px] mx-auto px-3 sm:px-4 lg:px-5">
              <ol className="flex list-none m-0 p-0 text-white">
                <li className="flex items-center">
                  <button className="text-white bg-transparent border-none text-xs lg:text-sm hover:underline cursor-pointer">Home</button>
                </li>
                <li className="flex items-center before:content-['>'] before:mx-1 lg:before:mx-2 before:text-white">
                  <button className="text-white bg-transparent border-none text-xs lg:text-sm hover:underline cursor-pointer">Visas</button>
                </li>
                <li className="flex items-center before:content-['>'] before:mx-1 lg:before:mx-2 before:text-white text-xs lg:text-sm">
                  <span className="hidden sm:inline">When you have a visa</span>
                  <span className="sm:hidden">Visa</span>
                </li>
              </ol>
            </div>
          </div>
          
          {/* Hero Main Content */}
          <div className="relative z-20 h-full flex items-center">
            <div className="max-w-[1200px] mx-auto px-3 sm:px-4 lg:px-5 w-full">
              <div className="max-w-full lg:max-w-[45%]">
                <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold leading-tight m-0">
                  <span className="hidden sm:inline">Check visa details and<br />conditions</span>
                  <span className="sm:hidden">Check visa<br />conditions</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tabs - Responsive layout */}
        <div className="absolute bottom-0 left-0 right-0 z-30">
          <div className="w-full flex justify-end px-3 sm:px-4 lg:pr-5">
            <div className="w-full lg:w-[50%] h-auto lg:h-15 flex flex-col lg:flex-row">
              {tabs.map((tab, index) => (
                <div
                  key={tab}
                  className={`flex-1 ${
                    activeTab === tab
                      ? 'bg-white'
                      : 'bg-[#061B36] hover:bg-[#143B5C]'
                  } ${index > 0 ? 'border-t lg:border-t-0 lg:border-l border-[#2a5a7f]' : ''}`}
                >
                  <button
                    onClick={() => handleTabClick(tab)}
                    className={`w-full py-3 lg:py-4 px-2 sm:px-4 lg:px-6 text-center text-xs lg:text-sm font-medium bg-transparent border-none transition-colors cursor-pointer ${
                      activeTab === tab
                        ? 'text-[#004D8E]'
                        : 'text-white hover:text-gray-200'
                    }`}
                  >
                    <span className="hidden sm:inline">{tab}</span>
                    <span className="sm:hidden">
                      {tab === 'Overview' && 'Info'}
                      {tab === 'Check conditions online (VEVO)' && 'VEVO'}
                      {tab === 'See visa conditions' && 'Conditions'}
                      {tab === 'Conditions list' && 'List'}
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

   
    </div>
  );
};

export default VisaCheckPage;
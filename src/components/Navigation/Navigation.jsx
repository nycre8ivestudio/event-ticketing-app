import React, { useState, Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { ChevronDown, Check, Settings2, Search } from 'lucide-react';

const sortOptions = [
  { id: 0, name: 'Sort by' },
  { id: 1, name: 'Popular' },
  { id: 2, name: 'Newest' },
  { id: 3, name: 'Following' },
  { id: 4, name: 'Trending' }
];

const Navigation = () => {
  const [selectedSort, setSelectedSort] = useState(sortOptions[0]);
  const [activeTab, setActiveTab] = useState('Discover');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'Discover',
    'Music',
    'Food & Drinks',
    'Travel',
    'Fashion',
    'Art',
    'Science & Tech',
    'Movies & Cinema',
    'Outdoor',
    'Fashion & Beauty'
  ];

  return (
    <div className="navigation-section max-w-7xl mx-auto px-4 mb-8">
      <div className="flex items-center justify-between border-b border-gray-200">
        <div className="flex items-center space-x-8 flex-1 min-w-0">
          {/* Sort Combobox */}
          <Listbox value={selectedSort} onChange={setSelectedSort}>
            <div className="relative">
              <Listbox.Button className="flex items-center space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-gray-700 bg-sea-green-50 rounded-md hover:bg-sea-green-100 transition-colors min-w-[100px] sm:min-w-[120px] border border-gray-200">
                <Settings2 className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500" />
                <span>{selectedSort.name}</span>
                <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
              </Listbox.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Listbox.Options className="absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {sortOptions.slice(1).map((option) => (
                    <Listbox.Option
                      key={option.id}
                      value={option}
                      className={({ active }) =>
                        `${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}
                        cursor-pointer select-none relative py-2 px-3 sm:px-4 text-xs sm:text-sm`
                      }
                    >
                      {({ selected }) => (
                        <div className="flex items-center justify-between">
                          <span className={`${selected ? 'font-medium' : 'font-normal'} block truncate`}>
                            {option.name}
                          </span>
                          {selected && (
                            <Check className="w-3 h-3 sm:w-4 sm:h-4 text-sea-green-600 ml-2" />
                          )}
                        </div>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>

          {/* Tabs */}
          <nav className="flex-1 min-w-0">
            <div className="flex space-x-8 overflow-x-auto hide-scrollbar">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`px-1 py-4 text-sm font-medium transition-colors whitespace-nowrap flex-shrink-0
                    ${activeTab === category 
                      ? 'text-gray-900 border-b-2 border-gray-900' 
                      : 'text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </nav>
        </div>

        {/* Search Bar */}
        <div className="relative hidden md:flex items-center ml-8">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search events..."
            className="block w-full pl-10 pr-4 py-1.5 text-sm border border-gray-200 rounded-md bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sea-green-500 focus:border-transparent"
          />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
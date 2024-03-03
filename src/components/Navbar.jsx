import React, {Fragment} from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

function Navbar() {

const navitems = [
    {
        title: 'Home',
        url: '/'
    },
    {
        title: 'About',
        url: '#about'
    },
    {
        title: 'Skills',
        url: '#skills'
    },
    {
        title: 'Projects',
        url: '#projects'
    },
    {
        title: 'Blog',
        url: '#blog'
    },
    {
        title: 'Contact',
        url: '#contact'
    }   
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <div className='w-full h-auto text-ruddy_blue-800 uppercase font-poppins flex justify-between items-center bg-rich_black-100 top-0 sticky'>
        <Disclosure as="nav" className="bg-rich_black-100">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-end">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                 
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navitems.map((item) => (
                        <a key={item.title}
                        href={item.url}
                        className='text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium'
                        >
                            {item.title}
                        </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                

               
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-2 px-2 pb-3 pt-2 flex flex-col">
            {navitems.map((item) => (
                        <a key={item.title}
                        href={item.url}
                        className='text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium'
                        >
                            {item.title}
                        </a>
                    ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
        
    </div>
  )
}

export default Navbar
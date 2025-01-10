import { Disclosure} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import name_logo from '../../public/image/Rishabhname.png'
import profile_logo from '../image/logo/Logo-web-R.jpg'

const navigation = [
  // { name: 'Home', href: '/home' },
  { name: 'About', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact'},
  { name: 'Blogs', href: '/blogs'},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure as="nav" className="relative w-auto animate-in slide-in-from-top-24 duration-700 font-Lobster">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-zinc-900 hover:bg-yellow-500 hover:text-zinc-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-zinc-900">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center  justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center sm:mr-2  lg:mr-80">
                  <a href="/">
                  <img
                    className="h-8 w-auto"
                    src={name_logo}
                    alt="Rishabh Signature"
                  /></a>
                </div>
                <div className=" hidden sm:ml-6 sm:block">
                  <div className="bg-white  shadow-sm shadow-neutral-900 px-8 py-2 rounded-full  flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className= {'hover:text-fuchsia-700 duration-200  text-base  text-neutral-800 filter drop-shadow-xl' }
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                      <img
                        className="h-10 w-10 object-cover object-top rounded-full"
                        src={profile_logo}
                        alt=""
                      />
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

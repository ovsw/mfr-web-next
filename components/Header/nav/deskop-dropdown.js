import { Fragment } from "react"
import { Popover, Transition } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/solid"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const DesktopDropdown = ({ title, items }) => {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={classNames(
              open ? "text-gray-700" : "text-gray-900",
              "group bg-white rounded-md inline-flex items-center text-base font-serif hover:text-gray-900 focus:outline focus:outline-offset-8 focus:outline-gray-500"
            )}
          >
            <span>{title}</span>
            <ChevronDownIcon
              className={classNames(
                open ? "text-gray-600" : "text-gray-400",
                "ml-2 h-5 w-5 group-hover:text-gray-500"
              )}
              aria-hidden="true"
            />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                  {items.map(item => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                      <div
                        className="
                              flex-shrink-0 flex items-center justify-center 
                              h-10 w-10 
                              rounded-md 
                              bg-gradient-to-r from-primary to-green-800
                              text-white sm:h-12 sm:w-12"
                      >
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div className="ml-4">
                        <p className="text-base font-bold font-serif text-gray-600">
                          {item.name}
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          {item.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}

export default DesktopDropdown

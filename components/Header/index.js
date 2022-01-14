import { Fragment } from "react"
import { Popover, Transition } from "@headlessui/react"
import {
  AnnotationIcon,
  ChatAlt2Icon,
  ChatAltIcon,
  DocumentReportIcon,
  HeartIcon,
  InboxIcon,
  MenuIcon,
  PencilAltIcon,
  QuestionMarkCircleIcon,
  ReplyIcon,
  SparklesIcon,
  TrashIcon,
  UsersIcon,
  XIcon,
} from "@heroicons/react/outline"
import Link from "next/link"
import Image from "next/image"

import DesktopDropdown from "./nav/deskop-dropdown"

import DesktopLogo from "../../public/images/mariannas-fundraiser-logo-2021-transparent.png"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const Header = ({ props }) => {
  return (
    <header>
      <Popover className="relative bg-white">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-4 md:py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
          {/* LOGO */}
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <a className="w-40 pt-2 md:pt-0 md:h-10 relative">
                <span className="sr-only">Workflow</span>
                <Image
                  className=""
                  src={DesktopLogo}
                  alt="Marianna's Fundraisers Logo"
                  fit="fit"
                />
              </a>
            </Link>
          </div>
          {/* LOGO END */}

          {/* MOBILE TRIGGER */}
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          {/* END MOBILE TRIGGER */}

          {/* DESKTOP NAV */}
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <DesktopDropdown title="Fundraisers" items={fundraisers} />

            <Link href="/menu">
              <a className="text-base  text-gray-800 font-serif pt-[1px] hover:text-gray-800">
                Menu
              </a>
            </Link>

            <DesktopDropdown title="About Us" items={aboutUs} />
            <DesktopDropdown title="Selling Tools" items={tools} />

            <a
              href="#"
              className="text-base  text-gray-800 font-serif pt-[1px] hover:text-gray-800"
            >
              Contact Us
            </a>
          </Popover.Group>

          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            {/* <a
              href="#"
              className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Sign in
            </a> */}
            <a
              href="#"
              className="
              ml-8 whitespace-nowrap 
              inline-flex items-center justify-center 
              btn btn-outlined-accent
              btn-small
              "
            >
              Book a Free Tasting
            </a>
          </div>
        </div>
        {/* END DESKTOP NAV */}

        {/* MOBILE MENU  */}
        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              {/* MOBILE MENU MAIN */}
              <div className="pt-5 pb-6 px-5">
                {/* MOBILE MENU TOP */}
                <div className="flex items-center justify-between">
                  <Link href="/">
                    <a className="w-24">
                      <Image
                        src={DesktopLogo}
                        alt="Marianna's Fundraisers Logo"
                      />
                    </a>
                  </Link>

                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                {/*END MOBILE MENU TOP*/}

                {/* fundraisers NAV ITEM SUBITEMS ONLY */}
                <div className="mt-6">
                  <nav className="grid grid-cols-1 gap-7">
                    {fundraisers.map(item => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-red-600 to-accent text-white">
                          <item.icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <div className="ml-4 text-base font-medium text-gray-900">
                          {item.name}
                        </div>
                      </a>
                    ))}
                  </nav>
                </div>
                {/* SOLUTIONS NAV ITEM SUBITEMS ONLY */}
              </div>
              {/* END MOBILE MENU MAIN */}

              {/* MOBILE MENU EXTRA ITEMS */}
              <div className="py-6 px-5">
                {/* EXTRA ITEMS MAIN */}
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="#"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Pricing
                  </a>
                  <a
                    href="#"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Partners
                  </a>
                  <a
                    href="#"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Company
                  </a>
                </div>
                {/* END EXTRA ITEMS MAIN */}

                {/* EXTRA ITEMS BUTTONS  */}
                <div className="mt-6">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center bg-gradient-to-r from-accent to-accent bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-red-700 hover:to-red-700"
                  >
                    Sign up
                  </a>
                  <p className="mt-6 text-center text-base font-medium text-gray-500">
                    Existing customer?
                    <a href="#" className="text-gray-900">
                      Sign in
                    </a>
                  </p>
                </div>
                {/* END EXTRA ITEMS BUTTONS  */}
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>
  )
}

export default Header

const fundraisers = [
  {
    name: "How it Works",
    description:
      "A full rundown of the process, from first contact to delivery.",
    href: "#",
    icon: InboxIcon,
  },
  {
    name: "Pricing Info",
    description:
      "Our pricing structure and ways to get a quote for your fundraiser.",
    href: "#",
    icon: AnnotationIcon,
  },
  {
    name: "Benefits",
    description: "Why Marianna's truly is 'The Fundraiser that Sells Itself'.",
    href: "#",
    icon: ChatAlt2Icon,
  },
  {
    name: "Fundraiser Resources",
    description: "Guides and Info on how to runn a succesful fundraiser.",
    href: "#",
    icon: QuestionMarkCircleIcon,
  },
  {
    name: "Get Assistance",
    description:
      "Have a question? Need help with your fundraiser? We're one phone call away!",
    href: "#",
    icon: QuestionMarkCircleIcon,
  },
  {
    name: "Schedule Free a Tasting",
    description:
      "Sample all our famous hoagies and delicios pizzas, and get a personal consultation from our experts.",
    href: "#",
    icon: QuestionMarkCircleIcon,
  },
]

const aboutUs = [
  {
    name: "Fresh & Clean Obsessed",
    description:
      "We believe in only offering food we love to eat ourselves. Learn more about our philosophy.",
    href: "#",
    icon: InboxIcon,
  },
  {
    name: "Hoagie Heroes",
    description:
      "We believe in empowering people to make a difference for the causes they believe in. Everyone can be a Hoagie Hero!",
    href: "#",
    icon: AnnotationIcon,
  },
  {
    name: "How it's Made",
    description: "A look behind the scenes at how the Famous Hoagies are made.",
    href: "#",
    icon: ChatAlt2Icon,
  },
  {
    name: "Our Story and Promise",
    description:
      "Marianna's is now over 40 years old! Find out how it all began, and why we do what we do.",
    href: "#",
    icon: QuestionMarkCircleIcon,
  },
  {
    name: "News & Events",
    description:
      "Marianna's Blog offers guides, useful tips and news about our events, promotions and special offers.",
    href: "#",
    icon: QuestionMarkCircleIcon,
  },
  {
    name: "Testimonials",
    description: "Hear from the Hoagie Heroes.",
    href: "#",
    icon: QuestionMarkCircleIcon,
  },
]

const tools = [
  {
    name: "10 Steps to Success",
    description:
      "We believe in only offering food we love to eat ourselves. Learn more about our philosophy.",
    href: "#",
    icon: InboxIcon,
  },
  {
    name: "Documents and Forms",
    description:
      "Everythging you need in terms of paperwork to run a sucessful fundraiser with Marianna's",
    href: "#",
    icon: AnnotationIcon,
  },
  {
    name: "Advertising Templates",
    description:
      "Adverting posters, product labels, social media images to help you advertise and run your fundraiser.",
    href: "#",
    icon: ChatAlt2Icon,
  },
  {
    name: "Fundraiser FAQs",
    description:
      "Frequent questions and just as many answers - a trove of useful info about running a successful fundraiser.",
    href: "#",
    icon: QuestionMarkCircleIcon,
  },
  {
    name: "Get Support",
    description: "We're always one phone call away!",
    href: "#",
    icon: QuestionMarkCircleIcon,
  },
  {
    name: "Submit Your Order",
    description:
      "Us this to submit your order to us, once your're done selling.",
    href: "#",
    icon: QuestionMarkCircleIcon,
  },
]

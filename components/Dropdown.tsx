import { Menu } from "@headlessui/react";
import { motion, spring } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Dropdown() {
  const router = useRouter();
  return (
    <div className="relative z-30">
      <Menu>
        {({ open }) => (
          <>
            <Menu.Button className="m-3 rounded-2xl  bg-zinc-200/60 p-2 text-orange-500 shadow-md shadow-zinc-900/90 transition duration-300 ease-in-out hover:scale-125 hover:bg-zinc-900 hover:text-orange-200 hover:shadow-sm hover:shadow-zinc-900 focus:scale-95 focus:outline-none">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="h-6 w-6">
             <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
           </svg>
           
            </Menu.Button>

            {open && (
              <Menu.Items
                as={motion.div}
                static
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 30, restDelta: 0.001, restSpeed: 0.001, mass:1.2 }}
                
                className="absolute right-0 z-20 rounded-xl border-zinc-100 bg-gradient-to-b from-stone-200/90 via-orange-100 to-stone-100/90 font-semibold text-zinc-800 shadow-md shadow-zinc-900/90 drop-shadow-lg focus:outline-none"
              >
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      className={`${
                        active
                          ? "rounded-t-xl border bg-orange-500 text-zinc-50 transition-colors duration-300"
                          : ""
                      } block whitespace-nowrap px-5 py-3`}
                      href="#"
                    >
                      Menu
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      className={`${
                        active
                          ? "border bg-orange-500 text-zinc-50 transition-colors duration-300"
                          : ""
                      } block whitespace-nowrap px-5 py-3`}
                      href="#"
                    >
                      Catering
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      className={`${
                        active
                          ? "border bg-orange-500 text-zinc-50 transition-colors duration-300"
                          : ""
                      } block whitespace-nowrap px-5 py-3`}
                      href="#"
                    >
                      Private Events
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <div
                      className={`${
                        active
                          ? "border bg-orange-500 text-zinc-50 transition-colors duration-300"
                          : ""
                      } block whitespace-nowrap px-5 py-3`}
                      onClick={() => router.push('/#gallery')}
                    >
                      Gallery
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      className={`${
                        active
                          ? "rounded-b-xl border bg-orange-500 text-zinc-50 transition-colors duration-200"
                          : ""
                      } block whitespace-nowrap px-5 py-3`}
                      href="/contact"
                    >
                      Contact Us
                    </Link>
                  )}
                </Menu.Item>
              </Menu.Items>
            )}
          </>
        )}
      </Menu>
    </div>
  );
}

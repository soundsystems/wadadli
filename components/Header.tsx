/* eslint-disable react/no-children-prop */
import { TruckIcon } from "@heroicons/react/24/solid";
import { motion as m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Dropdown from "../components/Dropdown";
import logo from "../public/logo.webp";
import {useRouter} from "next/navigation";

type Props = {};


export default function Header({}: Props) {
  const router = useRouter();
  return (
    <header className="sticky top-0 z-20 mx-auto flex max-w-screen-2xl items-center justify-between rounded-b-xl bg-gradient-to-t from-orange-200/10 to-orange-100/40">
     {/** Logo */}
      <m.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.45,
        }}
        className="flex flex-row"
      >
          <Image
            src={logo}
            height={88}
            width={88}
            object-fit="cover"
            alt="Wadadli W Logo"
            onClick={() => router.push('/#hero')}
            className=" relative mx-auto h-28 w-28 rounded-full transition duration-200 hover:scale-125"
          />
      </m.div>
    {/** Order Button & Nav Menu */}
      <m.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.45,
        }}
        className="inline-flex cursor-pointer place-items-baseline transition duration-200 hover:scale-110"
      >
        <div className="group relative">
          <Link href="https://www.doordash.com/store/wadadli-jerk-brooklyn-24265924/">
            <button className="relative flex items-center divide-x divide-orange-400 rounded-xl bg-zinc-200/60 px-3 py-2 leading-none shadow-lg shadow-zinc-900/90 transition duration-300 ease-in-out hover:bg-zinc-900 hover:shadow-md hover:shadow-zinc-900 lg:rounded-2xl">
              <span className="pr-2">
                <TruckIcon className="h-6 w-6 text-orange-500 transition-colors duration-300 ease-in-out group-hover:text-orange-200" />
              </span>
              <span className="pl-4 font-semibold uppercase text-orange-500 transition-colors group-hover:text-orange-100 lg:text-lg">
                &larr; Order Delivery
              </span>
            </button>
          </Link>
        </div>
        <Dropdown />
      </m.div>
    </header>
  );
}

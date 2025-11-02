import Link from "next/link"
export default function LinkMenu({props, address}: {props: string, address: string}) {
  return (
    <Link href={address} className="w-8/12 h-10 flex justify-center items-center bg-gray-700 text-white border-2 border-gray-300 hover:bg-gray-900 transition-all duration-100 ease-in-out cursor-pointer">
        <li className="">{props}</li>
    </Link>
    
  )};
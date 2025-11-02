import Image from "next/image"

export default function AsideRight(){
    return(
        <aside className="w-1/3 p-4 sticky top-0 h-screen overflow-y-auto flex flex-col items-center">
          <figure>
            <Image src="/facewow.jpg" alt="Profile Picture" width={150} height={150} className="rounded-full mb-4 bg-white">

            </Image>
          </figure>
          <table className="w-10/12 border-2 p-6 border-gray-300 space-y-8">
            <tbody className="w-full">
                <tr className="w-full">
                    <td className="text-center font-bold pr-2">Name:</td>
                    <td className="text-center pr-2">Roger Fernandes</td>
                </tr>
            </tbody>
            <tbody className="w-full">
                <tr>
                    <td className="text-center font-bold pr-2">Age:</td>
                    <td className="text-center pr-2">33 years old</td>
                </tr>
            </tbody>
          </table>
        </aside>
    )
}
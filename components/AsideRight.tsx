import Image from "next/image"

export default function AsideRight(){
    return(
        <aside className="w-1/3 p-4 sticky top-0 h-screen overflow-y-auto flex flex-col items-center">
          <figure>
            <Image src="/facewow.jpg" alt="Profile Picture" width={150} height={150} className="rounded-full mb-4 bg-white">

            </Image>
          </figure>
        <table className="w-10/12 border-separate border-spacing-y-4 bg-gray-700 text-white border-2 border-gray-300">
            <tbody>
                <tr className="flex">
                    <td className="font-bold px-2">Name:</td>
                    <td>Roger Fernandes</td>
                </tr>
            </tbody>
            <tbody>
                <tr className="flex">
                    <td className="font-bold px-2">Age:</td>
                    <td>33 years old</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td className="font-bold px-2">Education:</td>
                </tr>
            </tbody>
            <tbody>
                 <tr>
                    <td className="px-2">Computer Science 2012-2016 <i>UNIP</i></td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td className="px-2">Software engineering 2025-2029 <i>GranFaculdade</i></td>
                </tr>
            </tbody>
            <tbody>
                <tr className="flex">
                    <td className="font-bold px-2">Location:</td>
                    <td>Promissão/SP Brazil</td>
                </tr>
            </tbody>
        </table>

        </aside>
    )
}
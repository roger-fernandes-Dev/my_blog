import Image from "next/image"

export default function AsideRight(){
    return(
        <aside className="w-1/3 p-4 sticky top-0 h-screen overflow-y-auto flex flex-col items-center">
          <figure>
            <Image src="/facewow.jpg" alt="Profile Picture" width={150} height={150} className="rounded-full mb-4 bg-white">

            </Image>
          </figure>
          <table>
            <tbody>
                <tr>
                    <td className="font-bold pr-2">Name:</td>
                    <td>Roger Fernandes</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td className="font-bold pr-2">Age:</td>
                    <td>33 years old</td>
                </tr>
            </tbody>
          </table>
        </aside>
    )
}
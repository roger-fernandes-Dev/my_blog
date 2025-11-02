import LinkMenu from "./LinkMenu"

export default function AsideLeft() {
    return(

        <aside className="w-1/3 p-4 sticky top-0 h-screen overflow-y-auto flex flex-col items-center">
            <p className="text-2xl font-bold">Explorer</p>
                <ul className="w-full flex flex-col items-center space-y-4 mt-4">
                    <LinkMenu props="Home" address="/"/>
                    <LinkMenu props="Blog" address="/blog"/>
                    <LinkMenu props="Projects" address="/projects"/>
                    <LinkMenu props="Curriculum" address="/curriculum"/>
                </ul>
        </aside>

    )}
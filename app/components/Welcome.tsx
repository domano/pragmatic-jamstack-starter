import add from "../../lib/add"

export default function Welcome() {
    console.log(add(1,1)) // This is an example for shared code use.
    return <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="text-center">
                <h1 className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">Welcome
                    to your own Jamstack.</h1>
                <h2 className="max-w-xl mt-5 mx-auto text-xl text-gray-500">Deploy on your own server, avoid SaaS
                    pricing. </h2>
                <h2 className="max-w-xl mt-5 mx-auto text-xl text-gray-500">Fast development without loss of control.
                    Next.js, strapi, tailwind.</h2>
            </div>
        </div>
    </div>;
}
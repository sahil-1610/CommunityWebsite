export default function Features() {
    return (
        <section className="m-4 md:m-8 bg-gray-100 dark:text-gray-800 py-10 rounded">
            <div className="container mx-auto p-4 my-6 space-y-4 text-center">
                <h2 className="text-5xl font-bold">Built to empower every developer</h2>
                <p className="dark:text-gray-600">Libero minima optio qui</p>
            </div>
            <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col items-center p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                         className="w-8 h-8 dark:text-violet-600">
                        <path fillRule="evenodd"
                              d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                              clipRule="evenodd"></path>
                    </svg>
                    <h3 className="my-3 text-3xl font-semibold">Eat</h3>
                    <div className="space-y-1 leading-tight text-center">
                        <p>Similique quas ea veniam</p>
                        <p>Tempore quasi porro</p>
                        <p>Blanditiis aut mollitia ex</p>
                    </div>
                </div>
                <div className="flex flex-col items-center p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                         className="w-8 h-8 dark:text-violet-600">
                        <path fillRule="evenodd"
                              d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                              clipRule="evenodd"></path>
                    </svg>
                    <h3 className="my-3 text-3xl font-semibold">Code</h3>
                    <div className="space-y-1 leading-tight text-center">
                        <p>Similique quas ea veniam</p>
                        <p>Tempore quasi porro</p>
                        <p>Blanditiis aut mollitia ex</p>
                    </div>
                </div>
                <div className="flex flex-col items-center p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                         className="w-8 h-8 dark:text-violet-600">
                        <path fillRule="evenodd"
                              d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                              clipRule="evenodd"></path>
                    </svg>
                    <h3 className="my-3 text-3xl font-semibold">Community</h3>
                    <div className="space-y-1 leading-tight text-center">
                        <p>Similique quas ea veniam</p>
                        <p>Tempore quasi porro</p>
                        <p>Blanditiis aut mollitia ex</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
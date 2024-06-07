export default function Faq() {
    return (
        <section className="dark:bg-gray-100 dark:text-gray-800 my-10">
            <div className="container flex flex-col justify-center px-4 py-10 mx-auto md:p-8">
                <div className="text-center">
                    <h2 className="text-2xl font-bold sm:text-4xl">Frequently Asked Questions</h2>
                    <p className="mt-4 mb-8 dark:text-gray-600">Sagittis tempor donec id vestibulum viverra. Neque
                        condimentum primis orci at lacus amet bibendum.</p>
                </div>
                <div className="space-y-4">
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Ex orci
                            laoreet egestas sapien magna egestas scelerisque?
                        </summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Lectus iaculis orci metus vitae
                            ligula dictum per. Nisl per nullam taciti at adipiscing est. </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Lorem at
                            arcu rutrum viverra metus sapien venenatis lobortis odio?
                        </summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Tincidunt ut hac condimentum rhoncus
                            phasellus nostra. Magna porttitor egestas tincidunt neque vehicula potenti. </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Eleifend
                            feugiat sollicitudin laoreet adipiscing bibendum suscipit erat?
                        </summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Justo libero tellus integer
                            tincidunt justo semper consequat venenatis aliquet imperdiet. Ultricies urna proin fusce
                            nulla pretium sodales vel magna et massa euismod vulputate sed. </p>
                    </details>
                </div>
            </div>
        </section>
    )
}
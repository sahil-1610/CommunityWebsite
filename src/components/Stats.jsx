export default function Stats() {
    return (
        <section className="p-6 dark:bg-gray-100 dark:text-gray-800">
            <div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3">
                <div className="flex flex-col justify-start m-2 lg:m-6 gap-2">
                    <p className="text-4xl font-bold leading-none lg:text-6xl">50+</p>
                    <p className="text-sm sm:text-base">Cities</p>
                </div>
                <div className="flex flex-col justify-start m-2 lg:m-6 gap-2">
                    <p className="text-4xl font-bold leading-none lg:text-6xl">89K</p>
                    <p className="text-sm sm:text-base">Engagements</p>
                </div>
                <div className="flex flex-col justify-start m-2 lg:m-6 gap-2">
                    <p className="text-4xl font-bold leading-none lg:text-6xl">3</p>
                    <p className="text-sm sm:text-base">Events</p>
                </div>
            </div>
        </section>
    )
}
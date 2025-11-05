import FeatureCardSkeleton from "@/src/components/budgets/FeatureCardSkeleton"


const Loading = () => {
    return (
        <div className='w-full'>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 ">
                <div className="h-8 w-48 bg-patina-700/40 rounded animate-pulse mb-2" />

                <div className="text-center inline-block px-6 py-3 rounded-xl font-semibold text-white/40 bg-gradient-to-r from-patina-600/40 to-patina-700/40 hover:from-patina-700 hover:to-patina-800/40 shadow-md hover:shadow-lg transition-all duration-200 ease-in-out">
                    Loading...
                </div>
            </div>

            <>
                <div className="grid grid-cols-12 gap-6 mt-10">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <FeatureCardSkeleton key={i} />
                    ))}
                </div>

            </>

        </div>
    )
}

export default Loading

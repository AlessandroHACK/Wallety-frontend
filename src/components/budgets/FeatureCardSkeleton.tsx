const FeatureCardSkeleton = () => (
  <div className="relative flex flex-col justify-between border bg-white/5 border-patina-700/30 backdrop-blur-sm 
  rounded-2xl p-5  col-span-12 lg:col-span-3 md:col-span-6 animate-pulse overflow-hidden">

    {/* Menu placeholder */}
    <div className="absolute top-3 right-1 z-10 w-6 h-6 bg-patina-700/30 rounded-full" />

    {/* Header (icon + date) */}
    <div className="flex items-center gap-2 mb-4">
      <div className="w-[30px] h-[30px] rounded-full bg-patina-700/40" />
      <div className="flex flex-col gap-1">
        <div className="w-28 h-3 bg-patina-700/40 rounded" />
        <div className="w-16 h-3 bg-patina-700/30 rounded" />
      </div>
    </div>

    {/* Title */}
    <div className="w-full h-5 bg-patina-700/40 rounded mb-2" />
    <div className="w-4/5 h-5 bg-patina-700/30 rounded mb-4" />

    {/* Amount */}
    <div className="w-24 h-6 bg-emerald-500/30 rounded mb-4" />

    {/* Link placeholder */}
    <div className="flex items-center gap-2">
      <div className="w-20 h-4 bg-patina-700/40 rounded" />
      <div className="w-4 h-4 bg-patina-700/40 rounded-full" />
    </div>
  </div>
)

export default FeatureCardSkeleton

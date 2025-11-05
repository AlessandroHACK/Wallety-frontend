export default function SuccessMessage({children}: {children: React.ReactNode }) {
  return (
    <p className="flex items-start text-center p-3 my-3 text-sm text-patina-500 border border-emerald-300 rounded-lg ">
      {children}
    </p>
  )
}
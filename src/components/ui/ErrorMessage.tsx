
export default function ErrorMessage({children}: {children: React.ReactNode }) {
  return (
    <p className="flex items-start text-center p-3 my-3 text-sm text-red-500 border border-red-300 rounded-lg ">
      {children}
    </p>
  )
}

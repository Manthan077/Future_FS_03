export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-950">
      <div className="relative">
        <div className="w-20 h-20 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-orange-500 font-bold">LF</div>
      </div>
    </div>
  )
}

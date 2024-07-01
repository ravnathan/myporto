function Circles() {
    return (
        <div className="grid grid-cols-6 mix-blend-multiply filter blur-xl opacity-50 relative">
          <div className="w-96 h-96 rounded-full bg-pink-400 mix-blend-multiply animate-bubble animation-delay-4000"></div>
          <div className="w-96 h-96 rounded-full bg-yellow-300 mix-blend-multiply animate-bubble animation-delay-2000"></div>
          <div className="w-96 h-96 rounded-full bg-green-400 mix-blend-multiply animate-bubble animation-delay-1000"></div>
          <div className="w-96 h-96 rounded-full bg-purple-400 mix-blend-multiply animate-bubble animation-delay-500"></div>
          <div className="w-96 h-96 rounded-full bg-cyan-400 mix-blend-multiply animate-bubble animation-delay-6000"></div>
          {/* <div className="w-96 h-96 rounded-full bg-yellow-300 mix-blend-multiply animate-bubble animation-delay-1000"></div> */}
        </div>
    )
}

export default Circles
import React from 'react'

const Profile = () => {
  return (
   <div className="w-screen h-screen bg-gradient-to-b from-[#1a0033] via-[#0c0c5f] to-[#00334d] relative overflow-y-auto flex flex-col items-center p-6 gap-6">

      {/* Blur circles */}
      <div className="fixed w-52 h-52 bg-purple-700 rounded-full blur-3xl top-0 right-10 opacity-50 pointer-events-none"></div>
      <div className="fixed w-52 h-52 bg-cyan-500 rounded-full blur-3xl bottom-20 left-0 opacity-40 pointer-events-none"></div>
      <div className="fixed w-36 h-36 bg-blue-500 rounded-full blur-3xl bottom-0 right-0 opacity-30 pointer-events-none"></div>

    </div>
  )
}

export default Profile
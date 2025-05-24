import React from 'react'

function Kyc() {
    return (
        <div className="w-screen h-screen bg-[#100036] relative overflow-y-auto flex flex-col items-center p-6 gap-6 text-white font-sans">
            {/* Blur elements matching the design */}
            <div
                className="fixed w-[199px] h-[430px] left-[518px] top-[248px] bg-gradient-to-b from-[#A800F7] to-[#4C00AD] blur-[91.4px] transform rotate-180 opacity-70 pointer-events-none"
                style={{
                    background: 'linear-gradient(180deg, #A800F7 7.09%, #4C00AD 96.07%)',
                    filter: 'blur(91.4px)',
                    transform: 'rotate(180deg)'
                }}
            ></div>

            <div
                className="fixed w-[466.48px] h-[276.91px] left-[409px] top-[1357.69px] rounded-full blur-[92.85px] transform rotate-[-166.71deg] opacity-70 pointer-events-none"
                style={{
                    background: 'linear-gradient(180deg, #00F798 0%, #6B37FF 100%)',
                    filter: 'blur(92.85px)',
                    borderRadius: '813px',
                    transform: 'rotate(-166.71deg)'
                }}
            ></div>

            <div
                className="fixed w-[342.25px] h-[198.63px] left-[-160px] top-[428.66px] rounded-full blur-[92.85px] transform rotate-[-11.06deg] opacity-70 pointer-events-none"
                style={{
                    background: 'linear-gradient(180deg, #00F798 0%, #6B37FF 100%)',
                    filter: 'blur(92.85px)',
                    borderRadius: '813px',
                    transform: 'rotate(-11.06deg)'
                }}
            ></div>

            <div
                className="fixed w-[466.48px] h-[276.91px] left-[631px] top-[1000.69px] rounded-full blur-[92.85px] transform rotate-[-166.71deg] opacity-70 pointer-events-none"
                style={{
                    background: 'linear-gradient(180deg, #00F798 0%, #6B37FF 100%)',
                    filter: 'blur(92.85px)',
                    borderRadius: '813px',
                    transform: 'rotate(-166.71deg)'
                }}
            ></div>
        </div>
    )
}

export default Kyc
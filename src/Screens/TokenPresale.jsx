import React from "react";
import group from "../assets/Images/Group 415.png";
import coin from "../assets/Images/coin.png";
import Vector from "../assets/Images/vector.png";
import early from "../assets/Images/early.png";
import community from "../assets/Images/community.png";
import secure from "../assets/Images/secure.png";
import future from "../assets/Images/future.png";
import Footer from "../Footer/Footer";

const TokenPreSale = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#1a0033] via-[#0c0c5f] to-[#00334d] relative overflow-y-auto flex flex-col items-center px-3 pb-20">
      {/* Glowing Background Circles - Smaller for SE */}
      <div className="fixed w-20 h-20 sm:w-52 sm:h-52 bg-purple-700 rounded-full blur-3xl top-0 right-4 sm:right-10 opacity-50 pointer-events-none"></div>
      <div className="fixed w-20 h-20 sm:w-52 sm:h-52 bg-cyan-500 rounded-full blur-3xl bottom-10 sm:bottom-20 left-0 opacity-40 pointer-events-none"></div>
      <div className="fixed w-16 h-16 sm:w-36 sm:h-36 bg-blue-500 rounded-full blur-3xl bottom-0 right-0 opacity-30 pointer-events-none"></div>

      {/* Header */}
      <div className="pt-4 sm:pt-10 text-center z-10">
        <h1 className="text-white text-2xl sm:text-3xl font-bold tracking-wide mt-1">
          Token Pre Sale
        </h1>
      </div>

      {/* Invite Banner */}
      <div className="z-10 w-full flex justify-center pt-3">
        <img
          src={group}
          alt="Invite Banner"
          className="w-full max-w-3xl h-auto rounded-xl"
        />
      </div>

      {/* Earnings Cards - Stack on small screens */}
      <div className="flex flex-row justify-center items-center gap-3 w-full max-w-5xl px-2 sm:px-4 mt-4 sm:mt-6 mx-auto">
        {/* DAIR Card */}
        <div className="w-full max-w-[150px] sm:max-w-sm bg-gradient-to-br from-[#0e153a] to-[#1a1a40] rounded-xl sm:rounded-2xl shadow-lg p-3 sm:p-6 text-white">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2 sm:mb-5">
            <img
              src={coin}
              alt="DAIR"
              className="w-6 h-6 sm:w-[50px] sm:h-[50px]"
            />
            <div className="text-left">
              <p className="text-sm sm:text-lg font-semibold leading-tight">
                DAIR
              </p>
              <p className="text-[10px] sm:text-sm text-gray-300 leading-tight">
                Earnings
              </p>
            </div>
          </div>
          <p className="text-xl sm:text-3xl font-bold tracking-wide text-center">
            $403500.00
          </p>
        </div>

        {/* USDT Card */}
        <div className="w-full max-w-[150px] sm:max-w-sm bg-gradient-to-br from-[#2e004d] to-[#400066] rounded-xl sm:rounded-2xl shadow-lg p-3 sm:p-6 text-white">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2 sm:mb-5">
            <img
              src={Vector}
              alt="USDT"
              className="w-6 h-6 sm:w-[50px] sm:h-[50px]"
            />
            <div className="text-left">
              <p className="text-sm sm:text-lg font-semibold leading-tight">
                USDT
              </p>
              <p className="text-[10px] sm:text-sm text-gray-300 leading-tight">
                Earnings
              </p>
            </div>
          </div>
          <p className="text-xl sm:text-3xl font-bold tracking-wide text-center">
            $404800.00
          </p>
        </div>
      </div>

      {/* Token Presale Card */}
<div className="w-full max-w-[800px] mx-auto mt-6 p-4 sm:p-8 bg-gradient-to-br from-[#0d0d2b] to-[#012d3a] text-white rounded-2xl border border-purple-800 shadow-2xl">
  {/* Title */}
  <h2 className="text-center text-lg sm:text-2xl font-bold mb-6">
    Presale Ending In
  </h2>

  {/* Countdown Timer */}
  <div
    className="flex justify-between items-center text-center py-4 px-3 mb-4 rounded-xl"
    style={{
      borderWidth: "1px",
      borderStyle: "dashed",
      borderColor: "#25375a",
      borderImage:
        "repeating-linear-gradient(to right, #25375a 0, #25375a 8px, transparent 8px, transparent 14px) 1",
    }}
  >
    {["Day", "Hours", "Minutes", "Seconds"].map((label, idx, arr) => (
      <React.Fragment key={label}>
        <div className="flex flex-col items-center px-1 sm:px-2">
          <p className="text-[11px] sm:text-sm text-gray-300">{label}</p>
          <p className="text-[#A855F7] text-lg sm:text-xl font-extrabold">
            {[16, 12, 34, 5][idx]}
          </p>
        </div>
        {idx < arr.length - 1 && (
          <div
            className="h-6 w-px mx-1 sm:mx-2 rounded-full"
            style={{
              background: "linear-gradient(to bottom, #9A00FF, #22004d)",
              opacity: 0.8,
            }}
          ></div>
        )}
      </React.Fragment>
    ))}
  </div>

  {/* Subtext */}
  <p className="text-xs sm:text-sm text-center text-gray-400 mb-5">
    Last chance to buy before major exchange listings
  </p>

  {/* Progress Info */}
  <div className="flex justify-between items-center text-xs sm:text-sm mb-2">
    <p className="text-gray-300">
      DAIR Raised - <span className="text-purple-400 font-semibold">62%</span>
    </p>
    <p className="text-gray-400 font-medium">
      $3,042,00,00 / 10,00,000,00
    </p>
  </div>

  {/* Progress Bar */}
  <div className="w-full h-2 bg-gray-700 rounded-full mb-6 overflow-hidden">
    <div className="h-2 bg-fuchsia-500 rounded-full w-[62%]"></div>
  </div>

  {/* DAIR Rate */}
  <div className="text-center font-semibold mb-6 text-sm sm:text-base">
    <img src={coin} alt="coin" className="inline-block w-5 h-5 mr-1" />
    DAIR = <span className="text-yellow-400 font-bold">$3203</span>
  </div>

  {/* Token Toggle */}
  <div className="flex mb-4 rounded-xl overflow-hidden shadow-inner border border-gray-700">
    <button className="flex-1 bg-[#2d1d5b] py-3 text-white font-semibold flex items-center justify-center gap-2 text-sm">
      <img src={coin} alt="DAIR" className="w-5 h-5" />
      DAIR
    </button>
    <button className="flex-1 bg-[#073047] py-3 text-white font-semibold flex items-center justify-center gap-2 text-sm">
      <img src={Vector} alt="USDT" className="w-5 h-5" />
      USDT
    </button>
  </div>

  {/* Input Fields */}
  <div className="grid grid-cols-2 gap-4 mb-6">
    <div className="bg-[#0d1933] border border-gray-700 rounded-xl py-4 px-3 text-xs text-gray-300">
      <p className="text-[12px] sm:text-sm">
        Pay with DAIR
        <span className="float-right">
          <img src={coin} alt="DAIR" className="inline w-5 h-5" />
        </span>
      </p>
    </div>
    <div className="bg-[#0d1933] border border-gray-700 rounded-xl py-4 px-3 text-xs text-gray-300">
      <p className="text-[12px] sm:text-sm">
        Your receive
        <span className="float-right">
          <img src={Vector} alt="T" className="inline w-5 h-5" />
        </span>
      </p>
    </div>
  </div>

  {/* Connect Wallet Button */}
  <div className="flex justify-center">
    <button className="w-40 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-sm py-2.5 rounded-full shadow-md hover:scale-105 transition">
      Connect Wallet
    </button>
  </div>
</div>


      {/* why buy in presale box */}
<div className="w-full max-w-[800px] mx-auto px-2 py-6 bg-gradient-to-br from-[#0f1120] to-[#0b0d1a] rounded-lg shadow-md border border-[#2e2e42] mt-6">
  <h2 className="text-center text-white text-xl sm:text-2xl font-bold mb-6">
    Why Buy in Presale?
  </h2>

  <div className="grid grid-cols-2 gap-3 sm:gap-4">
    {/* Card 1 */}
    <div className="bg-[#16193a] min-h-[180px] rounded-md p-4 sm:p-5 text-white text-center flex flex-col justify-center border border-[#A800F780]">
      <img src={early} alt="Early Access" className="mx-auto mb-2 w-20 h-20 sm:w-10 sm:h-10" />
      <h3 className="font-semibold text-[13px] sm:text-base mb-1">Early Access</h3>
      <p className="text-[11px] sm:text-sm text-gray-300">
        Grab the lowest price before public launch.
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-[#16193a] min-h-[180px] rounded-md p-4 sm:p-5 text-white text-center flex flex-col justify-center border border-[#A800F780]">
      <img src={community} alt="Community Token" className="mx-auto mb-2 w-20 h-20 sm:w-10 sm:h-10" />
      <h3 className="font-semibold text-[13px] sm:text-base mb-1">Community Token</h3>
      <p className="text-[11px] sm:text-sm text-gray-300">
        Driven by its holders — your vote, your value.
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-[#16193a] min-h-[180px] rounded-md p-4 sm:p-5 text-white text-center flex flex-col justify-center border border-[#A800F780]">
      <img src={secure} alt="Secure Contract" className="mx-auto mb-2 w-20 h-20 sm:w-10 sm:h-10" />
      <h3 className="font-semibold text-[13px] sm:text-base mb-1">Secure Contract</h3>
      <p className="text-[11px] sm:text-sm text-gray-300">
        Fully verified & transparent contract.
      </p>
    </div>

    {/* Card 4 */}
    <div className="bg-[#16193a] min-h-[180px] rounded-md p-4 sm:p-5 text-white text-center flex flex-col justify-center border border-[#A800F780]">
      <img src={future} alt="CEX Listings" className="mx-auto mb-2 w-20 h-20 sm:w-10 sm:h-10" />
      <h3 className="font-semibold text-[13px] sm:text-base mb-1">CEX Listings</h3>
      <p className="text-[11px] sm:text-sm text-gray-300">
        Get in before major exchange listings.
      </p>
    </div>
  </div>
</div>


      {/* image */}
      <div className="w-[800px] max-w-[95%] mx-auto bg-gradient-to-r from-[#240048] to-[#4a007d] rounded-xl px-8 py-1 flex items-center justify-between border border-[#6a1ab9] shadow-lg mt-4 mb-8">
        {/* Text Section */}
        <div className="flex-1 pr-2">
          <h3 className="text-white text-lg font-bold leading-snug">
            Earn 5% <br className="sm:hidden" /> in DAIR!
          </h3>
          <p className="text-[#b855f3] text-sm font-medium mt-1">
            Invite friends and <br /> get rewarded.
          </p>
        </div>

        {/* Image Section */}
        <img src={coin} alt="DAIR Coin" className="w-23 h-23 sm:w-24 sm:h-24" />
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-lg border-t border-white/10">
        <Footer />
      </div>
    </div>
  );
};

export default TokenPreSale;

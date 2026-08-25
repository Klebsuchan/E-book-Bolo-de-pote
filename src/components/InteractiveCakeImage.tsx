import React from "react";
const videoUrl = "/hero-video.mp4";

export default function InteractiveCakeImage() {
  return (
    <div className="relative z-20 flex justify-center items-center w-full h-full">
      {/* Decorative Gold Glow behind the card */}
      <div className="absolute inset-x-0 -inset-y-10 bg-[radial-gradient(circle,rgba(212,175,55,0.2)_0%,transparent_70%)] pointer-events-none z-0"></div>

      <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-[2.5rem] z-10 shadow-[0_30px_60px_rgba(0,0,0,0.6)]">
        <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden border border-white/20 bg-[#111]">
          {/* Video layer */}
          <video
            src={videoUrl}
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            disablePictureInPicture
            className="w-full h-full object-cover pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/30 to-transparent opacity-90 pointer-events-none" />
          <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.5)] rounded-[2.5rem] pointer-events-none" />
        </div>

        {/* Floating element (static) */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[90%] pointer-events-none">
          <div className="bg-black/60 backdrop-blur-xl border border-white/20 rounded-2xl py-5 px-6 shadow-2xl flex flex-col items-center text-center">
            <h3 className="font-serif italic text-xl md:text-2xl text-white mb-1 drop-shadow-lg">
              Manual Completo
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

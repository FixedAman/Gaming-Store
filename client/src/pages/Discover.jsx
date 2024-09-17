import React from "react";
import "./Discover.css"; // Retain custom CSS if you have any specific styles

const Discover = () => {
  const section1Cards = [
    {
      image: "https://r4.wallpaperflare.com/wallpaper/893/980/964/video-games-call-of-duty-black-ops-iiii-call-of-duty-black-ops-call-of-duty-wallpaper-fa90d91bd188d8fe0b37e8c451d68daa.jpg",
      title: "BLACK OPS 6",
      description: "Live events at COD Black OPS 6 at COD NEXT event 8am EST",
    },
    {
      image: "https://r4.wallpaperflare.com/wallpaper/557/189/265/call-of-duty-warzone-xbox-one-call-of-duty-black-ops-hd-wallpaper-1940f83d917a5d8b5627e8cfa08116dd.jpg",
      title: "Warzone Season 3 Reloaded",
      description: "Rebirth Island is now live in COD Warzone 3.0",
    },
    {
      image: "https://r4.wallpaperflare.com/wallpaper/597/295/782/call-of-duty-call-of-duty-modern-warfare-iii-simon-ghost-riley-zombies-call-of-duty-black-ops-cold-war-zombies-hd-wallpaper-7900f86da1ea5deb1617580f30e106fd.jpg",
      title: "Modern Warfare 3 Season 5",
      description: "Community Update from Modern Warfare 3",
    },
  ];

  const section2Cards = [
    {
      image: "https://r4.wallpaperflare.com/wallpaper/929/501/218/cyberpunk-2077-cd-projekt-red-hd-wallpaper-c04a9ecd37adf42afded41bafb209c6f.jpg",
      title: "Phantom Liberty",
      description: "NCPD no longer has access to this location. Find the intel ASAP.",
    },
    {
      image: "https://r4.wallpaperflare.com/wallpaper/794/248/964/cyberpunk-cyberpunk-2077-cyberpunk-edgerunners-netflix-cd-projekt-red-hd-wallpaper-d896ad8890e00cf870cc418e585224da.jpg",
      title: "Cyberpunk Anime Adaptation",
      description: "Anime adaptation on Netflix only at $9.49",
    },
    {
      image: "https://r4.wallpaperflare.com/wallpaper/507/777/218/cyberpunk-2077-johnny-silverhand-keanu-reeves-video-game-characters-video-games-hd-wallpaper-19c0d86dc11a1d6bc6a7a81f60c1e67d.jpg",
      title: "Keanu Reeves",
      description: "Releasing on the EEE GamesCom on July 24th, 4 AM PST+10 ETA",
    },
  ];

  return (
    <>
      {/* First Section */}
      <div className="relative discover-containerp1 border-b border-zinc-800 gap-10 ">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/codloop.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center text-center py-20 text-white">
          <h1 className="text-4xl font-bold">EXPLORE THE HUB</h1>
          <h2 className="text-2xl mt-4">EVENTS</h2>
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {section1Cards.map((card, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden max-w-xl mx-auto transition-transform transform hover:scale-105 hover:shadow-2xl duration-300"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6 bg-gray-900 text-white">
                  <h3 className="text-xl font-semibold">{card.title}</h3>
                  <p className="mt-4 text-gray-400">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Second Section */}
      
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/cyberpunk.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center text-center py-20 text-white">
          <h1 className="text-4xl font-bold">Phantom Liberty</h1>
          <h2 className="text-2xl mt-4">Official updates rolled out</h2>
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {section2Cards.map((card, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden max-w-xs mx-auto transition-transform transform hover:scale-105 hover:shadow-2xl duration-300"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6 bg-gray-900 text-white">
                  <h3 className="text-xl font-semibold">{card.title}</h3>
                  <p className="mt-4 text-gray-400">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
   
    </>
  );
};

export default Discover;

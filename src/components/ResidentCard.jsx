const characterStatus = {
  Alive: "bg-green-500",
  Dead: "bg-red-500",
  unknown: "bg-slate-500",
};

const ResidentCard = ({ resident }) => (
  <article className="border-2 border-[#8EFF8B]">
    <header className="relative aspect-square bg-zinc-900">
      <img
        className="h-full w-full object-cover"
        src={resident.image}
        alt={resident.name}
        width="300"
        height="300"
        loading="lazy"
      />

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/80 text-white px-5 py-1 rounded-md flex items-center gap-2">
        <div className={`h-3 w-3 ${characterStatus[resident.status]} rounded-full`}></div>
        <span>{resident.status}</span>
      </div>
    </header>
    <div className="font-mono border-t-2 border-t-[#8EFF8B] p-4">
      <h4 className="text-[#FBFBFB] text-[22px] font-bold">{resident.name}</h4>

      <div className="w-full h-[1px] bg-gradient-to-r from-teal-900 via-red-700 to-teal-500 mb-3"></div>

      <ul className="text-xs p-1">
        <li className="mb-2">
          <span className="text-[#A9A1A1] mr-8">Species</span> <span>{resident.species}</span>
        </li>
        <li className="mb-2 bg-slate-200/20">
          <span className="text-[#C9C3C3] mr-10">Origin</span> <span>{resident.origin.name}</span>
        </li>
        <li className="mb-0">
          <span className="text-[#A9A1A1] mr-3">Times appear</span> <span>{resident.episode.length}</span>
        </li>
      </ul>
    </div>
  </article>
);

export default ResidentCard;

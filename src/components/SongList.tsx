import { useState } from "react";
import SongItem from "./SongItem";

interface SongListProps {
  songsArrayFromArtist: {
    image: string;
    name: string;
    duration: string;
    artist: string;
    audio: string;
    _id: string;
  }[];
}

const SongList = ({ songsArrayFromArtist }: SongListProps) => {
  const [items, setItems] = useState<number>(5);

  return (
    <div className="song_list space-y-2">
      {songsArrayFromArtist
        .filter((_, index) => index < items)
        .map((item, index) => (
          <SongItem key={item._id} {...item} index={index} />
        ))}

      <p
        className="text-xs hover:underline cursor-pointer"
        onClick={() => setItems((prev) => prev + 3)}
      >
        Ver mais
      </p>
    </div>
  );
};

export default SongList;

import { Link } from "react-router-dom";

interface SongItemProps {
  image: string;
  name: string;
  duration: string;
  artist: string;
  audio: string;
  _id: string;
  index: number;
}

const SongItem = ({
  image,
  name,
  duration,
  _id,
  index,
}: SongItemProps) => {
  return (
    <Link
      to={`/song/${_id}`}
      className="song_item flex items-center justify-between py-1 px-3 hover:no-underline rounded-sm"
    >
      <div className="song_number_image_name flex items-center gap-2">
        <p>{index + 1}</p>

        <div className="song_image_name flex items-center gap-2 hover:underline">
          <img width={70} height={70} src={`${image}`} alt="" />
          <p>{name}</p>
        </div>
      </div>

      <p>{duration}</p>
    </Link>
  );
};

export default SongItem;

import { FaPlayCircle } from "react-icons/fa";
import SongList from "../components/SongList";
import { Link, useParams } from "react-router-dom";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

const Artist = () => {
  const { id } = useParams();

  const artistObj = artistArray.filter((item : any) => item._id === id)[0];

  const songsArrayFromArtist = songsArray.filter(
    (item: any) => item.artist === artistObj.name
  );

  const randomNumber = Math.floor(
    Math.random() * (songsArrayFromArtist.length - 1)
  );

  const idRandomMusic = songsArrayFromArtist[randomNumber]._id;

  return (
    <div className="artists overflow-hidden m-2 rounded-lg">
      <div
        className="artists_header h-[40svh] bg-cover bg-center p-6 flex items-end"
        style={{
          backgroundImage: `url(${artistObj.banner})`,
        }}
      >
        <h2 className="font-bold text-3xl">{artistObj.name}</h2>
      </div>

      <div className="artist_body p-4">
        <p>Populares</p>

        <SongList songsArrayFromArtist={songsArrayFromArtist} />
      </div>

      <Link to={`/song/${idRandomMusic}`}>
        <FaPlayCircle className="single-item-icon fixed right-5 bottom-10 size-8 text-green-500" />
      </Link>
    </div>
  );
};

export default Artist;

import { Link, useParams } from "react-router-dom";
import Player from "../components/Player";
import { songsArray } from "../assets/database/songs";
import { artistArray } from "../assets/database/artists";

const Song = () => {
  const { id } = useParams();

  const songSelected = songsArray.filter(
    (item: any) => item._id === id
  )[0];

  const artistFromSong = artistArray.filter(
    (item: any) => item.name === songSelected.artist
  )[0];

  const songsFromArtists = songsArray.filter((item: any) => item.artist === artistFromSong.name);

  const randomOne = Math.floor(Math.random() * songsFromArtists.length - 1);
  const randomTwo = Math.floor(Math.random() * songsFromArtists.length - 1);

  const randomNextSong = songsFromArtists[randomOne]._id;
  const randomPrevSong = songsFromArtists[randomTwo]._id;


  return (
    <div className="song min-h-[90vh] flex flex-col px-2">
      <div className="song_container flex justify-center items-center rounded-t-lg">
        <div className="song_container_image">
          <img
            src={`${songSelected.image}`}
            alt={`Imagem da música ${songSelected.name}`}
          />
        </div>
      </div>

      <div className="song_body bg-black w-full">
        <Link to={`/artist/${artistFromSong._id}`} className="">
          <img
            width={65}
            height={65}
            src={`${artistFromSong.image}`}
            alt={`Imagem do Artista ${artistFromSong.name}`}
            className=""
          />
        </Link>

        <Player songSelected={songSelected} randomNextSong={randomNextSong} randomPrevSong={randomPrevSong}/>

        <div className="song_music_name flex flex-col">
          <p className="text-[11px] font-medium">{songSelected.name}</p>
          <p className="text-[11px] font-extralight">{songSelected.artist}</p>
        </div>
      </div>
    </div>
  );
};

export default Song;

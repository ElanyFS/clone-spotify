import { FaPlayCircle } from "react-icons/fa";
import { Artistas, Musicas } from "../utils/interface";
import { Link } from "react-router-dom";

interface SingleItemProps {
  valueObj: Musicas | Artistas;
  idPath: string;
}

const SingleItem = ({ valueObj, idPath }: SingleItemProps) => {
  const isArtist = (obj: any): obj is Artistas => "banner" in obj;

  return (
    <Link
      to={`${idPath}/${valueObj._id}`}
      className="single-item flex flex-col items-center py-2 px-3 hover:bg-green-900 rounded-2xl cursor-pointer"
    >
      <div className="single-item-image-button relative">
        <div className="single-item-image">
          <img
            src={valueObj.image}
            alt={`Imagem do ${valueObj.name}`}
            className="rounded-full w-[140px]"
          />
        </div>
        <FaPlayCircle className="single-item-icon absolute opacity-0 right-2 bottom-2 size-8 text-green-500" />
      </div>

      <div className="single-item-texts">
        <p className="single-item-texts-music">{valueObj.name}</p>
        <p className="text-sm">
          {isArtist(valueObj) ? "Artistas" : valueObj.artist}
        </p>
      </div>
    </Link>
  );
};

export default SingleItem;

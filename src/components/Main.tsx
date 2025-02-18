import ItemList from "./ItemList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

interface MainProps {
  type?: string;
}

const Main = ({ type }: MainProps) => {
  
  return (
    <main className="p-2 m-3 rounded-lg font-monts">
      {type === "artists" || type === undefined ? (
        <ItemList
          title="Artistas"
          item={5}
          itemsArray={artistArray}
          path="/artists"
          idPath="/artist"
        />
      ) : (
        <></>
      )}

      {type === "songs" || type === undefined ? (
        <ItemList
          title="Músicas"
          item={10}
          itemsArray={songsArray}
          path="/songs"
          idPath="/song"
        />
      ) : (
        <></>
      )}
    </main>
  );
};

export default Main;

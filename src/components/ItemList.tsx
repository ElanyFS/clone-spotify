import { Link, useLocation } from "react-router-dom";
import { Artistas, Musicas } from "../utils/interface.ts";
import SingleItem from "./SingleItem.tsx";

interface ItemListProps {
  title: string;
  item: number;
  path: string;
  idPath: string;
  itemsArray: Musicas[] | Artistas[];
}

const ItemList = ({ title, item, itemsArray, path, idPath }: ItemListProps) => {
  const { pathname } = useLocation();

  const isHome = pathname == "/";

  const countItems = isHome ? item : Infinity;

  return (
    <div className="item-list space-y-3">
      <div className="item-list-header flex justify-between items-center">
        <h2 className="text-lg">{title} populares</h2>
        <Link to={path} className="text-xs">
          Mostrar tudo
        </Link>
      </div>

      <div className="item-list-container">
        {itemsArray
          .filter((__, index) => index < countItems)
          .map((valueObj, index) => (
            <SingleItem
              key={`${title}-${index}`}
              valueObj={valueObj}
              idPath={idPath}
            />
          ))}
      </div>
    </div>
  );
};

export default ItemList;

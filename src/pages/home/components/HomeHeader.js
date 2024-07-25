import { useNavigate } from "react-router-dom";
import CuisineBasedResturaunts from "./CuisineBasedResturaunts";

const HomeHeader = ({ header, imageCards }) => {
  const navigation = useNavigate();
  return (
    <div className="flex flex-col bg-[#fff] px-5">
      <h1 className="mt-2 text-3xl font-bold whitespace-nowrap">{header}</h1>
      <div className="flex mt-2 w-auto overflow-x-scroll scrollbar-none pb-4 border-b-2 ">
        {imageCards.map((image) => {
          return (
            <img
              key={image?.id}
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${image.imageId}`}
              alt=""
              className="size-40 mx-2 cursor-pointer"
              onClick={() => navigation("/cusinebasedresturaunts")}
            />
          );
        })}
      </div>
    </div>
  );
};
export default HomeHeader;

import React, { useEffect, useState } from "react";
import HomeHeader from "./components/HomeHeader";
import { MAIN_URL } from "../../constants/api";
import { useApi } from "../../hooks/useApi";
import ResturauntCards from "./components/ResturauntCard";

const Home = () => {
  const cardInfo = useApi(MAIN_URL);
  const cards = cardInfo?.data;
  const header = cards?.cards[0]?.card?.card?.header?.title ?? "";
  const imageId = cards?.cards[0]?.card?.card?.imageGridCards?.info ?? [];
  const resturauntChainTitle = cards?.cards[1]?.card?.card?.header?.title ?? "";
  const resturantCards =
    cards?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants ?? [];
  const resturauntsInCityHeader = cards?.cards[2]?.card?.card?.title;
  const listOfResturauntsInCity =
    cards?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants ?? [];
  console.log(listOfResturauntsInCity);
  return (
    <div className="pt-36">
      <HomeHeader header={header} imageCards={imageId} />
      <div>
        <h1 className={headerStyle}>{resturauntChainTitle}</h1>
        <div className="flex mt-4 gap-x-4 overflow-x-scroll scrollbar-none">
          {resturantCards.map((resturants) => (
            <ResturauntCards
              key={resturants?.info?.id}
              name={resturants?.info?.name}
              ratings={resturants?.info?.avgRating}
              deliveryTime={resturants?.info?.sla?.slaString}
              cusines={resturants?.info?.cuisines?.join(",")}
              location={resturants?.info?.areaName}
              imageId={resturants?.info?.cloudinaryImageId}
            />
          ))}
        </div>
      </div>
      <div className="border-b"></div>
      <div className="mt-2">
        <h1 className={headerStyle}>{resturauntsInCityHeader}</h1>
        <div className="mt-4 grid grid-cols-3 gap-x-4">
          {listOfResturauntsInCity.map((resturants) => (
            <ResturauntCards
              key={resturants?.info?.id}
              name={resturants?.info?.name}
              ratings={resturants?.info?.avgRating}
              deliveryTime={resturants?.info?.sla?.slaString}
              cusines={resturants?.info?.cuisines?.join(",")}
              location={resturants?.info?.areaName}
              imageId={resturants?.info?.cloudinaryImageId}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const headerStyle = "mt-4 text-3xl font-bold";
export default Home;

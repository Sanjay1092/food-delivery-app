const ResturauntCards = ({
  name,
  ratings,
  deliveryTime,
  cusines,
  location,
  imageId,
}) => {
  return (
    <div className="flex flex-col mt-4 min-w-60 pb-5 cursor-pointer hover:border-2 border-transparent">
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imageId}`}
        alt=""
        className="h-40 object-cover rounded-lg"
      />
      <div className="px-2 mt-2">
        <p className="text-lg font-medium">{name}</p>
        <p className="mt-2">
          <span>⭐ {ratings}.</span>
          <span className="text-[16px] font-semibold px-1">{deliveryTime}</span>
        </p>
        <p className="text-[#676a6d] overflow-hidden text-ellipsis whitespace-nowrap">
          {cusines}
        </p>
        <p className="text-[#676a6d]">{location}</p>
      </div>
    </div>
  );
};

export default ResturauntCards;

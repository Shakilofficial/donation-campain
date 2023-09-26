const DetailCard = ({ detail }) => {
  const { picture, title, text_btn,category_bg, card_bg,category, description, price } = detail;

  const handleDonate = () => {
    const addedDonatesArray = [];
    const donateItems = JSON.parse(localStorage.getItem("donates")) || [];
    addedDonatesArray.push(...donateItems, detail);
    localStorage.setItem("donates", JSON.stringify(addedDonatesArray));
    alert("added");
  };
  return (
    <div className="px-4 my-4">
      <div>
        <img className="w-full h-[700px] rounded-lg" src={picture} alt="" />
      </div>
      <div className="bg-black h-[112px] bg-opacity-70 rounded-lg relative -top-28">
        <button
          onClick={handleDonate}
          className="mx-6 my-6 px-6 py-4 rounded-lg font-semibold text-white text-lg"
          style={{ backgroundColor: text_btn }}
        >
          {" "}
          Donate $ {price}{" "}
        </button>
      </div>
      <div className="relative -top-20 space-y-4">
        <h2 className="font-bold text-4xl">{title} </h2>
        <p>{description} </p>
      </div>
    </div>
  );
};

export default DetailCard;

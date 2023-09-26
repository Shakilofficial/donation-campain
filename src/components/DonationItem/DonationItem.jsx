import { Link } from "react-router-dom";

const DonationItem = ({ donation }) => {
  const { id, picture, title, category, category_bg, card_bg, text_btn } = donation;

  return (
    <div>
      <Link to={`/detail/${id}`}>
        <div className="rounded-lg h-[310px] max-w[425px]" style={{ backgroundColor: category_bg }}>
          <div>
            <img className="w-full h-[200px]" src={picture} alt="" />
          </div>
          <div className="p-4 space-y-2">
            <button
              className="text-sm font-semibold px-2 py-1 rounded-md"
              style={{ backgroundColor: card_bg, color: text_btn }}
            >
              {category}
            </button>
            <h2 className="font-semibold" style={{ color: text_btn }}>
              {title}
            </h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DonationItem;


const DonationCard = ({donation}) => {
    const { picture, title, text_btn, category_bg, category, card_bg, description, price } = donation;
    return (
        <div className="rounded-lg max-w[425px] "style={{ backgroundColor: category_bg }}>
            <div className="flex md:flex-row p-4 md:p-0 flex-col items-center gap-5" >
                <img className="rounded-lg h-full" src={picture} alt="" />
                <div className="space-y-2">
                    <button className="text-sm  font-semibold px-2 rounded-sm" style={{ backgroundColor: card_bg }} > {category} </button>
                    <h2 className="font-bold text-lg"> {title} </h2>
                    <h3 className="font-semibold" style={{color: text_btn}} > $ {price} </h3>
                    <button className="px-2 py-1 rounded-md text-white font-semibold" style={{ backgroundColor: text_btn }}> See Details </button>
                </div>
            </div>
        </div>
    );
};

export default DonationCard;
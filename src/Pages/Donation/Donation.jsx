import { useEffect, useState } from "react";
import ErrorPage from "../ErrorPage/ErrorPage";
import DonationCard from "./DonationCard";

const Donation = () => {
    const [donations, setDonations] = useState([]);
    const [notFound, setNotFound] = useState(false);
    const [cardLength, setCardLength] = useState(4);

    useEffect(() => {
        const donateItems = JSON.parse(localStorage.getItem("donates"));
        if (donateItems) {
            setDonations(donateItems)
        }
        else {
            setNotFound('No Data Found')
        }
    }, [])

    return (
        <div>
            {notFound ? <ErrorPage></ErrorPage> : <div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-8 px-4">
                    {
                        donations.slice(0,cardLength).map(donation=> <DonationCard key={donation.id} donation={donation} ></DonationCard> )
                    }
                </div>
            </div>}
            <div className={`flex justify-center items-center ${cardLength === donations.length && 'hidden'}`}>
                <button onClick={()=> setCardLength(donations.length)} className="bg-green-700 mx-6 my-6 px-4 py-2 rounded-lg font-semibold text-white text-lg">Show All</button>
            </div>
        </div>
    );
};

export default Donation;
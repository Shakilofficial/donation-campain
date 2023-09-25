import { useEffect, useState } from "react";
import Donation from "../../components/Donation/Donation";
import Banner from "../../components/Header/Banner/Banner";

const Home = () => {

    const [donations, setDonations] = useState([]);

    useEffect(() => {
        fetch('/public/donation.json')
        .then(res => res.json())
        .then(data => setDonations(data));
    
    },[])

    return (
        <div>
            <div className="">
                <Banner></Banner>
            </div>
            <div className="grid px-4 md:px-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-16 gap-4">
                {
                    donations.map(donation => <Donation key={donation.category} donation={donation} ></Donation>  )
                }
            </div>
        </div>
    );
};

export default Home;
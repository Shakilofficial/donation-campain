import React, { useEffect, useState } from "react";
import DonationItem from "../../components/DonationItem/DonationItem";
import Banner from "../../components/Header/Banner/Banner";

const Home = () => {
  const [donations, setDonations] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredDonations, setFilteredDonations] = useState([]);

  useEffect(() => {
    fetch('/public/donation.json')
      .then((res) => res.json())
      .then((data) => {
        setDonations(data);
        setFilteredDonations(data);
      });
  }, []);

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchClick = () => {

    const filtered = donations.filter((donation) =>
      donation.category.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredDonations(filtered);
  };

  return (
    <div>
      <div className="">
        <Banner
          searchInput={searchInput}
          onSearchInputChange={handleSearchInputChange}
          onSearchClick={handleSearchClick}
        />
      </div>
      <div className="grid px-4 md:px-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-16 gap-4">
        {filteredDonations.map((donation) => (
          <DonationItem key={donation.id} donation={donation} />
        ))}
      </div>
    </div>
  );
};

export default Home;
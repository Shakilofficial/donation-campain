const Banner = ({ searchInput, onSearchInputChange, onSearchClick }) => {
  return (
    <div>
      <div className="bg-[url('https://i.ibb.co/FwTHwq2/people-meeting-community-center.jpg')] bg-cover bg-center h-[600px] text-black">
        <div className="bg-white bg-opacity-90 h-full space-y-4 flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold mb-2">
            I Grow By Helping People In Need
          </h1>
          <div className="flex">
            <input
              type="text"
              placeholder="Search by category..."
              value={searchInput}
              onChange={onSearchInputChange}
              className="px-2 py-2 border-2 rounded-md bg-white text-gray-800"
            />
            <button
              onClick={onSearchClick}
              className="px-6 py-2 rounded-md bg-red-500 text-white"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
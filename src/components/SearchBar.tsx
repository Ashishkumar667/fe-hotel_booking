// import { FormEvent, useState } from "react";
// import { useSearchContext } from "../contexts/SearchContext";
// import { MdTravelExplore } from "react-icons/md";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { useNavigate } from "react-router-dom";

// const SearchBar = () => {
//   const navigate = useNavigate();
//   const search = useSearchContext();

//   const [destination, setDestination] = useState<string>(search.destination);
//   const [checkIn, setCheckIn] = useState<Date>(search.checkIn);
//   const [checkOut, setCheckOut] = useState<Date>(search.checkOut);
//   const [adultCount, setAdultCount] = useState<number>(search.adultCount);
//   const [childCount, setChildCount] = useState<number>(search.childCount);

//   const handleSubmit = (event: FormEvent) => {
//     event.preventDefault();
//     search.saveSearchValues(
//       destination,
//       checkIn,
//       checkOut,
//       adultCount,
//       childCount
//     );
//     navigate("/search");
//   };

//   const minDate = new Date();
//   const maxDate = new Date();
//   maxDate.setFullYear(maxDate.getFullYear() + 1);

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="-mt-8 p-3 bg-gray-600 rounded shadow-md grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 items-center gap-4"
//     >
//       <div className="flex flex-row items-center flex-1 bg-white p-2">
//         <MdTravelExplore size={25} className="mr-2" />
//         <input
//           placeholder="Where are you going?"
//           className="text-md w-full focus:outline-none"
//           value={destination}
//           onChange={(event) => setDestination(event.target.value)}
//         />
//       </div>

//       <div className="flex bg-white px-2 py-1 gap-2">
//         <label className="items-center flex">
//           Adults:
//           <input
//             className="w-full p-1 focus:outline-none font-bold"
//             type="number"
//             min={1}
//             max={20}
//             value={adultCount}
//             onChange={(event) => setAdultCount(parseInt(event.target.value))}
//           />
//         </label>
//         <label className="items-center flex">
//           Children:
//           <input
//             className="w-full p-1 focus:outline-none font-bold"
//             type="number"
//             min={0}
//             max={20}
//             value={childCount}
//             onChange={(event) => setChildCount(parseInt(event.target.value))}
//           />
//         </label>
//       </div>
//       <div>
//         <DatePicker
//           selected={checkIn}
//           onChange={(date) => setCheckIn(date as Date)}
//           selectsStart
//           startDate={checkIn}
//           endDate={checkOut}
//           minDate={minDate}
//           maxDate={maxDate}
//           placeholderText="Check-in Date"
//           className="min-w-full bg-white p-2 focus:outline-none"
//           wrapperClassName="min-w-full"
//         />
//       </div>
//       <div>
//         <DatePicker
//           selected={checkOut}
//           onChange={(date) => setCheckOut(date as Date)}
//           selectsStart
//           startDate={checkIn}
//           endDate={checkOut}
//           minDate={minDate}
//           maxDate={maxDate}
//           placeholderText="Check-out Date"
//           className="min-w-full bg-white p-2 focus:outline-none"
//           wrapperClassName="min-w-full"
//         />
//       </div>
//       <div className="flex gap-1">
//         <button className="w-2/3 bg-blue-600 text-white h-full p-2 font-bold text-xl hover:bg-blue-500">
//           Search
//         </button>
//         <button className="w-1/3 bg-red-600 text-white h-full p-2 font-bold text-xl hover:bg-red-500">
//           Clear
//         </button>
//       </div>
//     </form>
//   );
// };

// export default SearchBar;

import { FormEvent, useState } from "react";
import { useSearchContext } from "../contexts/SearchContext";
import { FaSearch, FaUserFriends, FaChild, FaCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const search = useSearchContext();

  const [destination, setDestination] = useState<string>(search.destination);
  const [checkIn, setCheckIn] = useState<Date>(search.checkIn);
  const [checkOut, setCheckOut] = useState<Date>(search.checkOut);
  const [adultCount, setAdultCount] = useState<number>(search.adultCount);
  const [childCount, setChildCount] = useState<number>(search.childCount);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    search.saveSearchValues(destination, checkIn, checkOut, adultCount, childCount);
    navigate("/search");
  };

  const handleClear = () => {
    setDestination("");
    setCheckIn(new Date());
    setCheckOut(new Date());
    setAdultCount(1);
    setChildCount(0);
  };

  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 1);

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-white rounded-xl shadow-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end"
    >
      {/* Destination Search */}
      <div className="relative">
        <label className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
        <div className="relative">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            placeholder="Where to?"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>
      </div>

      {/* Guests */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Adults</label>
          <div className="relative">
            <FaUserFriends className="absolute left-3 top-3 text-gray-400" />
            <input
              type="number"
              min={1}
              max={20}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={adultCount}
              onChange={(e) => setAdultCount(parseInt(e.target.value))}
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Children</label>
          <div className="relative">
            <FaChild className="absolute left-3 top-3 text-gray-400" />
            <input
              type="number"
              min={0}
              max={20}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={childCount}
              onChange={(e) => setChildCount(parseInt(e.target.value))}
            />
          </div>
        </div>
      </div>

      {/* Check-in Date */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Check-in</label>
        <div className="relative">
          <FaCalendarAlt className="absolute left-3 top-3 text-gray-400" />
          <DatePicker
            selected={checkIn}
            onChange={(date) => setCheckIn(date as Date)}
            selectsStart
            startDate={checkIn}
            endDate={checkOut}
            minDate={minDate}
            maxDate={maxDate}
            placeholderText="Select date"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      {/* Check-out Date */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Check-out</label>
        <div className="relative">
          <FaCalendarAlt className="absolute left-3 top-3 text-gray-400" />
          <DatePicker
            selected={checkOut}
            onChange={(date) => setCheckOut(date as Date)}
            selectsEnd
            startDate={checkIn}
            endDate={checkOut}
            minDate={checkIn || minDate}
            maxDate={maxDate}
            placeholderText="Select date"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-2">
        <button
          type="submit"
          className="flex-1 bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-blue-600 transition-all shadow-md"
        >
          Search
        </button>
        <button
          type="button"
          onClick={handleClear}
          className="flex-1 bg-gradient-to-r from-gray-600 to-gray-500 text-white py-3 px-4 rounded-lg font-medium hover:from-gray-700 hover:to-gray-600 transition-all shadow-md"
        >
          Clear
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
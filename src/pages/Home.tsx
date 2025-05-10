

import { useQuery } from "react-query";
import * as apiClient from "../api-client";
import LatestDestinationCard from "../components/LastestDestinationCard";

const Home = () => {
  const { data: hotels } = useQuery("fetchQuery", () =>
    apiClient.fetchHotels()
  );

  const topRowHotels = hotels?.slice(0, 2) || [];
  const bottomRowHotels = hotels?.slice(2) || [];

  return (
    <div className="bg-gray-200 py-10 px-4 sm:px-8 md:px-16 min-h-screen">
      <h2 className="text-3xl font-bold mb-2">Latest Destinations</h2>
      <p className="mb-6 text-gray-600">Most recent destinations added by our hosts</p>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {topRowHotels.map((hotel) => (
            <LatestDestinationCard key={hotel._id} hotel={hotel} />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {bottomRowHotels.map((hotel) => (
            <LatestDestinationCard key={hotel._id} hotel={hotel} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

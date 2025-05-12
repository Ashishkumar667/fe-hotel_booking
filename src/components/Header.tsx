
import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";


const Header = () => {
  const { isLoggedIn } = useAppContext();

  return (
    <div className="bg-gray-900 py-6 border-b border-gray-700">
      <div className="container mx-auto flex justify-between">
        <span className="text-3xl text-white font-bold tracking-tight">
          <Link to="/" className="hover:text-gray-300 transition">HoliStay.com</Link>
        </span>
        <span className="flex space-x-2">
          {isLoggedIn ? (
            <>
              <Link
                className="flex items-center text-gray-200 px-3 font-medium hover:text-white hover:bg-gray-800 rounded-md transition"
                to="/my-bookings"
              >
                My Bookings
              </Link>
              <Link
                className="flex items-center text-gray-200 px-3 font-medium hover:text-white hover:bg-gray-800 rounded-md transition"
                to="/my-hotels"
              >
                My Hotels
              </Link>
              <SignOutButton />
            </>
          ) : (
            <Link
              to="/sign-in"
              className="flex items-center bg-white text-gray-900 px-4 py-2 font-bold hover:bg-gray-300 rounded-md transition shadow-sm"
            >
              Sign In
            </Link>
          )}
        </span>
      </div>
    </div>
  );
};

export default Header;

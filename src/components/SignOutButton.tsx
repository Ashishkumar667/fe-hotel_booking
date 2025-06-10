// import { useMutation, useQueryClient } from "react-query";
// import * as apiClient from "../api-client";
// import { useAppContext } from "../contexts/AppContext";

// const SignOutButton = () => {
//   const queryClient = useQueryClient();
//   const { showToast } = useAppContext();

//   const mutation = useMutation(apiClient.signOut, {
//     onSuccess: async () => {
//       await queryClient.invalidateQueries("validateToken");
//       showToast({ message: "Signed Out!", type: "SUCCESS" });
//     },
//     onError: (error: Error) => {
//       showToast({ message: error.message, type: "ERROR" });
//     },
//   });

//   const handleClick = () => {
//     mutation.mutate();
//   };

//   return (
//     <button
//       onClick={handleClick}
//        className="flex items-center bg-white text-gray-900 px-4 py-2 font-bold hover:bg-gray-300 rounded-md transition shadow-sm"
//     >
//       Sign Out
//     </button>
//   );
// };

// export default SignOutButton;

import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../contexts/AppContext";
import { useNavigate } from "react-router-dom";

const SignOutButton = () => {
  const queryClient = useQueryClient();
  const { showToast } = useAppContext();
  const navigate = useNavigate();

  const mutation = useMutation(apiClient.signOut, {
    onSuccess: async () => {
      // Clear all queries from cache
      await queryClient.clear();
      // Show success message
      showToast({ message: "Signed Out Successfully!", type: "SUCCESS" });
      // Redirect to home page
      navigate("/");
      // Force refresh to ensure all state is cleared
      window.location.reload();
    },
    onError: (error: Error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });

  const handleClick = () => {
    mutation.mutate();
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center bg-white text-gray-900 px-4 py-2 font-bold hover:bg-gray-300 rounded-md transition shadow-sm"
      disabled={mutation.isLoading}
    >
      {mutation.isLoading ? "Signing Out..." : "Sign Out"}
    </button>
  );
};

export default SignOutButton;
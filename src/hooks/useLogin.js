// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useAuth } from "../context/AuthContext";

// const useLogin = ({ email, password }) => {
//   const { login, setLogin, userData, setUserData } = useAuth();
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   useEffect(() => {
//     if (!login) {
//       (async function () {
//         try {
//           let { data } = await axios.post(
//             "https://shopify-backend.kinshukshah.repl.co/api/user/login",
//             { email, password }
//           );
//           if (data.success) {
//             localStorage?.setItem("login", true);
//             localStorage?.setItem("user", JSON.stringify(data.doc));
//             setLogin(true);
//             setUserData(data.doc);
//           } else {
//             setError(data.error);
//           }
//         } catch (error) {
//           setError(error);
//         } finally {
//           setLoading(false);
//         }
//       })();
//     }
//   }, [email, login, password, setLogin, setUserData]);

//   return {
//     login,
//     userData,
//     error,
//     loading,
//   };
// };

// export { useLogin };

"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";
// Create the UserAuth context
const UserAuthContext = createContext();

// Custom hook to use the UserAuth context
export const useUserAuth = () => useContext(UserAuthContext);

// UserAuthProvider component
export const UserAuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [passwordError, setPasswordError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null); // Add token state
  const [siteSettings, setSiteSettings] = useState();
  const router = useRouter();
  const signin = async (phoneNumber, password) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/signin`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ phoneNumber, password }),
          cache: "force-cache",
        }
      );

      const data = await response.json();
      if (response.ok) {
        const token = data.body.token; // Assuming it's an array, pick the correct one
        setToken(token);
        localStorage.setItem("token", token);

        document.cookie = `token=${token}`;
        const data1 = await fetchUserData();
        console.log(data1);

        if (data1?.body?.user.role === "parent") {
          router.push("/home2");
        } else if (data1?.body?.user.role === "admin") {
          router.push("/dashboard/courses");
        } else {
          router.push("/dashboard/teacher-book");
        }
        setPasswordError(false);
      } else {
        throw new Error(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Signin error:", error);
      // alert('Password is Inncorrect')
      setPasswordError(true);
    }
  };

  const signup = async (formData) => {
    const { fullName, phoneNumber, password, grade } = formData;
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/signup`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fullName,
            phoneNumber,
            password,
            grade,
            role: "parent",
          }),
        }
      );

      const data = await response.json();
      // console.log(data);

      if (response.ok) {
        await signin(phoneNumber, password); // Automatically sign in after signup
      } else {
        throw new Error(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Signup error:", error.message);
    }
  };
  const signout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    document.cookie = `token=; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
    router.push("/");
  };

  //  checking if the token is not expired
  const isTokenExpired = (token) => {
    if (!token) return true;
    try {
      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      return decodedToken.exp < currentTime;
    } catch (error) {
      console.error("Error decoding token:", error);
      return true;
    }
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      const token = localStorage.getItem("token");
      if (isTokenExpired(token)) {
        localStorage.removeItem("token");
        router.push("/");
      } else {
        localStorage.getItem("user");
        setToken(localStorage.getItem("token"));
      }
    }
  }, [router]);

  // Fetch user data and access rules from API
  const fetchUserData = async () => {
    const token = localStorage.getItem("token");

    if (token && !isTokenExpired(token)) {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/users/profile`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          document.cookie = `token=; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
          return null;
        }

        document.cookie = `token=${token}`;
        setToken(localStorage.getItem("token"));

        const data = await response.json();

        setUser(data);

        if (
          data?.body?.user.role === "parent" &&
          !localStorage.getItem("user")
        ) {
          localStorage.setItem("user", JSON.stringify(data.body.user.child[0]));
        }

        return data;
      } catch (error) {
        console.error("Error fetching user data:", error);
        return null;
      } finally {
        setLoading(false);
      }
    } else {
      document.cookie = `token=; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
      return null;
    }
  };
// get siteSetting Data
  const fatchSettings = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/settings`);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const settings = await response.json();
      // console.log("AuthContext",settings);
       
      setSiteSettings(settings);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
    fatchSettings();
  }, []);

  return (
    <UserAuthContext.Provider
      value={{
        user,
        loading,
        signin,
        signup,
        signout,
        token,
        setUser,
        passwordError,
        siteSettings,
      }}
    >
      {children}
    </UserAuthContext.Provider>
  );
};

// Get SettingSummer Courses

'use client';
import { createContext, useContext, useState, useEffect } from "react";

const DataContext = createContext();

export const useDataContext = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/courses`, {
        method: "GET",
      });
      const data = await response.json();
      setCourseData(data);
    } catch (error) {
      console.error("Error fetching course data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ courseData, loading }}>
      {children}
    </DataContext.Provider>
  );
};

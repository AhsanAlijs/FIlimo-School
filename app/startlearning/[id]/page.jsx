"use client"
import Spinner from '@/components/Spinner/Spinner';
import StartLearning1 from '@/components/startlearning/StartLearning1'
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { useUserAuth } from '@/context/AuthContext';

const page = () => {
  const {token} = useUserAuth()
  const params = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const BaseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const searchParams = useSearchParams()
 
  const search = searchParams.get('itemid')
  const fetchData = async () => {
    try {
      const response = await fetch(`${BaseUrl}/lessons/${params?.id}/user`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const booksData = await response.json();
      setData(booksData?.body?.lesson);
    } catch (error) {
      setError(error.message || "Data not found!");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
 
  // console.log(data);
  
  
  if (loading) return <Spinner />;
  if (error)
    return (
      <p className="flex items-center justify-center h-screen text-3xl font-extrabold text-[#ff7536] ">
        {error}
      </p>
    );



  return (
    <>
    <StartLearning1 exameVideo={data} itemid={search}  />
    </>
  )
}

export default page
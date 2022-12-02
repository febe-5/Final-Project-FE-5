import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import CardBlog from "../components/CardBlog"
import { useDispatch, useSelector } from "react-redux"
import { getArticle } from "../redux/action/articleAction"


const Blog = () => {

  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((state) => state.article);

  useEffect(() => {
    dispatch(getArticle());
  }, []);


    // const [articles, setArticles] = useState([]);
  
    // const getArticles = async () => {
    //   try {
    //     let response = await axios.get("https://mental-meds.up.railway.app/api/Articles");
    //     setArticles(response.data.data);
        
    //   } catch (e) {
    //     console.log(e.message);
    //   }
    // };
  
    // useEffect(() => {
    //   getArticles();
    // }, []);
  
  
    return (
    <>
        <div className="bg-green-100">
            <header className="w-full container mx-auto">
                <div className="flex flex-col items-center py-12">
                    <a className="font-bold text-gray-800 uppercase hover:text-gray-700 text-5xl" href="#">
                        Artikel Seputar Kesehatan Mental
                    </a>
                    <p className="text-lg text-gray-600 text-center">
                        Disini terdapat beberapa artikel mengenai kesehatan mental yang dapat menambah pemahamanmu tentang kesehatan mental loh!! Yuk cek sekarang
                    </p>
                </div>
            </header>
            <div className="w-full container mx-auto items-center flex flex-wrap py-6">
                {data.map((item, index) => {
                    return <CardBlog key={index} id={item._id} title={item.title} slug={item.slug} desc={item.desc} image={item.image} author={item.author} category={item.category} date={item.date} />
                })}
            </div>
        </div>
    </>
);
};

export default Blog;
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";


const ArticleDetail = () => {
  const { slug } = useParams();

  const [articleDetail, setArticleDetail] = useState([]);

  const getArticleDetail = async () => {
    try {
      let response = await axios.get("https://mental-meds.up.railway.app/api/Articles");
      console.log();
      setArticleDetail(response.data.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getArticleDetail();
  }, []);

return (
    <>
      <Navbar />
      <div className="container w-full md:max-w-3xl mx-auto pt-20">
        
          {articleDetail.filter((item) => item.slug === slug).map((item) => {
            return (
              <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal">
                <div className="font-sans">
                  <p className="text-base md:text-sm text-teal-600 font-bold">&lt; <Link to="/blog" className="text-base md:text-sm text-teal-600 font-bold no-underline hover:underline">Kembali ke Halaman Sebelumnya</Link></p>
                    <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">{item.title}</h1>
						        <p className="text-sm md:text-base font-normal text-gray-600">Published <a className="text-sm md:text-base font-normal text-gray-600">{item.date}</a> </p>
						        <img src={item.image} className="w-full shadow-lg rounded-lg mb-6" alt="" />
                </div>
                <p className="py-6 text-justify">
                  {item.desc}
                </p>
              </div>
            )
          })}
      </div>
      <Footer />
    </>
);
};

export default ArticleDetail;
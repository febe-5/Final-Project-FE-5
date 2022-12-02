import { useNavigate} from "react-router-dom";



const CardBlog = (props) => {
  const navigation = useNavigate();

  const handleClick = (slug) => {
    navigation(`/articledetail/${slug}`);
  };

  console.log(props.title);
  return (
    <>
            
                <section className="w-full md:w-2/3 flex flex-col mx-auto px-3 py-3">
                  <article className="bg-gray-100 shadow-lg rounded-lg flex flex-col my-4">
                    <a  className="hover:opacity-75">
                        <img className="w-full rounded-t-lg" src={props.image} />
                    </a>
                    <div className="bg-teal-600 flex flex-col justify-start p-6 rounded-b-lg">
                        <a href="#" className="text-blue-800 text-sm font-bold uppercase pb-4">{props.category}</a>
                        <a onClick ={() => handleClick(props.slug)} className="text-3xl font-bold text-white hover:text-gray-300 pb-4">{props.title}</a>
                        <p href="#" className="text-sm pb-3 text-gray-300">
                            By <a href="#" className="font-semibold text-gray-300 hover:text-gray-600">{props.author}</a>, {props.date}
                        </p>
                        <a href="#" className="text-gray-100 pb-6 text-justify">{props.desc}</a>
                        <a onClick={() => handleClick(props.slug)} className=" text-white hover:text-gray-800">Continue Reading... </a>
                    </div>
                  </article>
                </section>
            
        </>
  )
  }

export default CardBlog;



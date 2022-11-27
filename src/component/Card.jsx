import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const navigation = useNavigate();

  const handleClick = (id) => {
    navigation(`/detail/${id}`);
  };
  return (
    <>
      <div className="mx-10">
        <div className="w-full rounded-lg shadow-md lg:max-w-sm bg-primary ">
          <img className="object-cover w-full h-48 mb-10" src={props.url_gambar} alt="ini-gambar-guis" />
          <div className="p-4 text-center">
            <h5 className="text-white text-xl mb-1 font-bold">{props.nama}</h5>
            <p className="text-white text-sm font-normal mb-4">{props.lokasi}</p>
            <button className="bg-white  hover:bg-secondary hover:text-white text-primary font-bold py-2 px-4 rounded-full" onClick={() => handleClick(props.id)}>
              Selengkapnya
            </button>
          </div>
        </div>
      </div>

      
    </>
  );
};
export default Card;

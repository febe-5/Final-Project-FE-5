import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const navigation = useNavigate();

  const handleClick = (id) => {
    navigation(`/detailPsikolog/${id}`);
  };

  return (
    <>
      <div className="mb-12 p-4 md:w-1/3">
        <div className="flex justify-center">
          <div className="rounded-md shadow-md bg-primary max-w-sm sm:rounded-md max-w-xs ">
            <img className="px-2 py-2 lg:items-center rounded-3xl" width="400" src={props.imgUrl} alt="Orang" />
            <div className="p-6 text-center">
              <h5 className="text-white text-xl mb-1 font-bold">{props.nama}</h5>
              <p className="text-white text-sm font-normal mb-4">{props.pendidikan}</p>
              <button className="bg-white  hover:bg-secondary hover:text-white text-primary font-bold py-2 px-4 rounded-full" onClick={() => handleClick(props._id)}>
                Selengkapnya
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;

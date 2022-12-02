import axios from "axios";

export const GET_ARTICLE = "GET_ARTICLE";
export const FETCH_START = "FETCH_START";
export const SUCCESS_GET_ARTICLE = "SUCCESS_GET_ARTICLE";

function fetchStart() {
  return {
    type: FETCH_START,
  };
}

function successGetArticle(data) {
  return {
    type: SUCCESS_GET_ARTICLE,
    payload: data,
  };
}

export const getArticle = () => {
  return async (dispatch) => {
    // ubah loading jadi true
    dispatch(fetchStart());

    // axios -> isi data todos, loading jadi false
    const result = await axios.get(
      "https://mental-meds.up.railway.app/api/Articles"
    );
    dispatch(successGetArticle(result.data.data));
  };
};
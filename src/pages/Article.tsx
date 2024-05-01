import useApi from "api/useApi";
import axios from "axios";
import authStorage from "helpers/AuthStorage";

const Article = () => {
  const api = useApi();
  const handleApi = async () => {
    const response =
      // await axios
      //   .get("http://localhost:3000/api/v1/auth/auth-user", {
      //     withCredentials: true,
      //     headers: {
      //       Authorization: "Bearer " + authStorage.get(),
      //     },
      //   })

      await axios
        .get("http://localhost:3000/api/v1/auth/auth-user")
        .catch((err) => {
          console.log(err.response.data.msg);
        });
    console.log(response, "response");

    // const { data, error } = await api.getRequest("/auth/auth-user");

    // if (data) {
    //   console.log(data);
    // } else {
    //   console.log(error);
    // }
  };
  return (
    <>
      Articl Page
      <button onClick={handleApi} className="block mt-5" type="button">
        CallApi
      </button>
      {/* <Stepper components={stepperComponents} /> */}
    </>
  );
};

export default Article;

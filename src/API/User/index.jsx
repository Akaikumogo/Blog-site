import api from "../axios";

const useUserAPI = () => {
  const signIn = async (data) => api.post("/user/signin", data);

  return {
    signIn,
  };
};

export default useUserAPI;

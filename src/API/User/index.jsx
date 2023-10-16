import api from "../axios";

const useUserAPI = () => {
  const signIn = async (data) => api.post("/user/signin", data);
  const signUpp = async (data) => api.post("/user/signup", data);

  return {
    signIn,
    signUpp,
  };
};

export default useUserAPI;

import api from "../axios";

const usePostAPI = () => {
  const getAllPosts = async () => api.get("/blog");
  return {
    getAllPosts,
  };
};

export default usePostAPI;

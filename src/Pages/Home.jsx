import { useEffect, useState } from "react";
import { useToast } from "@chakra-ui/react";
import Card from "../Components/Card";
import Loader from "../Components/UI/Loader";
import SubNavbar from "../Components/SubNavbar";
import useLoader from "../Store";
import usePostAPI from "../API/Blog";
import usePostStore from "../Store";

const Home = () => {
  const { startLoading, endLoading, isLoading } = useLoader();
  // const { setPosts, (posts } = usePostStore();
  const [posts, setPosts] = useState();
  const { getAllPosts } = usePostAPI();
  const toast = useToast();

  useEffect(() => {
    const fetchData = async () => {
      try {
        startLoading();
        const response = await getAllPosts();
        setPosts(response.data);
        endLoading();
      } catch (error) {
        endLoading();
        toast({
          title: error.response.data.message,
          status: "error",
          position: "top",
        });
      }
    };

    fetchData();
  }, [getAllPosts, setPosts, startLoading, endLoading, toast]);

  return (
    <div>
      <SubNavbar />
      {isLoading ? (
        <Loader />
      ) : (
        posts?.map((item) => <Card key={item.id} {...item} />)
      )}
    </div>
  );
};
//commit nigga
export default Home;

<<<<<<< HEAD
import { useEffect, useState } from "react";
import { useToast } from "@chakra-ui/react";
=======
>>>>>>> parent of 751b730 (search)
import Card from "../Components/Card";

const Home = () => {
<<<<<<< HEAD
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
=======
  return (
    <div>
      <Card />
>>>>>>> parent of 751b730 (search)
    </div>
  );
};

export default Home;

import { toModel } from "../../models/posts";
import { PostDto } from "../../models/posts/types";
import PostList from "./post_list";

const getData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts` as string);

  if (!res.ok) {
    return [];
  }

  return res.json();
};

const Home = async () => {
  const response: any = await getData();

  return (
    <PostList
      posts={response.data?.map((postDto: PostDto) => toModel(postDto))}
    />
  );
};

export default Home;
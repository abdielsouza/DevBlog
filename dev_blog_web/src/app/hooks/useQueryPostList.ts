import axiosInstance from "../axios";
import { useQuery } from "react-query";
import { Post, PostDto } from "../../models/posts/types";
import { toModel } from "../../models/posts";

export const QUERY_MY_POSTS = "QUERY_MY_POSTS";

const queryPostList: () => Promise<Post[]> = async () => {
  const response = await axiosInstance.get<{
    data: PostDto[];
  }>("/api/posts");
  return response.data?.data?.map((postDto) => toModel(postDto));
};

const useQueryPostList = (initialData?: Post[]) => {
  return useQuery([QUERY_MY_POSTS], queryPostList, {
    initialData,
  });
};

export default useQueryPostList;
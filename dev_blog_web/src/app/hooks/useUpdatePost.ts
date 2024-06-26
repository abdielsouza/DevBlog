import { useMutation } from "react-query";
import axios from "../axios";
import { Post } from "../../models/posts/types";

export type UpdatePostParams = Pick<
  Post,
  "id" | "title" | "description" | "content"
> & {
  accessToken?: string;
};

const onMutate = async (params: UpdatePostParams) => {
  const { id, title, description, content, accessToken } = params;

  const response = await axios.put<{
    data: Post;
  }>(
    `/api/my-posts/${id}`,
    {
      data: {
        title,
        description,
        content
      },
    },
    {
      headers: {
        Authorization: accessToken,
      },
    }
  );

  return response.data?.data;
};

const useUpdateMyPost = (
  onSuccess?: (
    data: Post | null | undefined,
    variables: UpdatePostParams,
    context: any
  ) => void,
  onError?: (error: any, variables: UpdatePostParams, context: any) => void
) => {
  return useMutation(onMutate, {
    onSuccess,
    onError,
  });
};

export default useUpdateMyPost;
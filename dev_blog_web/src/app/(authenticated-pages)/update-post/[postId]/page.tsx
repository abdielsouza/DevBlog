"use client";

import PostForm from "@/app/components/post_form";
import ErrorMessage from "@/app/components/atoms/error_message";
import Loading from "@/app/components/atoms/loading";
import { CreatePostParams } from "@/app/hooks/useCreatePost";
import useQueryPostDetail from "@/app/hooks/useQueryPostDetail";
import useUpdatePost from "@/app/hooks/useUpdatePost";
import { useSession } from "next-auth/react";
import { useParams, useRouter } from "next/navigation";
import { toast } from "react-toastify";

const UpdatePost: React.FC = () => {
  const { postId } = useParams() || {};

  const { data: session } = useSession();
  const router = useRouter();

  const {
    data: postDetail,
    isLoading: isFetchingPostDetail,
    isError: isFetchPostDetailError,
  } = useQueryPostDetail(postId as string);

  const { mutate: updatePost, isLoading: isSubmitting } = useUpdatePost(
    (data) => {
      data?.id && router.push(`/posts/${data?.id}`);
      toast.success("Post updated successfully");
    },
    () => {
      toast.error("Something went wrong while updating post");
    }
  );

  const onSubmit = (values: CreatePostParams) =>
    updatePost({
      ...values,
      id: postId as string,
      accessToken: session?.accessToken,
    });

  if (isFetchingPostDetail)
    return (
      <div className="my-24">
        <Loading />
      </div>
    );

  if (isFetchPostDetailError || !postDetail) return <ErrorMessage />;

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-7xl">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white">
          Atualizar Post
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-7xl px-8">
        <PostForm
          isLoading={isSubmitting}
          defaultValues={{
            title: postDetail?.title,
            description: postDetail?.description,
            content: postDetail?.content,
          }}
          onSubmit={onSubmit}
          buttonLabel="Atualizar Post"
        />
      </div>
    </div>
  );
};

export default UpdatePost;
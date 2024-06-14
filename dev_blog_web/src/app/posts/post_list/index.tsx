"use client";

import { Post } from "@/models/posts/types";
import ErrorMessage from "../../components/atoms/error_message";
import Loading from "../../components/atoms/loading";
import useQueryPostList from "../../hooks/useQueryPostList";
import EmptyMessage from "../empty_message";
import Introduction from "../introduction";
import PostCard from "../post_card";
import Button from "@/app/components/atoms/button";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

interface PostListProps {
  posts: Post[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  const { data: postList, isLoading, isError } = useQueryPostList(posts);
  const router = useRouter();
  const { status, data: session } = useSession();

  const onGoToCreatePage = () => {
    router.push("/create-post");
  };

  const onGoToMyPosts = () => {
    router.push("/my-posts");
  };

  if (isLoading)
    return (
      <div className="my-24">
        <Loading />
      </div>
    );

  if (isError || !postList) return <ErrorMessage />;

  return (
    <main>
      <div className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Introduction />
          {
          status === "authenticated" && (
            <div className="inline-flex">
              <Button
                className="px-6 py-3.5 text-lg font-semibold mt-5 mx-3"
                onClick={onGoToCreatePage}
              >
                Criar
              </Button>

              <Button
                className="px-6 py-3.5 text-lg font-semibold mt-5 mx-3"
                variant="white"
                onClick={onGoToMyPosts}
              >
                Ver meus posts
              </Button>
            </div>
          )
          }
          <div className="mx-auto max-w-7xl border-t border-gray-200 pt-10 mt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none">
            {postList.length === 0 ? (
              <EmptyMessage />
            ) : (
              <div className="grid grid-cols-1 gap-x-8 gap-y-16 w-full lg:grid-cols-3">
                {postList.map((post, index) => (
                  <PostCard key={index+1} {...post} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default PostList;
"use client";

import PostCard from "@/app/components/post_card";
import Button from "@/app/components/atoms/button";
import ErrorMessage from "@/app/components/atoms/error_message";
import Loading from "@/app/components/atoms/loading";
import useQueryMyPosts from "@/app/hooks/useQueryMyPosts";
import { useRouter } from "next/navigation";

const MyPosts: React.FC = () => {
  const router = useRouter();
  const { data: posts, isLoading, isError } = useQueryMyPosts();

  if (isLoading)
    return (
      <div className="my-24">
        <Loading />
      </div>
    );

  if (isError) return <ErrorMessage />;

  const onUpdate = (id: string) => () => router.push(`/update-post/${id}`);
  const onDelete = (id: string) => () => {
    // implement later
  };

  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl text-center">
          My Posts
        </h2>
        {!posts || posts?.length === 0 ? (
          <div className="text-center">
            <div className="mt-6 text-gray-600 dark:text-white text-lg text-center">
              There is no posts created. Please create the first one.
            </div>
            <Button
              className="mt-4"
              onClick={() => router.push("/create-post")}
            >
              Create
            </Button>
          </div>
        ) : (
          <div className="mt-12 mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts?.map((post) => (
              <PostCard
                key={post.id}
                {...post}
                onUpdate={onUpdate(post.id)}
                onDelete={onDelete(post.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyPosts;
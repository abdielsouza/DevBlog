import PostDetail from "./PostDetail";

async function getData(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts/${id}`);
  
  if (!res.ok) {
    return [];
  }

  return res.json();
}

interface PostDetailProps {
  params: {
    id: string;
  };
}

const PostDetailPage: React.FC<PostDetailProps> = async ({ params }) => {
  const { id } = params || {};

  const response: any = await getData(id);

  console.log("The detail response below:");
  console.log(response.data);

  return <PostDetail {...response.data} />;
};

export default PostDetailPage;
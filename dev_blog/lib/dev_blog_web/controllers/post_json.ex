defmodule DevBlogWeb.PostJSON do
    alias DevBlog.Blog.Post
    
    def index(%{posts: posts}) do
        %{data: for(post <- posts, do: data(post))}
    end

    def show(%{post: post}) do
        %{data: data(post)}
    end

    defp data(%Post{} = post) do
        %{
            id: post.id,
            title: post.title,
            description: post.description,
            content: post.content,
            created_at: post.inserted_at,
            slug: post.slug
        }
    end
end
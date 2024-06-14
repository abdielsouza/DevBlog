defmodule DevBlogWeb.CategoryController do
    use DevBlogWeb, :controller
    alias DevBlog.Blog

    def index(conn, _params) do
        categories = Blog.list_alphabetical_categories

        render(conn, "index.json", categories: categories)
    end
end
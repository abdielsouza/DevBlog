defmodule DevBlogWeb.CategoryJSON do
    alias DevBlog.Blog.Category

    def index(%{categories: categories}) do
        %{data: for(category <- categories, do: data(category))}
    end

    def show(%{category: category}) do
        %{data: data(category)}
    end

    defp data(%Category{} = category) do
        %{
            id: category.id,
            name: category.name
        }
    end
end
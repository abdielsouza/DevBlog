defmodule DevBlogWeb.CategoryView do
    use DevBlogWeb, :view

    def render("index.json", %{categories: categories}) do
        %{data: render_many(categories, __MODULE__, "category.json")}
    end

    def render("category.json", %{category: category}) do
        %{
            id: category.id,
            name: category.name
        }
    end
end
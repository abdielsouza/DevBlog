defmodule DevBlogWeb.ChangesetView do
    use DevBlogWeb, :view

    def render("error.json", %{changeset: changeset}) do
        %{
            errors: Ecto.Changeset.traverse_errors(changeset, &DevBlogWeb.ErrorHelpers.translate_errors/1)
        }
    end
end
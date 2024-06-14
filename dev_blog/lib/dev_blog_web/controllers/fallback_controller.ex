defmodule DevBlogWeb.FallbackController do
    use Phoenix.Controller

    def call(conn, {:error, :not_found}) do
        conn
        |> put_status(:not_found)
        |> put_view(DevBlogWeb.ErrorJSON)
        |> render(:"404")
    end

    def call(conn, {:error, %Ecto.Changeset{} = changeset}) do
        conn
        |> put_status(:bad_request)
        |> put_view(DevBlogWeb.ErrorJSON)
        |> render(:"400", changeset: changeset)
    end
end
defmodule DevBlogWeb.APIAuthErrorHandler do
    use DevBlogWeb, :controller

    def call(conn, :not_authenticated) do
        conn
        |> put_status(401)
        |> json(%{error: %{code: 401, message: "Not authenticated"}})
    end
end
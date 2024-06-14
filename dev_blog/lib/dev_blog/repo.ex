defmodule DevBlog.Repo do
  use Ecto.Repo,
    otp_app: :dev_blog,
    adapter: Ecto.Adapters.MyXQL
end

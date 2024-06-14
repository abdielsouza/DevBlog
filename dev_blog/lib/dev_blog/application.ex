defmodule DevBlog.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      DevBlogWeb.Telemetry,
      DevBlog.Repo,
      {DNSCluster, query: Application.get_env(:dev_blog, :dns_cluster_query) || :ignore},
      {Phoenix.PubSub, name: DevBlog.PubSub},
      # Start the Finch HTTP client for sending emails
      {Finch, name: DevBlog.Finch},
      # Start a worker by calling: DevBlog.Worker.start_link(arg)
      # {DevBlog.Worker, arg},
      # Start to serve requests, typically the last entry
      DevBlogWeb.Endpoint,
      Pow.Store.Backend.MnesiaCache
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: DevBlog.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  @impl true
  def config_change(changed, _new, removed) do
    DevBlogWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end

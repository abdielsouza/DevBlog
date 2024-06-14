# This file is responsible for configuring your application
# and its dependencies with the aid of the Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
import Config

config :dev_blog,
  ecto_repos: [DevBlog.Repo],
  generators: [timestamp_type: :utc_datetime]

# Configures the endpoint
config :dev_blog, DevBlogWeb.Endpoint,
  url: [host: "localhost"],
  adapter: Phoenix.Endpoint.Cowboy2Adapter,
  render_errors: [
    view: DevBlogWeb.ErrorJSON,
    formats: [json: DevBlogWeb.ErrorJSON],
    layout: false
  ],
  pubsub_server: DevBlog.PubSub,
  live_view: [signing_salt: "Mp8f0mq4"]

# Configures the mailer
#
# By default it uses the "Local" adapter which stores the emails
# locally. You can see the emails in your browser, at "/dev/mailbox".
#
# For production it's recommended to configure a different adapter
# at the `config/runtime.exs`.
config :dev_blog, DevBlog.Mailer, adapter: Swoosh.Adapters.Local

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Secure Phoenix backend data access
config :phoenix, :filter_parameters, {:keep, ["id"]}

config :dev_blog, :pow,
  user: DevBlog.Users.User,
  repo: DevBlog.Repo,
  cache_store_backend: Pow.Store.Backend.MnesiaCache

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{config_env()}.exs"

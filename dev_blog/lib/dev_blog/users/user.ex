defmodule DevBlog.Users.User do
  use Ecto.Schema
  use Pow.Ecto.Schema

  schema "users" do
    field :username, :string
    field :role, :string, default: "user"
    pow_user_fields()

    timestamps()
  end

  def changeset(user_or_changeset, attrs) do
    user_or_changeset
    |> pow_changeset(attrs)
    |> Ecto.Changeset.cast(attrs, [:username])
    |> Ecto.Changeset.validate_required([:username])
  end

  @spec changeset_role(Ecto.Schema.t() | Ecto.Changeset.t(), map()) :: Ecto.Changeset.t()
  def changeset_role(user_or_changeset, attrs) do
    user_or_changeset
    |> Ecto.Changeset.cast(attrs, [:role])
    |> Ecto.Changeset.validate_inclusion(:role, ~w(user admin))
  end
end

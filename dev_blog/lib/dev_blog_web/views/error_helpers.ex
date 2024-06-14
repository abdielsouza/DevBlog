defmodule DevBlogWeb.ErrorHelpers do

    def translate_errors({msg, opts}) do
        if count = opts[:count] do
            Gettext.dngettext(DevBlogWeb.Gettext, "errors", msg, msg, count, opts)
        else
            Gettext.dgettext(DevBlogWeb.Gettext, "errors", msg, opts)
        end
    end

end
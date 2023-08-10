export default (plugin) => {
  plugin.controllers.user.allEventsFromFollowing = async (ctx) => {
    const userWithFollowing = await strapi.entityService.findOne(
      "plugin::users-permissions.user",
      ctx.state.user.id,
      {
        populate: {
          following: {
            fields: ["id", "username"],
            populate: {
              events: {
                populate: {
                  publisher: {
                    fields: ["id", "username"],
                  },
                },
              },
            },
          },
        },
      }
    );
    let events = [];
    userWithFollowing.following.forEach((publisher) => {
      events = [...events, ...publisher.events];
    });
    ctx.body = events;
  };

  const usersMeIndex = plugin.routes["content-api"].routes.findIndex(
    (route) => route.path === "/users/me"
  );

  plugin.routes["content-api"].routes.splice(usersMeIndex + 1, 0, {
    method: "GET",
    path: "/users/me/following-events",
    handler: "user.allEventsFromFollowing",
    config: { prefix: "" },
  });

  return plugin;
};

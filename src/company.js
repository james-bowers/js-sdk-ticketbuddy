const client = require("./client");

exports.create = async function({ token }) {
  return await client.post(
    {
      token,
      path: "/company",
      endpoint: client.TICKETBUDDY_BACKEND
    },
    {}
  );
};

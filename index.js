const arc = require("@architect/functions");

exports.handler = arc.http.async(async (req) => {
  return {
    statusCode: 201,
    json: {
      ok: true,
    },
    cors: true,
  };
});

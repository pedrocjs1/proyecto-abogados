const { Wit } = require("node-wit");
const client = new Wit({ accessToken: "TU_ACCESS_TOKEN" });

app.post("/chat", async (req, res) => {
  const userMessage = req.body.message;
  const witResponse = await client.message(userMessage, {});
});

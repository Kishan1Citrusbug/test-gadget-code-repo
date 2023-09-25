/**
 * Route handler for POST chat
 *
 * @param { import("gadget-server").RouteContext } request context - Everything for handling this route, like the api client, Fastify request, Fastify reply, etc. More on effect context: https://docs.gadget.dev/guides/extending-with-code#effect-context
 *
 * @see {@link https://www.fastify.dev/docs/latest/Reference/Request}
 * @see {@link https://www.fastify.dev/docs/latest/Reference/Reply}
 */
import { openAIResponseStream } from "gadget-server/ai";

module.exports = async ({ request, reply, api, logger, connections }) => {
  const { message } = request.body;

  const stream = await connections.openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{role: "user", content: message}],
    stream: true,
  })

  await reply.send(openAIResponseStream(stream))
}

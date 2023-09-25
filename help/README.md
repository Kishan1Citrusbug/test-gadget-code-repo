# Gadgemon: Gotta generate them all!

Welcome to Gadget!

This is the Gadgemon quickstart app. It uses the built-in OpenAI connection to generate sprites for your custom Gadgemon!

Interested in building it from scratch? Check out our [quickstart](https://docs.gadget.dev/guides/getting-started/quickstart).

## Table of contents

- [Getting started](#getting-started)
- [App overview](#app-overview)
  - [Starter template](#starter-template)
  - [Connections](#connections)
  - [Data modeling + template overview](#data-modeling-template-overview)
    - [Template default models](#template-default-models)
  - [Environment variables](#environment-variables)
  - [Backend (actions + code)](#backend-actions-code)
  - [Access roles + API permissions](#access-roles-api-permissions)
  - [Frontend](#frontend)
- [Extending this template](#extending-this-template)
- [Questions?](#questions)

## Getting started

Your app is already deployed to Gadget's hosted infrastructure, and your OpenAI connection will be using Gadget-managed API keys (if you haven't used them all).

To view and test your development environment:
- Click on **your app's domain name** in the top of the left nav bar
- Hover over **Go to app**
- Click on the **Development** instance

You can now create new Gadgemon!

## App overview

### Starter template

This app is built using the **AI app** starter template.

### Connections

The OpenAI connection is used in this app. It is set up using the Gadget-provided OpenAI API keys.

To add your own OpenAI API keys:
- Click on **Connections**
- Click on the **edit button** of the OpenAI connection
- Select **Use your own API keys**
- Enter your OpenAI API keys for the Development environment (and Production, if you plan on deploying this app!)

### Data modeling + template overview

- `gadgemon`
  - a model used to store records of created Gadgemon
  - fields include: `name`, `similar`, and `type` to store user-entered data
  - a `sprite` file field is used to store the OpenAI-generated images

#### Template default models

- `user`
   - keeps track of all users who have signed up
- `session`
  - keeps track of user sessions

### Environment variables

No environment variables are used in this app.

### Backend (actions + code)

- `gadgemon/actions/create.js`: uses the OpenAI connection to make a request to [OpenAI's images API](https://platform.openai.com/docs/api-reference/images) and saves the generated image to the `gadgemon` record's `sprite` field

### Access roles + API permissions

- `unauthenticated` users have been granted permission to call the `gadgemon.read` and `gadgemon.create` actions

### Frontend

This app uses Material UI components for layout and styling.

`frontend/App.css`: default css has been replaced
`frontend/App.jsx`: the Gadgemon frontend lives entirely in this file, and has examples of reading and writing to your backend API using Gadget's React hooks

## Extending this template

This is just a simple demo app. Modify as desired.

Need auth? This quickstart app does not cover setting up or using auth, but you can go through the [blog + auth tutorial(https://docs.gadget.dev/guides/tutorials/blog-with-auth)] to try it out.

Want more AI examples? Check out some of our other [forkable templates](https://gadget.dev/resources/templates), such as the Chat-GPT clone or the AI screenwriter.

## Questions?

Join our [developer Discord](https://ggt.link/discord) if you have any questions about this template or Gadget!
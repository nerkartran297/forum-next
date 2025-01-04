**Step 0:**

> [!IMPORTANT]
>
> -   the application uses Clerk for Authentication and User Management, therefore, you need to create Clerk account [here](https://clerk.dev/) and sets the `CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` environment variables in `.env` file. Also, the different URLs for the Clerk sign-in, sign-up, after sign-in and after sign-up pages.
> -   the application uses a MongoDB database, therefore, you need to create a database and connect it to the application, for this, change the `MONGODB_URL` environment variable in `.env` file located in `server` folder.
> -   the application uses TinyMCE, therefore, you need to create TinyMCE account [here](https://www.tiny.cloud/) and sets the `NEXT_PUBLIC_TINYMCE_API_KEY` environment variable in `.env` file.
> -   the application uses OpenAI API, therefore, you need to create OpenAI account [here](https://openai.com/) and sets the `OPENAI_API_KEY` environment variable in `.env` file.
> -   the application uses RapidAPI, therefore, you need to create RapidAPI account [here](https://rapidapi.com/), subscribe to the [JSearch API](https://rapidapi.com/letscrape-6bRBa3QguO5/api/jsearch/) and sets the `RAPIDAPI_API_KEY` environment variable in `.env` file.

After following all the instructions above, we'll want to create a new webhook on Clerk. To do this, go to the [Clerk Dashboard](https://dashboard.clerk.dev/), click on the "Webhooks" tab, and then click "Add Endpoint". For the Endpoint URL, enter `http://<PASTE-YOUR-LINK-HERE>/api/webhook/clerk`. For the events, select the "user". Then click "Create" to create the webhook. get the signing secret and set it as `CLERK_WEBHOOK_SECRET` environment variable in `.env` file.

**Step 1:**

Download or clone this repo by using the link below:

```bash
git clone https://github.com/ladunjexa/nextjs14-devoverflow.git
```

**Step 2:**

Execute the following command in the root directory of the downloaded repo in order to install dependencies:

```bash
npm install
```

**Step 3:**

Execute the following command in order to run the development server locally:

```bash
npm run dev
```

**Step 4:**

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 📜 Scripts

All scripts are defined in the `package.json` file. Here is a list of all scripts:

| Script          | Action                                      |
| :-------------- | :------------------------------------------ |
| `npm install`   | Installs dependencies                       |
| `npm run dev`   | Starts local dev server at `localhost:3000` |
| `npm run build` | Build your production site to `./dist/`     |
| `npm run start` | Start your production site locally          |
| `npm run lint`  | Run ESLint                                  |

## 🔒 Environment Variables

Environment variables[^12] can be used for configuration. They must be set before running the app.

> [Environment variables](https://en.wikipedia.org/wiki/Environment_variable) are variables that are set in the operating system or shell, typically used to configure programs.

**DevOverflow** uses [Clerk](https://clerk.com), [TinyMCE](https://uploadthing.com/), [RapidAPI](https://rapidapi.com), [OpenAI API](https://openai.com/blog/openai-api) and [MongoDB](https://mongodb.com) as external services. You need to create an account on each of these services and get the required credentials to run the app.

Create a `.env` file in the root directory of the project and add the following environment variables:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<CLERK_PUBLISHABLE_KEY>
CLERK_SECRET_KEY=<CLERK_SECRET_KEY>
NEXT_CLERK_WEBHOOK_SECRET=<CLERK_WEBHOOK_SECRET>

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

NEXT_PUBLIC_TINY_MCE_API_KEY=<YOUR_TINY_MCE_API_KEY>

MONGODB_URL=<YOUR_MONGODB_URL>

NEXT_PUBLIC_SERVER_URL=<YOUR_SERVER_URL>

OPENAI_API_KEY=<YOUR_OPENAI_API_KEY>

RAPID_API_KEY=<YOUR_RAPID_API_KEY>
```

## 🚀 Deployment

#### Deploy to production (manual)

You can create an optimized production build with the following command:

```bash
npm run build
```

#### Deploy on Vercel

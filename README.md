<h1>
  Reddit Room
</h1>
<hr/>
Reddit Room is a *work-in-progress* full-stack MERN application contained in 2 repositories:

- [rkiveai-client](https://github.com/crisramoslazaro/rkiveai-client): front-end
- [rkiveai-server](https://github.com/crisramoslazaro/rkiveai-server): back-end

### what is it for?

Analyzing the sentiment of Reddit posts. It allows users or moderators to select a subreddit and sorting option, and display the top 10 posts of this subreddit (according to the sorting option) them in a table, where they can see the posts title, number of upvotes, number of comments, date of creation, and an AI analysis of the post's sentiment: POSITIVE, NEGATIVE or NEUTRAL.

## Installation and Setup

Clone the repository:

```bash
git clone https://github.com/crisramoslazaro/rkiveai-client.git
cd rkiveai-client
```

Install dependencies:
```bash
npm install
```

Create a .env file based on the .env.example and configure the necessary environment variables.

Run the development server:
```bash
npm run dev
```

## Environment Configuration
The application requires several environment variables to be set.
The .env.example file provides a template for these variables:

**rkiveai-client**
```bash
VITE_API_URL=http://localhost:5005/api
```

**rkiveai-server**
```bash
PORT=5005
ORIGIN=http://localhost:5173
OPENAI_API_KEY=your_key

```

<hr/>

## Assumptions and Limitations
- API Availability: The application assumes that the backend API is available and running at the specified URL.
- OpenAI API Quota: The sentiment analysis feature relies on the OpenAI API, which has usage limits. Exceeding the quota will result in errors.

## Suggestions for Future Improvements

- Enhanced Error Handling: Improve error handling to provide more detailed feedback to the user.
- Pagination: Add pagination to handle large sets of posts more efficiently.
- Caching: Implement caching to reduce the number of API calls and improve performance.
- User Authentication: Add user authentication to allow personalized settings and preferences.
- UI Enhancements: Improve the UI/UX with better styling and responsive design.
- Testing: Add unit and integration tests to improve code reliability and maintainability.
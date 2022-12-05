# task-list-react

This task tracker app is a basic todo tracker that accumulates tracked tasks that can be added into a list and removed when completed.

https://user-images.githubusercontent.com/73509044/194970356-bfd396f5-b684-41c1-a55e-bb7fb3a0a450.mp4


## How It's Made:

**Tech used:** HTML, CSS, JavaScript, React, JSX, JSON server

This project dives deep into React components, props, state, hooks, working with an API and working with a JSON server to store and manipulate state data.

## Optimizations

For future iterations of this project, I would love to add specific time inputs and have a more deatiled form for each task. I'd like the Task component to be more detailed and add features like highlighting the specific tasks that are overdue.

## Lessons Learned:

I loved learning about JSON server. It allows us to create a mock REST API with our own data. We can create a db.json with some data where we can make POST, PUT, PATCH, or DELETE requests and saves changes to the db.json. It even creates unique IDs like a real backend database would. This way we can use useEffect hook to fetch our tasks from the db.json file.




## Usage

### Install dependencies

```
npm install
```

### Run React dev server (http://localhost:3000)

```
npm start
```

### Run the JSON server (http://localhost:5000)

```
npm run server
```

### To build for production

```
npm run build
```









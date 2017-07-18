# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users/:id`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Stories

- `GET /api/stories`
- `POST /api/stories`
- `GET /api/stories/:id`
- `PATCH /api/stories/:id`
- `DELETE /api/stories/:id`

### Comments

- A story's comments will be displayed in the show template for that story
- `POST /api/comments`
- `GET /api/comments/:postId`: get all comments for a particular post
- `POST /api/comments/:postId`: add comment to a post by id
- `DELETE /api/comments/:id`
- `GET /api/comments/:userId`: get all comments for a user(?)

### Follows

- `GET /api/follows/:followerId`: get all follows for a user
- `GET /api/follows/:followeeId`: get all followers for a user
- `POST /api/follows`
- `DELETE /api/follows/:id`

### Likes

- `GET /api/likes/:userId`: get all likes for a user
- `GET /api/likes/:postId`: get all likes for a post
- `POST /api/likes`
- `DELETE /api/likes/id`

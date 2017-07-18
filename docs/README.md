# Small

[Live site][heroku] 

[Trello link][trello]

[heroku]: https://small-project.herokuapp.com/
[trello]: https://trello.com/b/JaDQgzbK/small

## Minimum Viable Product

Small is a website for the little things in life. Inspired by Medium.

It will be built using Ruby on Rails
and React/Redux.  By the end of Week 9, this app will, at a minimum, satisfy the
following criteria with smooth, bug-free navigation, adequate seed data and
sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Stories
- [ ] Commenting on stories
- [ ] Follows and feed
- [ ] Likes
- [ ] Production README [sample](docs/production_readme.md)

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-hierarchy.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: Stories Model, API, and components (3 days)

**Objective:** Stories can be created, read, edited and destroyed through
the API.

### Phase 3: Comments (2 days)

**Objective:** Comments belong to Stories and can be created, read, edited and destroyed through the API.

### Phase 4: Follows and feed (3 days)

**Objective:** Users can follow other users, and their stories will show up in reverse-chronological order in the follower's feed.

### Phase 5: Likes (1 day)

**Objective:** Users can like other user's posts.

### Bonus Features (TBD)
- [ ] Topics/Categories
- [ ] Bookmarks

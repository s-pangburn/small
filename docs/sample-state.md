```js
{
  currentUser: {
    id: 1,
    username: "smalls"
    follows: [
      {
        id: 2,
        username: "biggs"
      }
    ]
    followers: [
      {
        id: 3,
        username: "extra-large"
      }
    ]
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createStory: {errors: ["body can't be blank"]}
    addComment: {errors: ["user must be logged in to continue"]}
  },
  stories: {
    1: {
      title: "Napoleon",
      body: "If you cannot do great things, do small things in a great way.",
      author_id: 1,
      image_url: "./tiny_horse.png"
      comments: [
        {
          body: "That's deep, bro.",
          author_id: 2,
        }
      ]
      likes: [
        {
          id: 2,
          username: "biggs"
        }
      ]
    }
  }
}
```

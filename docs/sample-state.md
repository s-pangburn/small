```js
{
  currentUser: {
    id: 1,
    username: "smalls"
    follows: {
      1: {
        followee_id: 2
      }
    }
    followers: {
      1: {
        follower_id: 2
      }
    }
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
      body: "If you cannot do great things, do small things in a great way",
      author_id: 1,
      image_url: "./tiny_horse.png"
      comments: {
        1: {
          body: "That's deep, bro.",
          author_id: 2,
        }
      }
      likes: {
        1: {
          user_id: 2
        }
      }
    }
  }
}
```

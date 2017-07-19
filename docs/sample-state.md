```js
{
  session: {
    currentUser: {
      id: 1,
      username: "smalls"
      follows: [2, 3, 5]
      followers: [2]
    },
    errors: []
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
  },
  comments: {
    1: {
      id: 1,
      body: "That's deep, bro"
      author_id: 2,
      story_id: 1
    }
  },
  follows: {
    1: {
      follower_id: 1,
      followee_id: 2
    }
  },
  likes: {
    1: {
      user_id: 2,
      story_id: 1
    }
  }

}
```

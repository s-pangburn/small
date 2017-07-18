## Component Hierarchy

**Entry**

**Root**
 - App

**GreetingContainer**
 - Greeting

**SessionFormContainer**
 - SessionForm

**FeedContainer**
 - Feed
 - StoryLinkItem

**StoryContainer**
 - Story
  * Author

**StoryFormContainer**
 - StoryForm

**CommentsContainer**
 - Comment

**CommentFormContainer**
 - CommentForm

**FollowsContainer**
 - Follows/Followers

## Routes

|Path   | Component   |
|-------|-------------|
| "/signup" | "SessionFormContainer" |
| "/login" | "SessionFormContainer" |
| "/:userId/:postId" | "StoryContainer" |
| "/feed" | "FeedContainer" |
| "/stories/new" | "StoryFormContainer"

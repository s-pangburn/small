## Component Hierarchy

**Entry**

**Root**
 - App

**GreetingContainer**
 - Greeting

**LoginModalContainer**
 - LoginModal

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
| "/signup" | "LoginModalContainer" |
| "/login" | "LoginModalContainer" |
| "/:userId/:postId" | "StoryContainer" |
| "/feed" | "FeedContainer" |
| "/stories/new" | "StoryFormContainer"

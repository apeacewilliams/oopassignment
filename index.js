class User {
    constructor(username) {
        this.username = username;
    }
    createPost(forum, title, desc) {
        const newPost = new Post(forum, title, this, desc);
        forum.addPost(newPost);
        return newPost;
    }
    createComment(forum, postTitle, commentContent) {
        const post = forum.findPost(postTitle);
        const newComment = new Comment(this, commentContent);
        post.addComment(newComment);
        return newComment;
    }
}

class Post {
    constructor(forum, title, date, author, description){
        this.forum = forum;
        this.title = title;
        this.date = date;
        this.author = author;
        this.description = description;
        this.comments = [];
    }
    newComment(comment){
        this.comments.push(comment);
    }
    newPost(title, date, text, forum) {
        forum.posts.push(new Post(title, date, this, text));
    } 
}

let user1 = new User("Peace")


const TextAddition = require("./textadd");
const Comment = require("./comment");

class Post extends TextAddition {
    constructor(title, text, author) {
        super(text, author);
        this.title = title;
        this.comments = [];
    }
    createComment(text, user) {
        this.comments.push(new Comment(text, user));
    }
}

module.exports = Post;
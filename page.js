const Post = require("./post");

class Page {
    constructor(title) {
        this.title = title;
        this.posts = [];
    }
    createPost(title, text, author) {
        this.posts.push(new Post(title, text, author));
    }
}

module.exports = Page;
class User {
    constructor(username) {
        this.username = username;
    }
    createPost(page, title, text) {
        page.createPost(title, text, this);
    }
    createComment(post, text) {
        post.createComment(text, this);
    }
}

module.exports = User;
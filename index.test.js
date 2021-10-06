const Comment = require("./comment");
const User = require("./user");
const Post = require("./post");
const Page = require("./page");

test("can create a comment", () => {
    const user = new User("Charlie");
    const comment = new Comment("Hilarious", user);
});

test("comment respects text argument", () => {
    const user = new User("Charlie");
    const comment = new Comment("Hilarious", user);
    expect(comment.text).toBe("Hilarious");
});

test("comment respects user argument", () => {
    const user = new User("Charlie");
    const comment = new Comment("Hilarious", user);
    expect(comment.author).toEqual(user);
});

test("can create a post", () => {
    const user = new User("Charlie");
    const post = new Post("My Thoughts", "Hilarious", user);
});

test("post respects title argument", () => {
    const user = new User("Charlie");
    const post = new Post("My Thoughts", "Hilarious", user);
    expect(post.title).toBe("My Thoughts");
});

test("pages start with no posts", () => {
    const gardening = new Page("gardening");
    expect(gardening.posts).toEqual([]);
});

test("users can create posts on pages", () => {
    const gardening = new Page("gardening");
    const charlie = new User("Charlie");
    charlie.createPost(gardening, "Orchids", "How to grow?");
    expect(gardening.posts.length).toBe(1);
    expect(gardening.posts[0].title).toBe("Orchids");
    expect(gardening.posts[0].text).toBe("How to grow?");
    expect(gardening.posts[0].author).toBe(charlie);
});

test("posts start without any comments", () => {
    const gardening = new Page("gardening");
    const charlie = new User("Charlie");
    charlie.createPost(gardening, "Orchids", "How to grow?");
    const [post] = gardening.posts;
    expect(post.comments).toEqual([]);
});

test("users can create posts on comments", () => {
    const gardening = new Page("gardening");
    const charlie = new User("Charlie");
    charlie.createPost(gardening, "Orchids", "How to grow?");
    const [post] = gardening.posts;
    charlie.createComment(post, "Why is no one helping?");
    expect(post.comments.length).toBe(1);
    expect(post.comments[0].text).toBe("Why is no one helping?");
    expect(post.comments[0].author).toBe(charlie);
});
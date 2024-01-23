exports.getPosts = (req, res, next) => {
    res.status(200).json({
        posts: [{ title: "Primeiro Post", content: "Este é o meu primeiro Post!!!" }],
    })
}
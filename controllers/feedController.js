exports.getPosts = (req, res, next) => {
    res.status(200).json({
        posts: [{ title: "Primeiro Post", content: "Este é o meu primeiro Post!!!" }],
    })
}

exports.createPost = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;

    console.log(title)
    console.log(content)

res.status(201).json({
    error:false,
    msg: "Post criado com sucesso!!"


})
    
}
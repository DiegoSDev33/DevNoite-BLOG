exports.getPosts = (req, res, next) => {
    res.status(200).json({
        posts: [{ title: "Primeiro Post", content: "Este é o meu primeiro Post!!!" }],
    })
}

exports.createPost = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;

    //validacao simples = verificar se os dados foram enviados corretamente

    if(!title || !content ){
       return res.status(400).json({
            error:true,
            msg: "Você precisa enviar os dados corretamente!!"
        })
    }


    // Add este post ao banco de dado
res.status(201).json({
    error:false,
    msg: "Post criado com sucesso!!"


})

}
exports.updatePost = (req, res, next) => {
    const postId = req.params.postID
    res.status(200).json({
        msg: "Post realizado com sucesso!!",
        post : postId
    })
   
}

exports.deletePost = (req, res, next) => {
    const postId = req.params.postID
    res.status(200).json({
        msg: "Post excluido com sucesso!!",
        post : postId
    })
   
}

    

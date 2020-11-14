const Model = () => {
    let response
    const searchUsingISBN = (isbn) => {
       return $.ajax({
            method: "get",
            url:`/isbn/${isbn}`,
            success: result => JSON.parse(result)
        })

    }

    const searchUsingTitle = async (title) => {

        return $.ajax({
            method: "get",
            url:`/title/${title}`,
            success: result => JSON.parse(result)
        })

    }
    const searchUsingAuthor = async (author) => {
        return $.ajax({
            method: "get",
            url:`/author/${author}`,
            success: result => JSON.parse(result)
        })
    }
    const searchUsingPublisher = async (publisher) => {
        return $.ajax({
            method: "get",
            url:`/publisher/${publisher}`,
            success: result => JSON.parse(result)
        })

    }

    const loadFirstBooks = async () => {
        return $.ajax({
            method: "get",
            url:`/firstbooks`,
            success: result => JSON.parse(result)
        })
    }
    return {
        searchUsingISBN,
        searchUsingTitle,
        searchUsingAuthor,
        searchUsingPublisher,
        loadFirstBooks

    }
}
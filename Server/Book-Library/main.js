const Controller = ()=> {
    const view = View();
    const model = Model();
    const loadFirst = async () =>
    {
        model.loadFirstBooks().then((value) => view.renderBooks(value));
        console.log("loading first books")
    }
    const searchForBooksByIsbn = async (isbn) =>{
        model.searchUsingISBN(isbn).then((value) => view.renderBooks(value));
        console.log("searching using isbn completed")
    }
    const searchForBooksByTitle = async (title) =>{
        model.searchUsingTitle(title).then((value) => view.renderBooks(value));
        console.log("searching using title completed")
    }
    const searchForBooksByauthor =  async (author) =>{
        model.searchUsingAuthor(author).then((value) => view.renderBooks(value));
        console.log("searching using author completed")
    }
    const searchForBooksByPublisher =  async (publisher) =>
    {
        model.searchUsingPublisher(publisher).then((value) => view.renderBooks(value));
        console.log("searching using Publisher completed")
    }

    return{
        searchForBooksByIsbn,
        searchForBooksByTitle,
        searchForBooksByauthor,
        searchForBooksByPublisher,
        loadFirst
    }
}


const controller = Controller();
controller.loadFirst();
$(`#searchbtn`).on(`click`,function(){
    const value = $(`#text`).val()
    if (!value){
        return;
    }
    const selectvalue = $(`#bookSelector`).val()
    if(selectvalue === "title"){
        controller.searchForBooksByTitle(value)
    }else if(selectvalue === "author"){
        controller.searchForBooksByauthor(value)
    }else if(selectvalue ==="isbn"){
        controller.searchForBooksByIsbn(value)
    }else if(selectvalue === "publisher"){
        controller.searchForBooksByPublisher(value)
    }

})
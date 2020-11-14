const View = () => {
    let authorT;
    let isbnT;
    let titleT;
    let linkT;
    const source = $(`#books-template`).html();
    const template = Handlebars.compile(source)
    const renderBooks = (book) => {
        $(`#resultContainer`).empty()
        let books = JSON.parse(book)
        let newHtml;

        if(books.totalItems == 0){
            return
        }
        for (let element of books.items) {
        
            if( !element.volumeInfo.industryIdentifiers){
                isbnT = ""
            }
            else{
                isbnT = element.volumeInfo.industryIdentifiers[0].identifier
            }
            if (element.volumeInfo["authors"] === undefined){
                authorT = ""
            }
            else{
                authorT =element.volumeInfo["authors"][0];
                
            }
            if(!element.volumeInfo){
                titleT ="";
            }else{
                titleT = element.volumeInfo.title;
            }
            if(!element.volumeInfo.imageLinks ){
                linkT = ""
            }else {
                linkT = element.volumeInfo.imageLinks["smallThumbnail"];
            }
            
          
            newHtml = template({ isbn: isbnT, author: authorT, title: titleT, link: linkT })
            $(`#resultContainer`).append(newHtml)
        }
    }

    return {
        renderBooks
    }
}
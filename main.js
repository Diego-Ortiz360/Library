const form_ref = document.getElementsByTagName(`form`)[0]; 

const dialogoRef = document.getElementsByTagName(`dialog`)[0];

const openFormButton = document.getElementById(`open_form`);

const cancelButton = document.getElementById(`cancel`);

const saveButton = document.getElementById(`save`);

let title = "";
let author = "";
let pages = "";
let read = false;

const closeDialog = () => dialogoRef.close();


openFormButton.addEventListener(`click`, ()=> dialogoRef.showModal() );

cancelButton.addEventListener(`click`, closeDialog());

function Save()
{
    title = title_input = document.getElementById(`title_input`).value;

    author = author_input = document.getElementById(`author_input`).value;

    pages = pages_input = document.getElementById(`pages_input`).value;

    read = read_input = document.getElementById(`read_input`).value;

    addBookToLibrary(title,author,pages,read);

    console.log (myLibrary);

    generarTabla();

}

saveButton.addEventListener(`click`, (e) =>
{
    e.preventDefault();
    Save();
    closeDialog();
});

const myLibrary = [];

function Book (title, author, pages, read)
{
    this.title = title;

    this.author = author;

    this.pages = pages;

    this.read = read;

    let isRead = ``;


    if (this.read)
    {
        isRead = `already read`;
    }
    else
    {
        isRead = `not read yet`;
    }

    this.info = () => 
    { 
        let information = `${this.title} by ${this.author}, ${pages},  ${isRead}`;

        return (information);
    }

}

function addBookToLibrary(title, author, pages, read)
{
    myLibrary.push (new Book (title,author,pages, read));

}


addBookToLibrary(`Harry el sucio Potter`, `La racista homofobica J.K.Rowling`, 650, false);
addBookToLibrary(`The final empire`, `Brandy Sandy`, 700, true);
addBookToLibrary(`The ascension well`, `Brandy Sandy`,750, true);
addBookToLibrary(`The hero of ages`,`Brandy Sandy`,800, true);


function displayAllTheBooks ()
{
    for (book of myLibrary)
    {
        console.table(book);
    }
}

function generarTabla()
{
    let body = document.getElementsByTagName("body")[0];

    let tabla = document.createElement("table");

    let tblbody = document.createElement("tbody");

    // Creamos tantas hileras como la longitud del array myLibrary

    for (let i = 0; i < myLibrary.length; i++)
    {
        let hilera = document.createElement("tr");

        // Aqui vamos a crear 4 celdas, luego a cada celda le asignamos el valor de la propiedad actual del item de myLibrary actual

        for (let j = 0; j < 4; j++ )
        {
            let celda = document.createElement("td");

            let textoCelda = document.createTextNode(Object.values(myLibrary[i])[j]);
    
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
        }

        tblbody.appendChild(hilera);
    }

    tabla.appendChild(tblbody);

    body.appendChild(tabla);

    tabla.setAttribute("border", "2");
}

generarTabla();
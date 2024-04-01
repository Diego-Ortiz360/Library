
const myLibrary = [];


const amountOfcells = 4;


const createTableRow = (actualBook,amountOfcells) =>
{
    let row = document.createElement(`tr`);

    for (let j = 0; j < amountOfcells; j++)
    {
        let cell = document.createElement(`td`);

        let cellText = document.createTextNode(Object.values(myLibrary[actualBook])[j]);

        cell.appendChild(cellText);
        row.appendChild(cell);
    }

    tblbody.appendChild(row);
}


addBookToLibrary(`Harry el sucio Potter`, `La racista homofobica J.K.Rowling`, 650, false);
addBookToLibrary(`The final empire`, `Brandy Sandy`, 700, true);
addBookToLibrary(`The ascension well`, `Brandy Sandy`,750, true);
addBookToLibrary(`The hero of ages`,`Brandy Sandy`,800, true);


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

    generarTabla();

}





saveButton.addEventListener(`click`, (e) =>
{
    e.preventDefault();
    Save();
    closeDialog();
});

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

   createTableRow(myLibrary.at(-1),amountOfcells);

}


let body = document.getElementsByTagName("body")[0];

let tabla = document.getElementsByTagName("table")[0];

let tblbody = document.createElement("tbody");


function generarTabla()
{

    for (let i = 0; i < myLibrary.length; i++)
    {
        createTableRow(i,amountOfcells);
    }

    tabla.appendChild(tblbody);

    body.appendChild(tabla);

    tabla.setAttribute("border", "2");
}

generarTabla();
showNotes();
let addBtn =document.getElementById('addBtn');
addBtn.addEventListener("click",function(e)
{
    let addTxt=document.getElementById("addTxt");
    let notes =localStorage.getItem("notes");
    if(notes==null)
    {
        notesobj=[];
    }
    else{
        notesobj = JSON.parse(notes);
    }
    notesobj.push(addTxt.value)
    localStorage.setItem("notes",JSON.stringify(notesobj));
    addTxt.value= "";
    console.log(notesobj);
    showNotes();
})
function showNotes() {
    let notes = localStorage.getItem("notes");
    if(notes==null)
    {
        notesobj=[];
    }
    else{
        notesobj = JSON.parse(notes);
    }
    let html = "";
    notesobj.forEach(function (element,index)
    {
        html+= `
        <div class="NoteCard mx-3 my-3" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Note ${index+1}</h5>
                    <p class="card-text">${element+1}</p>
                    <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                </div> 
                </div>`
    });
    let notesElm= document.getElementById('notes');
    if(notesobj.length != 0)
    {
        notesElm.innerHTML= html;
    }
    else{
        notesElm.innerHTML =`<h5>Nothing to show. Please add Notes</h5>`
    }
}
// Function for Delete notes
    function deleteNote(index)
    {
        // console.log('I am deleting',index);
        let notes = localStorage.getItem("notes");
    if(notes==null)
    {
        notesobj=[];
    }
    else{
        notesobj = JSON.parse(notes);
    }
    notesobj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesobj));
    showNotes(); 
    }
    let search= document.getElementById('searchTxt');
    search.addEventListener("input",function()
    {
        let inputVal= search.value;
        // console.log('Event Fired');
        let noteCards = document.getElementsByClassName('noteCard');
        Array.from(noteCards).forEach(function(element)
        {
            let cardTxt= element.getElementsByTagName("p")[0].innerText;
            // console.log(cardTxt)
            if(cardTxt.includes(inputVal))
            {
                element.style.display = "block";
            }
            else
            {
                element.style.display = "none";
            }
        })
    })
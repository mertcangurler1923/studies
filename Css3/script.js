const list=document.getElementById("liste");
const metin=document.getElementById("textbox");
const button=document.getElementById("button");
function listItem(){
    const listItem=document.createElement("ulItem");
    listItem.textContent=metin.value;
    list.appendChild(listItem);
    metin.value="";

    const xListItemButton=document.createElement("xListButton")
    xListItemButton.textContent="   X";  
    xListItemButton.addEventListener("click", () => {
        localStorage.setItem("Items", `${listItem.textContent}`);
        list.removeChild(listItem);
    }
    )
    listItem.appendChild(xListItemButton);
}
button.addEventListener("click",listItem);
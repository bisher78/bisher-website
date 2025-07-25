let box = document.querySelectorAll('.box')
let input = document.getElementById('input')
let boton = document.getElementById('boton')
let in_main = document.getElementById('in_main')
let list = document.getElementById('list')
let btn = document.getElementById('btn')
let drag =null;
btn.onclick=function()
{
    if(in_main.value !='')
{
    box[0].innerHTML +=
    `
    <p class="item" draggable="true">${in_main.value}</p>
    `
    in_main.value=''
}
dragItem();
}
function dragItem()
{
    let Items = document.querySelectorAll('.item')
    Items.forEach(item=>
        {
item.addEventListener('dragstart',function()
    {
drag=item;
    }
)
item.addEventListener('dragend',function()
    {
drag=null;
    }
)
box.forEach(boxs=>
{
    boxs.addEventListener('dragover',function(e)
{
    e.preventDefault()
    this.style.background = 'green'
    this.style.color = 'red'
}
)
boxs.addEventListener('dragleave',function()
{
this.style.background = 'white'
    this.style.color = 'black'
}
)
boxs.addEventListener('drop',function()
{
    boxs.append(drag);
    this.style.background = 'white'
    this.style.color = 'black'
}
)
}
)
} 
) 
}
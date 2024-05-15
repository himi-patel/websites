document.addEventListener("DOMContentLoaded",function()
{
let grid=document.querySelector(".grid")
let width=8;
let squares=[]
let colors=["red","blue","yellow","orange","green","purple"]
    function CreateBoard()
    {
        for (let i = 0; i < width*width; i++) {
        let square=document.createElement("div")
        square.setAttribute("draggable",true)
        square.setAttribute("id",i)
        let randomcolor=Math.floor(Math.random()*colors.length)
           square.style.backgroundColor=colors[randomcolor]
            grid.appendChild(square)

            squares.push(square)

        }
    }
    CreateBoard()

    let colordragged;
    let colorReplaced;
    let squareidDragged;
    let squareidReplaced;

    squares.forEach(square => square.addEventListener("dragstart",dragstart) )
    squares.forEach(square => square.addEventListener("dragend",dragend) )
    squares.forEach(square => square.addEventListener("dragover",dragover) )
    squares.forEach(square => square.addEventListener("dragenter",dragenter) )
    squares.forEach(square => square.addEventListener("dragleave",dragleave) )
    squares.forEach(square => square.addEventListener("drop",drop) )

    function dragstart()
    {
        
        squareidDragged=parseInt(this.id)
        console.log(colordragged)
        colordragged=this.style.backgroundColor
        console.log(this.id,"dragstart")
    }
    function dragover(e)
    {  
        e.preventDefault()
        console.log(this.id,"dragover")
    }
    function dragenter(e)
    {
        e.preventDefault()
        console.log(this.id,"dragenter")
    }
    function dragleave()
    {
        console.log(this.id,"dragleave")
    }
    function drop()
    {
        console.log(this.id,"drop")
        colorReplaced=this.style.backgroundColor
        squareidReplaced=parseInt(this.id)
        this.style.backgroundColor=colordragged
        squares[squareidDragged].style.backgroundColor=colorReplaced
        
        
        
    }
    function dragend()
    {
        console.log(this.id,"dragend")
        let validmoves=[squareidDragged-1,
            squareidDragged -width,
            squareidDragged +1,
            squareidDragged +width]

            let validmove=validmoves.includes(squareidReplaced)

            if(squareidReplaced && validmove)
                {
                    squareidReplaced=null;
                }
                else if(squareidReplaced && !validmove)
                    {
                        squares[squareidReplaced].style.backgroundColor=colorReplaced
                        squares[squareidDragged].style.backgroundColor=colordragged
                    }
                    else squares[squareidDragged].style.backgroundColor=colordragged
    }
    



       
})
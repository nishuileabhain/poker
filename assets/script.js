const draggables = document.querySelectorAll('.draggable')//paragraphs
const containers = document.querySelectorAll('.container')//black rectangles

//what happens when you start dragging the p
draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', () => {
    draggable.classList.add('dragging')
  })
//what happens when you let you of the item being dragged

  draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging')
  })
})

//highlights which container it is currently hovering over
containers.forEach(container => {
  container.addEventListener('dragover', e => {
    e.preventDefault()//this removes the forbidden symbol on the curser when dragging
    const afterElement = getDragAfterElement(container, e.clientY)//used to get position of elements in next function
    console.log(afterElement)
    if (afterElement == null) {
      container.appendChild(draggable)
    const draggable = document.querySelectorAll
    const draggable = document.querySelector('.dragging')
    container.appendChild(draggable) // if not above anything it falls to the bottom of the list
    } else {
      container.insertBefore(draggable, afterElement)

    }
  })
})

//below code determines which position the element is being dragged into
function getDragAfterElement (container, y) {
    const draggableElements = [...container.querySelectorAll('.draggable:not).dragging')]
    //array of draggable elements excluding element currently being dragged around
    //returns the next element
  return draggableElements.reduce((closest, child) => {//closest is value we are reducing to
    const box = child.getBoundingClientRect()
        const offset = y - box.top - box.height / 2 //get centre of each box
    if (offset < 0 && offset > closest.offset) { //make sure hovering above box and not below
      return { offset: offset, element: child }
    } else {
        return closest
    }
    console.log(box);
  }, {offset: Number.NEGATIVE_INFINITY } ).element //so other elements will be closer than this number
}


const draggables = document.querySelectorAll('.draggable')//paragraphs
const containers = document.querySelectorAll('.container')//black rectangles

//what happens when you start dragging the p
draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', () => {
    draggable.classList.add('dragging')
  })

  draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging')
  })
})
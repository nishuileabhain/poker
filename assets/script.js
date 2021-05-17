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
  container.addEventListener('dragover', () => {
    const draggable = document.querySelector('.dragging')
      container.appendChild(draggable)
  })
})


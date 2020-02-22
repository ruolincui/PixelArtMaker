

// When size is submitted by the user, call makeGrid()

document.getElementById('sizePicker').onsubmit = function(event){
  event.preventDefault();
  document.getElementById('pixelCanvas').remove();
  makeGrid();
};

function makeGrid() {
  // Your code goes here!
  // Reset the table each time submit button is clicked
  const canvas = document.createElement('TABLE');
  canvas.setAttribute('id', 'pixelCanvas');
  document.body.appendChild(canvas);

  // Select size input
  let height = document.getElementById('inputHeight').value;
  let width = document.getElementById('inputWidth').value;

  // Add rows and cells to the grid
  for (let i = 0; i < height; i++) {
    let row = canvas.insertRow(i);
    for (let j = 0; j < width; j ++) {
      let cell = row.insertCell(j);
    };
  };

  canvas.addEventListener('click', function(event){
    // Select color input
    let paint = document.getElementById('colorPicker').value;
    // Fill selected cell with selectd color
    event.target.style.backgroundColor = paint;
  });
}

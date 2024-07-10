// Select the DOM elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Initialize chaptersArray with data from localStorage or as an empty array
let chaptersArray = getChapterList() || [];

// Populate the displayed list with stored chapters
chaptersArray.forEach(chapter => {
  displayList(chapter);
});

// Event listener for the button click
button.addEventListener('click', () => {
  if (input.value !== '') {  // make sure the input is not empty
    displayList(input.value); // call the function that outputs the submitted chapter
    chaptersArray.push(input.value);  // add the chapter to the array
    setChapterList(); // update the localStorage with the new array
    input.value = ''; // clear the input
    input.focus(); // set the focus back to the input
  }
});

// Function to display a list item with a delete button
function displayList(item) {
  let li = document.createElement('li');
  let deleteButton = document.createElement('button');
  li.textContent = item; // note the use of the displayList parameter 'item'
  deleteButton.textContent = '❌';
  deleteButton.classList.add('delete'); // this references the CSS rule .delete{width:fit-content;} to size the delete button
  li.append(deleteButton);
  list.append(li);
  deleteButton.addEventListener('click', function () {
    list.removeChild(li);
    deleteChapter(li.textContent); // remove the chapter from the array and localStorage
    input.focus(); // set the focus back to the input
  });
}

// Function to set the localStorage item
function setChapterList() {
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

// Function to get the localStorage item
function getChapterList() {
  return JSON.parse(localStorage.getItem('myFavBOMList'));
}

// Function to delete a chapter from the array and update localStorage
function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1); // remove the last character (the ❌)
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  setChapterList();
}
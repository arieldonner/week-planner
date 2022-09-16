// homepage with Weekly Planner title and center button
//

var $addEntry = document.querySelector('.add-btn');
var $modal = document.querySelector('.overlay');
var $entryForm = document.querySelector('.entry-form');

$addEntry.addEventListener('click', handleAddEntry);
function handleAddEntry(event) {
  $modal.className = 'overlay';
}

$entryForm.addEventListener('submit', handleEntrySubmit);
function handleEntrySubmit(event) {
  event.preventDefault();
  $modal.className = 'overlay hidden';
}

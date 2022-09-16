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
  var entryDay = {
    Day: $entryForm.elements['day-of-week'].value,
    Time: $entryForm.elements.time.value,
    Description: $entryForm.elements.description.value
  };
}

var $daysForm = document.querySelector('.days-buttons');
$daysForm.addEventListener('click', handleClick);

var $span = document.querySelector('span');

function handleClick(event) {
  event.preventDefault();
  if (event.target.id === 'sunday') {
    $span.textContent = 'Sunday';
  } else if (event.target.id === 'monday') {
    $span.textContent = 'Monday';
  } else if (event.target.id === 'tuesday') {
    $span.textContent = 'Tuesday';
  } else if (event.target.id === 'wednesday') {
    $span.textContent = 'Wednesday';
  } else if (event.target.id === 'thursday') {
    $span.textContent = 'Thursday';
  } else if (event.target.id === 'friday') {
    $span.textContent = 'Friday';
  } else if (event.target.id === 'saturday') {
    $span.textContent = 'Saturday';
  }
}

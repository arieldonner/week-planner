// homepage with Weekly Planner title and center button
//

var data = {
  entries: [],
  editing: null,
  nextEntryId: 1
};

var previousTodosJSON = localStorage.getItem('javascript-local-storage');
data = JSON.parse(previousTodosJSON);

window.addEventListener('beforeunload', function () {
  var todosJSON = JSON.stringify(data);
  localStorage.setItem('javascript-local-storage', todosJSON);
}
);

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
    Description: $entryForm.elements.description.value,
    EntryId: data.nextEntryId
  };

  data.nextEntryId++;

  data.entries.push(entryDay);

  if ($td1.textContent !== null) {
    $td1.textContent = data.entries[0].Time;
    $td2.textContent = data.entries[0].Description;
  } else if ($td) { $entryForm.reset(); }
}

var $td1 = document.querySelector('.time1');
var $td2 = document.querySelector('.desc1');

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

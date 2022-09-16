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

var $time1 = document.querySelector('.time1');
var $description1 = document.querySelector('.desc1');
var $time2 = document.querySelector('.time2');
var $description2 = document.querySelector('.desc2');
var $time3 = document.querySelector('.time3');
var $description3 = document.querySelector('.desc3');
var $time4 = document.querySelector('.time4');
var $description4 = document.querySelector('.desc4');
var $time5 = document.querySelector('.time5');
var $description5 = document.querySelector('.desc5');
var $time6 = document.querySelector('.time6');
var $description6 = document.querySelector('.desc6');
var $time7 = document.querySelector('.time7');
var $description7 = document.querySelector('.desc7');
var $time8 = document.querySelector('.time8');
var $description8 = document.querySelector('.desc8');

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

  if ($time1.textContent !== null) {
    $time1.textContent = data.entries[0].Time;
    $description1.textContent = data.entries[0].Description;
  } else if ($time2.textContent !== null) {
    $time2.textContent = data.entries[1].Time;
    $description2.textContent = data.entries[1].Description;
  } else if ($time3.textContent !== null) {
    $time3.textContent = data.entries[2].Time;
    $description3.textContent = data.entries[2].Description;
  } else if ($time4.textContent !== null) {
    $time4.textContent = data.entries[3].Time;
    $description4.textContent = data.entries[3].Description;
  } else {
    $entryForm.reset();
  }
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

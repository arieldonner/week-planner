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

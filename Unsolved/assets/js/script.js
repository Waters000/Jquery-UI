var formEl = $('#skills-form');
var nameInputEl = $('#skill-name');
var dateInputEl = $('#datepicker');
var skillsListEl = $('#skills-list');

// print skills adds the form to the list
var printSkills = function(name, date) {
  var listEl = $('<li>');
  var listDetail = name.concat(' on ', date);
  listEl.addClass('list-group-item').text(listDetail);
  listEl.appendTo(skillsListEl);
};

var handleFormSubmit = function(event) {
  event.preventDefault();

  var nameInput = nameInputEl.val();
  var dateInput = dateInputEl.val();

  if (!nameInput || !dateInput) {
    console.log('You need to fill out the form!');
    return;
  }

  printSkills(nameInput, dateInput);

  nameInputEl.val('');
  dateInputEl.val('');
};

formEl.on('submit', handleFormSubmit);

// Auctocomplete object with array of auto complete names to fill in.
$(function() {
  var skillNames = [
    'Bootstrap',
    'C',
    'C++',
    'CSS',
    'Express.js',
    'Git',
    'HTML',
    'Java',
    'JavaScript',
    'jQuery',
    'JSON',
    'MySQL',
    'Node.js',
    'NoSQL',
    'PHP',
    'Python',
    'React',
    'Ruby'
  ];
  $('#skill-name').autocomplete({
    source: skillNames
  });
});

// Adds datepicker to the date form field
$(function() {
  $('#datepicker').datepicker({
    changeMonth: true,
    changeYear: true
  });
});

// Add sortable feature to the list of skills

$(function() {
  $('#skills-list').sortable({
    placeholder: 'ui-state-highlight'
  });
  $('#skills-list').disableSelection();
});

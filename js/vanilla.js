var path = '/api/v1/shield.svg?type=user&username=';

var people = [];
var uniquePeople = [];

function buildUrl(name) {
  return 'https://' + $('#host').val() + path + name;
}

$('#buddy').keyup(function(event) {
	if (event.keyCode === 13) {
  	$('#add').click();
  }
});

$('#host').keyup(function(event) {
	if (event.keyCode === 13) {
  	$('#update').click();
  }
});

$(document).ready(function() {
	$('#buddy').focus();
	
	$('#add').click(function() {
		people.push($('#buddy').val());
		$('#buddy').val('');
		$('#buddy').focus();
  	});
	
	$('#update').click(function() {
		$.each(people, function(i, person) {
			if ($.inArray(person, uniquePeople) === -1) {
				uniquePeople.push(person);
			}
		});
		for (var i = 0; i < people.length; i++) {
			$('#status').append('<div><img src='+buildUrl(uniquePeople[i])+'></div>');
		}
  });
});

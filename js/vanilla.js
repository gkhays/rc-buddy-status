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

$(document).ready(function() {
	$('#add').click(function() {
		people.push($('#buddy').val());
		
		$.each(people, function(i, person) {
			if ($.inArray(person, uniquePeople) === -1) {
				uniquePeople.push(person);
			}
		});
		
		$('#status').html('');
		
		for (var i = 0; i < people.length; i++) {
			$('#status').append('<div><img src='+buildUrl(uniquePeople[i])+'></div>');
		
			$('#buddy').val('');
			$('#buddy').focus();
		}
  });
});

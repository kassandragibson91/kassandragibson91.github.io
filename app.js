async function getData(selected_major) {
  var response = await fetch('cit5students.json');

  if (response.ok) {
    var data = await resonse.json();
    var student_items = data.filter((item) => item.major == selected_major);
    var templateText = document.getElementById('studentTemplate').innerHTML;
    var compiledTemplate = Handlebars.compile(templateText);
    var compiledHtml = compiledTemplate({ rows: student_items });
    document.getElementById('studentTable').innerHTML = comiledHtml;
  }
  else
  {
    document.querySelector('#studentTable').innerHTML = "There was an error, or student data not found.";
  }
}

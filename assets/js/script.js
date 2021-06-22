let now = moment();

$("#Work Day Scheduler").attr("min", now.add(1, 'd').format('YYYY-MM-DD'));

const currentTimeInterval = setInterval(function () {
  now = moment();
  $("#now").text(`${now.format('MMM DD, YYYY')} at ${now.format('HH:mm:ss')}`);
}, 1000);






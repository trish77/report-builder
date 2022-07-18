$(document).ready(function () {

//  Daterange picker basic

  var start = moment();
  var end = moment();

  function cb( start, end ) {
    $('.datePick span').html(start.format('MMM D, YYYY') + ' - ' + end.format('MMM D, YYYY'));
  }

  $('.datePick, .datePickEff').daterangepicker({
    startDate: start,
    endDate: end,
    locale: {
      format: 'M/DD/YYYY'
    },
    ranges: {
      'Today': [ moment() ],
      'Yesterday': [ moment().subtract(1, 'days') ],
      'Last 7 Days': [ moment().subtract(6, 'days'), moment() ],
      'Last 30 Days': [ moment().subtract(29, 'days'), moment() ],
      'This Month': [ moment().startOf('month'), moment().endOf('month') ],
      'Last Month': [ moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month') ],
      'Year to Date': [ moment().subtract(6, 'M'), moment() ],
      'Last Year': [ moment().subtract(1, 'year'), moment() ]
    }
  });

  $('.datePick').on('.apply.daterangepicker', function ( ev, picker ) {
    $('.datePick span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
  });

  $('.datePickEff').on('.apply.daterangepicker', function ( ev, picker ) {
    $('.datePickEff span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
  });


  $('#startDate, #endDate').daterangepicker({
    startDate: start,
    endDate: end,
    "singleDatePicker": true,
    "autoApply": true,
    locale: {
      format: 'M/DD/YYYY'
    },
    "alwaysShowCalendars": true
  }, function(start, end, label) {
    console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
  });

  $('#startDate').on('.apply.daterangepicker', function ( ev, picker ) {
    $('#startDate span').html(start.format('MMM D, YYYY') + ' - ' + end.format('MMM D, YYYY'));
  });

  $('#endDate').on('.apply.daterangepicker', function ( ev, picker ) {
    $('#startDate span').html(start.format('MMM D, YYYY') + ' - ' + end.format('MMM D, YYYY'));
  });
});



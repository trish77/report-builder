$(document).ready(function () {

//  Daterange picker basic

  var start = moment();
  var end = moment();

  function cb( start, end ) {
    $('.datePick span').html(start.format('M/D/YYYY') + ' - ' + end.format('M/D/YYYY'));
  }

  $('.datePick').daterangepicker({
    startDate: start,
    endDate: end,
    autoUpdateInput: false,
    //autoApply: false,
    locale: {
      format: 'M/DD/YYYY'
    },
    "alwaysShowCalendars": true
  }, function(start, end, label) {
    console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
  });

  $('.datePickEff').daterangepicker({
    startDate: start,
    endDate: end,
    autoUpdateInput: false,
    //autoApply: false,
    locale: {
      format: 'M/DD/YYYY',
      cancelLabel: 'Clear'
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

  $('input[name="datefilter"]').on('apply.daterangepicker', function(ev, picker) {
    $(this).val(picker.startDate.format('M/DD/YYYY') + ' - ' + picker.endDate.format('M/DD/YYYY'));
  });

  $('input[name="datefilter"]').on('cancel.daterangepicker', function(ev, picker) {
    $(this).val('');
  });

  $('.datePickEff').on('.apply.daterangepicker', function ( ev, picker ) {
    $('.datePickEff span').html(start.format('M D, YYYY') + ' - ' + end.format('M D, YYYY'));
  });


  $('#startDate, #endDate, .datePickEnd, .dateCreated').daterangepicker({
    startDate: start,
    endDate: end,
    showDropdowns: true,
   // autoUpdateInput: true,
    "singleDatePicker": true,
   // "autoApply": true,
    locale: {
      format: 'M/DD/YYYY'
    },
    "alwaysShowCalendars": true
  });

  $('.datePickEnd').on('.apply.daterangepicker', function ( ev, picker ) {
    $('.datePickEnd span').html(start.format('M/D/YYYY') + ' - ' + end.format('M/D/YYYY'));
  });

  $('.datePick').on('.apply.daterangepicker', function ( ev, picker ) {
    $('.datePick span').html(start.format('M/D/YYYY') + ' - ' + end.format('M/D/YYYY'));
  });


  //modal datepickers
  $('#startDate').on('.apply.daterangepicker', function ( ev, picker ) {
    $('#startDate span').html(start.format('M/D/YYYY') + ' - ' + end.format('M/D/YYYY'));
  });

  $('#endDate').on('.apply.daterangepicker', function ( ev, picker ) {
    $('#endDate span').html(start.format('M/D/YYYY') + ' - ' + end.format('M/D/YYYY'));
  });


  $('[data-bs-toggle="tooltip"]').tooltip();

});



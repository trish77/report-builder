$(function () {

  var start = moment();
  var end = moment();

  function cb( start, end ) {
    $('.datePick span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
  }

  $('.datePick').daterangepicker({
    autoUpdateInput: false,
    autoApply: true,
    startDate: start,
    endDate: end,
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
    $('.datePick span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
  });

  var saveChecks = [];
  var chkCount = 0;
  var assgTable = $('#assgTable').DataTable({
    ajax: function ( d, cb ) {
      fetch('./MOCK_DATA.json').then(response => response.json()).then(data => cb(data));
    },
    //data: data,
    paging: true,
    pageLength: 500,
    lengthMenu: [ [ 50, 100, 500 - 1 ], [ 50, 100, 500, "All" ] ],
    info: true,
    // searching: true,
    processing: true,
    responsive: true,
    dom: '<"d-flex"l<"ms-auto"i>>rt<"d-flex"l<"ms-auto"p>>',
    language: {
      search: "_INPUT_",
      info: "Showing _START_ to _END_ of _MAX_ records",
      searchPlaceholder: "Quick Search",
      //  lengthMenu: "Show _MENU_ records",
      paginate: {
        previous: '<i class="angle-left"></i>',
        next: '<i class="angle-right"></i>'
      },
    },
    columns: [
      {
        data: null,
        defaultContent: '<input type="checkbox" name="chkbx">',
      },
      { data: 'assignment' },
      { data: 'type' },
      { data: 'affiliation' },
      { data: 'updated_on' },
      { data: 'updated_by' }
    ],

    columnDefs: [ {
      targets: 0,
      orderable: false,
      checkboxes: {
        selectRow: true
      }
    } ],
    select: {
      style: 'multi',
      selector: 'td:first-child',
    },
    order: [ [ 1, 'asc' ] ]
  });

  var groupTable = $('#groupTable').DataTable({
    ajax: function ( d, cb ) {
      fetch('./group_mock_data.json').then(response => response.json()).then(data => cb(data));
    },
    //data: data,
    paging: true,
    pageLength: 500,
    lengthMenu: [ [ 50, 100, 500 - 1 ], [ 50, 100, 500, "All" ] ],
    info: true,
    // searching: true,
    processing: true,
    responsive: true,
    dom: '<"d-flex"l<"ms-auto"i>>rt<"d-flex"l<"ms-auto"p>>',
    language: {
      search: "_INPUT_",
      info: "Showing _START_ to _END_ of _MAX_ records",
      searchPlaceholder: "Quick Search",
      //  lengthMenu: "Show _MENU_ records",
      paginate: {
        previous: '<i class="angle-left"></i>',
        next: '<i class="angle-right"></i>'
      },
    },
    columns: [
      {
        data: null,
        defaultContent: '<input type="checkbox" name="chkbx">',
      },
      { data: 'group' },
      { data: 'count' },
      { data: 'affiliation' },
      { data: 'updated_on' },
      { data: 'updated_by' }
    ],

    columnDefs: [ {
      targets: 0,
      orderable: false,
      checkboxes: {
        selectRow: true
      }
    } ],
    select: {
      style: 'multi',
      selector: 'td:first-child',
    },
    order: [ [ 1, 'asc' ] ]
  });

  var studentTable = $('#studentTable').DataTable({
    ajax: function ( d, cb ) {
      fetch('./studentselect.json').then(response => response.json()).then(data => cb(data));
    },
    //data: data,
    paging: true,
    pageLength: 500,
    lengthMenu: [ [ 50, 100, 500 - 1 ], [ 50, 100, 500, "All" ] ],
    info: true,
    // searching: true,
    processing: true,
    dom: '<"d-flex"l<"ms-auto"i>>rt<"d-flex"l<"ms-auto"p>>',
    language: {
      search: "_INPUT_",
      info: "Showing _START_ to _END_ of _MAX_ records",
      searchPlaceholder: "Quick Search",
      //  lengthMenu: "Show _MENU_ records",
      paginate: {
        previous: '<i class="angle-left"></i>',
        next: '<i class="angle-right"></i>'
      },
      // processing:  '<div class="d-flex justify-content-center"><div class="spinner-border text-success" role="status"><span class="visually-hidden">Loading...</span></div></div>'
    },

    responsive: true,
    columns: [
      {
        data: null,
        defaultContent: '<input type="checkbox" name="chkbx">',
      },
      { data: 'name' },
      { data: 'ID' },
      { data: 'job_category' },
      { data: 'job_title' },
      { data: 'affiliation' },
      { data: 'last_login' }
    ],
    columnDefs: [ {
      targets: 0,
      orderable: false,
      checkboxes: {
        selectRow: true
      }
    } ],
    select: {
      style: 'multi',
      selector: 'td:first-child',
    },
    order: [ [ 1, 'asc' ] ]
  });

  $('.filter-search').on('keyup change', function () {
    studentTable.search(this.value).draw();
  });

  $('.group-filter-search').on('keyup change', function () {
    groupTable.search(this.value).draw();
  });

  $('.assg-filter-search').on('keyup change', function () {
    assgTable.search(this.value).draw();
  });


  $("<div class=\"d-flex selectAllCheck\">\n" +
    "          <input type=\"checkbox\" id=\"select-all\">\n" +
    "        </div>").insertBefore("#assgTable");

  $("<div class=\"d-flex selectAllCheck\">\n" +
    "          <input type=\"checkbox\" id=\"select-all-grp\">\n" +
    "        </div>").insertBefore("#groupTable");

  $("<div class=\"d-flex selectAllCheck\">\n" +
    "          <input type=\"checkbox\" id=\"select-all-stu\">\n" +
    "        </div>").insertBefore("#studentTable");


  selectPersistedRows(assgTable, groupTable);

// select checkboxes
  $('#get-selected').on('click', function () {
    var data = table.rows(function ( idx, data, node ) {
      return $(node).find('input[type="checkbox"][name="chkbx"]').prop('checked');
    }).data().toArray();

    console.log(data);
  });

  $('#select-all').on('change', function () {
    var checked = $(this).prop('checked');

    assignTable.cells(null, 0).every(function () {
      var cell = this.node();
      $(cell).find('input[type="checkbox"][name="chkbx"]').prop('checked', checked);
      persistSelection(assignTable.row(this).index(), $(this).prop('checked'));
    });
  })

  $('#select-all-grp').on('change', function () {
    var checked = $(this).prop('checked');

    groupTable.cells(null, 0).every(function () {
      var cell = this.node();
      $(cell).find('input[type="checkbox"][name="chkbx"]').prop('checked', checked);
      persistSelection(groupTable.row(this).index(), $(this).prop('checked'));
    });
  })

  $('#select-all-stu').on('change', function () {
    var checked = $(this).prop('checked');

    studentTable.cells(null, 0).every(function () {
      var cell = this.node();
      $(cell).find('input[type="checkbox"][name="chkbx"]').prop('checked', checked);
      persistSelection(studentTable.row(this).index(), $(this).prop('checked'));
    });
  })


  function selectPersistedRows( table ) {
    if ( !( sessionStorage.rowKeyStore ) )
      return;

    var rowKeys = JSON.parse(sessionStorage.rowKeyStore);
    for ( var key in rowKeys ) {
      $(table.row(key).node()).prop('checked');
    }
  }

  function persistSelection( index, isSelected ) {
    var ss = sessionStorage;
    if ( !( ss.rowKeyStore ) ) {
      ss.rowKeyStore = "{}";
    }
    var rowKeys = JSON.parse(ss.rowKeyStore);
    if ( isSelected === false && rowKeys.hasOwnProperty(index) ) {
      console.log('removing row ' + index + ' from selection list');
      delete rowKeys[ index ];
    } else if ( isSelected ) {
      rowKeys[ index ] = true;
    }
  }

  /*
   $('th:nth-child(0) input').on('click', function () {
   chkCount = 0;
   if ( $(this).is(':checked') ) {

   $('td:nth-child(0) input').attr('checked', 'checked');

   // Store all checkboxes checked into array
   $('tr td:nth-child(0) input').each(function () {
   chkCount += 1;
   var currentRow = $(this).closest('tr');
   var col0Chk = currentRow.find('td:eq(0)').html();
   $('td:nth-child(0) input', currentRow).attr('checked', 'checked');
   saveChecks.push(col0Chk);
   });

   } else {
   saveChecks = [];
   $('td:nth-child(0) input').attr('checked', false);
   $('tr td:nth-child(0) input').each(function () {


   var rowChk = $(this).closest('tr');
   var preChkD = rowChk.find('td:eq(0)').html();

   $.each(saveChecks, function ( indexChks, valueChks ) {
   if ( valueChks == preChkD ) {
   chkCount -= 1;
   $('td:nth-child(5) input', rowPAE).attr('checked', 'checked');
   }
   });

   });
   }

   //chkCount = Math.abs(chkCount);
   // document.getElementById('PreAlgEI').value = preAECount;

   });

   /!***. Handle individual checkboxes checked/un-checked, column 5 *****!/
   $('td:nth-child(0) input').on('click', function () {
   if ( $(this).is(':checked') ) {
   chkCount += 1;
   } else {
   chkCount -= 1;
   }

   //chkCount = Math.abs(chkCount);
   //document.getElementById('PreAlgEI').value = preAECount;
   });*/

//charts
  const assgNum = [ 35, 30, 20, 15 ];
  const assgNumPercent = assgNum[ 0 ] + assgNum[ 1 ] + assgNum[ 2 ];
  const counter = {
    id: 'counter',
    beforeDraw( chart, args, options ) {
      const { ctx, chartArea: { top, right, bottom, left, width, height } } = chart;
      ctx.save();
      ctx.fillStyle = options.fontColor;
      ctx.fillRect(width / 2, top + ( height / 2 ), 10, 10)
      ctx.font = options.fontSize + ' ' + options.fontFamily;
      ctx.textAlign = 'center';
      ctx.fillText(assgNumPercent + '%', width / 2, top + ( height / 2 ));

    }
  };

  // chart setup Completed
  
  const data = {
    labels: [ 'On Time', 'Late', 'Failed' ],
    datasets: [ {
      data: assgNum,
      cutout: '75%',
      borderRadius: [ 10, 10, 10, 0 ],
      backgroundColor: [
        'rgba(87,200,150,1)',
        'rgba(133,214,177,0.8)',
        'rgba(175,227,204, 0.5)',
        'rgba(240,241,241,1)',
      ],
      borderColor: [
        'rgba(87,200,150,1)',
        'rgba(133,214,177, 0.8)',
        'rgba(175,227,204, 0.5)',
        'rgba(240,241,241,1)',
      ]
    } ]
  };

  // config block
  const config = {
    type: "doughnut",
    data,
    options: {
      plugins: {
        counter: {
          fontColor: '#3E5359',
          fontSize: '120px',
          fontFamily: 'serif'
        }
      }
    },
    plugins: {
      counter: [ counter ],
      responsive: true,
      title: {
        display: true,
        text: 'COMPLETED',
      },
      legend: {
        position: 'bottom',
        labels: {
          boxWidth: 15,
        },
      },
    }
  };

// init assgCompleted chart block
  const assgCompleted = new Chart(
    document.getElementById("assgCompleted"),
    config
  );


  let canvas2 = document.getElementById("other");
  let assgNum2 = [ 35, 65 ];
  let other = new Chart(canvas2, {
    type: "doughnut",
    data: {
      labels: [ 'Past Due' ],
      datasets: [ {
        label: "Quantity",
        cutout: '75%',
        borderRadius: 10,
        //offset: -2,
        data: assgNum2,
        backgroundColor: [
          'rgba(254,152,129,8)',
          'rgba(240,241,241,1)',
        ],
      } ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            boxWidth: 15,
          }
        },
        title: {
          display: true,
          text: 'PAST DUE'
        }
      }
    }
  });

  let canvas3 = document.getElementById("pastDueCompleted");
  let assgNum3 = [ 10, 30, 60 ];
  let pastDueCompleted = new Chart(canvas3, {
    type: "doughnut",
    data: {
      labels: [ 'Exempt', 'Delinquent' ],
      datasets: [ {
        label: "Quantity",
        cutout: "75%",
        borderRadius: 10,
        data: assgNum3,
        backgroundColor: [
          'rgba(122,172,237, 0.8)',
          'rgba(209,219,231, 0.8)',
          'rgba(240,241,241,1)',
        ]
      } ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            boxWidth: 15,
          },
        },
        title: {
          display: true,
          text: 'OTHER'
        }
      }
    }
  });

})
;



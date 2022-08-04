$(function () {

  var saveChecks = [];
  var chkCount = 0;
  var assgTable = $('#assgTable').DataTable({
    ajax: function ( d, cb ) {
      fetch('./assignments.json').then(response => response.json()).then(data => cb(data));
    },
    //data: data,
    // paging: true,
    pageLength: 500,
    // lengthMenu: [ [ 50, 100, 500 - 1 ], [ 50, 100, 500, "All" ] ],
    // info: true,
    colReorder: true,
    searching: true,
    processing: true,
    responsive: true,
    scrollY: 600,
    //scrollX: false,
    //scrollCollapse: true,
    fixedHeader: {
      header: true,
      //footer: true
    },
    dom: '<"d-flex my-2">rt',
    columns: [
      { data: null },
      { data: 'assignments' },
      { data: 'type' },
      { data: 'affiliation' },
      { data: 'updated_on' },
      { data: 'updated_by' },
      { data: 'eff_date' },
      { data: 'go_live_date' }
    ],

    columnDefs: [ {
      targets: 0,
      orderable: false,
      'render': function ( data, type, row, meta ) {
        if ( type === 'display' ) {
          data = '<div class="checkbox form-check"><input type="checkbox" class="dt-checkboxes form-check-input"><label class="form-check-label"></label></div>';
        }

        return data;
      },
      'checkboxes': {
        'selectRow': true,
        'selectAllRender': '<div class="checkbox form-check"><input type="checkbox" class="dt-checkboxes form-check-input"><label class="form-check-label"></label></div>'
      }
    } ],
    select: {
      style: 'multi',
      selector: 'td:first-child',
    },
    order: [ [ 1, 'asc' ] ]
  });


  // config navigation

  var filterCol = $('#filterCol').find('.form-control'),
    tableCol = $('#dataCol'),
    chksSelect = $('.form-check-input[name=filterColChk]'),
    secondLevel = $(".secondLevel");
  $(tableCol).click(function () {
    if ( !$(event.target).is(filterCol, chksSelect) ) {
      secondLevel.removeClass('d-none');
    } else {
      return false;
    }
  });

  $('.assg-filter-search').on('keyup change', function () {
    assgTable.search(this.value).draw();
  });

  $('#sidebarCollapse').on('click', function () {
    $('#filterCol').toggleClass('active');
    $('#dataCol').toggleClass('col-12');
    assgTable.columns.adjust().draw();
  });
});



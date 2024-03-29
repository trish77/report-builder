$(function () {

  var saveChecks = [];
  var chkCount = 0;

  var groupTable = $('#groupTable').DataTable({
    ajax: function ( d, cb ) {
      fetch('./groups.json').then(response => response.json()).then(data => cb(data));
    },
    pageLength: 500,
    searching: true,
    processing: true,
    scrollCollapse: true,
    fixedHeader: {
      header: true,
    },
    dom: '<"d-flex my-2">rt',
    columns: [
      { data: null },
      { data: 'group' },
      { data: 'count' },
      { data: 'affiliation' },
      { data: 'created_date' },
      { data: 'updated_on' },
      { data: 'updated_by' }
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
    stateSave: true,
    select: {
      style: 'multi',
      selector: 'td:first-child',
    },
    order: [ [ 1, 'asc' ] ]
  });


  var studentTable = $('#studentTable').DataTable({
    ajax: function ( d, cb ) {
      fetch('./students.json').then(response => response.json()).then(data => cb(data));
    },

    pageLength: 500,
    searching: true,
    processing: true,
    fixedHeader: {
      header: true,
    },
    dom: '<"d-flex my-2">rt',
    columns: [
      { data: null },
      { data: 'name', className: 'nowrap' },
      { data: 'stu_id', className: 'nowrap' },
      { data: 'dept', className: 'nowrap' },
      { data: 'job_cat', className: 'nowrap' },
      { data: 'job_title', className: 'nowrap' },
      { data: 'job_function', className: 'nowrap' },
      { data: 'affiliation', className: 'nowrap' },
      { data: 'created_date', className: 'nowrap' },
      { data: 'hire_date' },
      { data: 'last_login' },
      { data: 'updated_on' },
      { data: 'updated_by', className: 'nowrap' }
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
    }
    ],
    //stateSave: true,
    select: {
      style: 'multi',
      selector: 'td:first-child',
    },
    order: [ [ 1, 'asc' ] ]
  });


//search filters instantiation

  $('.filter-search').on('keyup change', function () {
    studentTable.search(this.value).draw();
  });

  $('.group-filter-search').on('keyup change', function () {
    groupTable.search(this.value).draw();
  });

  $('.admin-name-search').on('keyup change', function () {
    groupTable.search(this.value).draw();
  });


});
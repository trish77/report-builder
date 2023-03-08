$(function () {

  var saveChecks = [];
  var chkCount = 0;


  var savedReportAdminTable = $('#savedReportAdminTable').DataTable({
    ajax: function ( d, cb ) {
      fetch('./saved-reports-me.json').then(response => response.json()).then(data => cb(data));
    },
    //data: data,
    colReorder: true,
    pageLength: 500,
    searching: true,
    processing: true,
    fixedHeader: {
      header: true,
    },
    dom: '<"d-flex my-2">rt',
    columnDefs: [ {
      orderable: false,
      data: null,
      defaultContent: "",
      className: 'select-checkbox',
      targets: 0,
      width: 30
    } ],
    select: {
      style: 'multi',
      selector: 'td:first-child'
    },
    order: [ [ 1, 'asc' ] ],

    columns: [
      { data: null },
      { data: 'name' },
      { data: 'created_on' },
      { data: 'created_by' },
      { data: 'report' },
      {
        data: 'access',
        className: 'text-center',
        render: function ( data, type ) {
          if ( type === 'display' ) {
            if ( data !== 'Private' ) {
              return '<span style="width: 96px; height: 25px;" class="btn btn-sm bg-success">' + data + '</span>';
            }
          }
          return data;

        }
      },
      {
        data: 'actions',
        orderable: false,
        className: 'actions',
        render: function ( data, columns, row ) {
          return ` <div id="dropdown">
            <a class="dropdown-toggle text-decoration-none" id="dropActions"
               data-bs-toggle="dropdown" aria-expanded="false">
              <i class="icon-hamburger"></i>
            </a>
            <ul class="dropdown-menu" aria-labelledby="dropActions">
              <li><a class="dropdown-item" href="assg-progress-report.html">Run</a></li>
              <li><a class="dropdown-item" href="edit-report.html">Edit</a></li>
              <li><a class="dropdown-item" href="#">Duplicate</a></li>
              <li><a class="dropdown-item" href="#">Make private</a></li>
              <li><a class="dropdown-item text-danger" href="#">Delete</a></li>
            </ul>
          </div>
          <div id="dropOut" class="bg-white invisible d-flex flex-row align-items-center">
              <i class="text-decoration-none text-secondary icon icon-run me-2"></i>
              <a href="assg-progress-report.html" class="text-secondary text-decoration-none text-dark">Run</a>
              <i class="text-decoration-none text-secondary icon icon-edit ms-5 me-2 mx-1"></i>
              <a href="select-students.html" class="text-secondary text-dark text-decoration-none">Edit</a>
            </div>`
        }
      }
    ]

  });

  var savedReportTable = $('#savedReportTable').DataTable({
    ajax: function ( d, cb ) {
      fetch('./saved-reports.json').then(response => response.json()).then(data => cb(data));
    },
    colReorder: true,
    pageLength: 500,
    searching: true,
    processing: true,
    fixedHeader: {
      header: true,
    },
    dom: '<"d-flex my-2">rt',
    columnDefs: [ {
      orderable: false,
      data: null,
      defaultContent: "",
      className: 'select-checkbox',
      targets: 0,
      width: 30
    } ],
    select: {
      style: 'multi',
      selector: 'td:first-child'
    },
    order: [ [ 1, 'asc' ] ],
    columns: [
      { data: null },
      {
        data: 'name' /*,
         render: function ( data, columns, row ) {
         return ``
         }*/
      },
      { data: 'created_on' },
      { data: 'created_by' },
      { data: 'report' },
      { data: 'access' },
      {
        data: 'actions',
        render: function ( data, columns, row ) {
          return `<div id="dropdown">
            <a class="dropdown-toggle tableActions text-decoration-none" 
            id="dropActions"       
               data-bs-toggle="dropdown" aria-expanded="false">
              <i class="icon-hamburger"></i>
            </a>
            <ul class="dropdown-menu" aria-labelledby="dropActions">
              <li><a class="dropdown-item" href="assg-progress-report.html">Run</a></li>
              <li><a class="dropdown-item" href="edit-report.html">Edit</a></li>
              <li><a class="dropdown-item" href="#">Duplicate</a></li>
              <li><a class="dropdown-item" href="#">Make private</a></li>
              <li><a class="dropdown-item text-warning" id="deleteRow" href="#">Delete</a></li>
            </ul>
          </div><div id="dropOut" class="bg-white invisible d-flex flex-row align-items-center">
            <div data-name="popover-content">
              <i className="text-decoration-none text-secondary icon icon-run me-2"></i>
               <a href="assg-progress-report.html" class="text-secondary text-decoration-none text-dark">Run</a>
              <i class="text-decoration-none text-secondary icon icon-edit ms-5 me-2 mx-1"></i>
              <a href="edit-report.html" class="text-secondary text-dark text-decoration-none">Edit</a>
              </div>
        </div>`
        },
      }
    ]
  });

 /* savedReportTable.rows().eq(0).each( function ( index ) {
    var row = table.row( index );

    var data = row.data();
    // ... do something with data(), or row.node(), etc
  } );*/

  $('th.select-checkbox').on("click", function ( e ) {
    if ( $(this).parent().hasClass('selected') ) {
      savedReportAdminTable.rows().deselect();
      $(this).parent().removeClass('selected');
    } else {
      $(this).parent().addClass('selected');
      savedReportAdminTable.rows().select();
    }
  });

  $('.table tbody').on("click", 'tr td.select-checkbox', function ( e ) {
    // if ($(this).parent().hasClass('selected')) {
    setTimeout(function () {
      $('#saveReportsToast').show("slow")
    }, 1500);

    setTimeout(function () {
      $('#saveReportsToast').hide("slow")
    }, 10000);
  });

  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
  var popoverList = popoverTriggerList.map(function ( popoverTriggerEl ) {
    return new bootstrap.Popover(popoverTriggerEl)
  })


/*  $('.table').on('click', 'tbody > tr', function(){
    var rowValue = $(this).attr("value");
    var targetBox = $("." + inputValue);
    $(".box").not(targetBox).hide();
    $(targetBox).show();
  });*/

  /*var triggerTabList = [].slice.call(document.querySelectorAll('#tabs button'))
  triggerTabList.forEach(function (triggerEl) {
    var tabTrigger = new bootstrap.Tab(triggerEl)

    triggerEl.addEventListener('click', function (event) {
      event.preventDefault()
      tabTrigger.show()
    })
  })*/

  $('.table').on( "mouseover", 'tbody > tr', function (  ) {
      $('#dropOut').removeClass('invisible');
    });


  $('.table').on( "mouseout", 'tbody > tr', function (  ) {
      $('#dropOut').addClass('invisible')
    });

  var myDropdown = $('tbody > tr #dropdown')
  if ( myDropdown ) {
    myDropdown.on('click', '#dropActions 1', function () {
      $('#dropOut').addClass('invisible')

    })
  }



});
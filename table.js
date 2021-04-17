var table1; // use a global for the submit and return data rendering in the examples
var table2;
var table3;
var editor;
var data =  [
    {
      "name": "Nixon",
      "position": "System Architect",
      "office": "Edinburgh",
      "extn": "5421",
      "salary": "320800",
      "start_date": "2011-04-25"
    },
    {
      "name": "Winters",
      "position": "Accountant",
      "office": "Tokyo",
      "extn": "8422",
      "salary": "170750",
      "start_date": "2011-07-25"
    },
    {
      "name": "Ashton",
      "position": "Junior Technical Author",
      "office": "San Francisco",
      "extn": "1562",
      "salary": "86000",
      "start_date": "2009-01-12"
    }
    ]

$(document).ready(function() {
    // editor = new $.fn.dataTable.Editor();

    for (var i=0;i<data.length;i++){
      jQuery('#foods2').append(jQuery("<option></option>").val(data[i].name).text(data[i].name))
      jQuery('#foods3').append(jQuery("<option></option>").val(data[i].name).text(data[i].name))
    }
    table1 = $('#table1').DataTable({
      columns: [
        { data: "name"},
        { data: "position" },
        { data: "office" },
        { data: "extn" },
        { data: "start_date" },
        { data: "salary" },
    ]
    });
        // Delete a record

    table2 = $('#table2').DataTable(
         {"footerCallback": function(row, data, start, end, display) {
            var api = this.api();

            $( api.column( 5 ).footer() ).html(
              api.column( 5 ).data().reduce( function ( a, b ) {
                  return parseFloat(a) + parseFloat(b);
              }, 0 )
            );

          },
        columns: [
            { data: "name"},
            { data: "position" },
            { data: "office" },
            { data: "extn" },
            { data: "start_date" },
            { data: "salary" },
        ]
    }
     );
     table3 = $('#table3').DataTable(
        {"footerCallback": function(row, data, start, end, display) {
            var api = this.api();
           
            $( api.column( 5 ).footer() ).html(
              api.column( 5 ).data().reduce( function ( a, b ) {
                  return parseFloat(a) + parseFloat(b);
              }, 0 )
            );

          },
       columns: [
           { data: "name"},
           { data: "position" },
           { data: "office" },
           { data: "extn" },
           { data: "start_date" },
           { data: "salary" },
          //  {
          //      data: null,
          //      className: "dt-center editor-delete",
          //      defaultContent: '<i class="fa fa-trash"/>',
          //      orderable: false
          //  }
       ]
   }
    );

    $('#table2').on( 'click', 'tbody tr', function () {
        table2.row(this).remove().draw();
  } );

    $('#table3').on( 'click', 'tbody tr', function () {
      table3.row(this).remove().draw();
    } );

    $('#foods2-button').click(function() {
      var food = $('#foods2 option:selected').text();
      table2.rows.add(data.filter(obj => obj.name === food)).draw()
    })
    $('#foods3-button').click(function() {
      var food = $('#foods3 option:selected').text();
      table3.rows.add(data.filter(obj => obj.name === food)).draw()
    })
    table1.rows.add(data).draw();
} );
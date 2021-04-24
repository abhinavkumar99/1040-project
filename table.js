var table1; // use a global for the submit and return data rendering in the examples
var table2;
var table3;
var editor;
var table3sum = [0,0,0,0,0,0];
var data = [{"Food Item": "Pulled Pork", "Location": "True Balance", "Calories": 240, "Total Fat (g)": 15.0, "Total Carbohydrate (g)": 0, "Protein (g)": 25, "Cholesterol (mg)": 90, "Sodium (mg)": 300}, {"Food Item": "Southwestern Bowl", "Location": "True Balance", "Calories": 580, "Total Fat (g)": 17.0, "Total Carbohydrate (g)": 77, "Protein (g)": 30, "Cholesterol (mg)": 65, "Sodium (mg)": 1320}, {"Food Item": "Asian Noodle Bowl", "Location": "True Balance", "Calories": 710, "Total Fat (g)": 13.0, "Total Carbohydrate (g)": 127, "Protein (g)": 20, "Cholesterol (mg)": 55, "Sodium (mg)": 1040}, {"Food Item": "Harvest Bowl", "Location": "True Balance", "Calories": 520, "Total Fat (g)": 25.0, "Total Carbohydrate (g)": 57, "Protein (g)": 21, "Cholesterol (mg)": 55, "Sodium (mg)": 570}, {"Food Item": "Mediterranean Bowl", "Location": "True Balance", "Calories": 560, "Total Fat (g)": 28.0, "Total Carbohydrate (g)": 52, "Protein (g)": 27, "Cholesterol (mg)": 55, "Sodium (mg)": 830}, {"Food Item": "Hearty Portobello Bowl ", "Location": "True Balance", "Calories": 450, "Total Fat (g)": 26.0, "Total Carbohydrate (g)": 47, "Protein (g)": 11, "Cholesterol (mg)": 0, "Sodium (mg)": 600}, {"Food Item": "Cilantro-Lime Brown Rice", "Location": "True Balance", "Calories": 140, "Total Fat (g)": 1.5, "Total Carbohydrate (g)": 29, "Protein (g)": 3, "Cholesterol (mg)": 0, "Sodium (mg)": 50}, {"Food Item": "Quinoa Lentil Blend", "Location": "True Balance", "Calories": 90, "Total Fat (g)": 1.5, "Total Carbohydrate (g)": 16, "Protein (g)": 4, "Cholesterol (mg)": 0, "Sodium (mg)": 0}, {"Food Item": "Chilled Roasted Mushrooms", "Location": "True Balance", "Calories": 90, "Total Fat (g)": 9.0, "Total Carbohydrate (g)": 2, "Protein (g)": 2, "Cholesterol (mg)": 0, "Sodium (mg)": 100}, {"Food Item": "Grilled Portobello Mushroom", "Location": "True Balance", "Calories": 70, "Total Fat (g)": 7.0, "Total Carbohydrate (g)": 2, "Protein (g)": 1, "Cholesterol (mg)": 0, "Sodium (mg)": 60}, {"Food Item": "Roasted Beets", "Location": "True Balance", "Calories": 25, "Total Fat (g)": 0.0, "Total Carbohydrate (g)": 6, "Protein (g)": 1, "Cholesterol (mg)": 0, "Sodium (mg)": 45}, {"Food Item": "Roasted Butternut Squash", "Location": "True Balance", "Calories": 80, "Total Fat (g)": 2.5, "Total Carbohydrate (g)": 14, "Protein (g)": 1, "Cholesterol (mg)": 0, "Sodium (mg)": 5}, {"Food Item": "Chilled Roasted Broccoli", "Location": "True Balance", "Calories": 50, "Total Fat (g)": 3.5, "Total Carbohydrate (g)": 4, "Protein (g)": 2, "Cholesterol (mg)": 0, "Sodium (mg)": 65}, {"Food Item": "Chocolate Brownie", "Location": "True Balance", "Calories": 260, "Total Fat (g)": 9.0, "Total Carbohydrate (g)": 45, "Protein (g)": 2, "Cholesterol (mg)": 0, "Sodium (mg)": 150}, {"Food Item": "Greek Salad", "Location": "North Ave Dining", "Calories": 210, "Total Fat (g)": 13.0, "Total Carbohydrate (g)": 13, "Protein (g)": 10, "Cholesterol (mg)": 30, "Sodium (mg)": 1640}, {"Food Item": "Ceasar Salad", "Location": "North Ave Dining", "Calories": 90, "Total Fat (g)": 7.0, "Total Carbohydrate (g)": 4, "Protein (g)": 2, "Cholesterol (mg)": 5, "Sodium (mg)": 200}, {"Food Item": "Old-Fashioned Colesaw", "Location": "North Ave Dining", "Calories": 150, "Total Fat (g)": 14.0, "Total Carbohydrate (g)": 5, "Protein (g)": 1, "Cholesterol (mg)": 10, "Sodium (mg)": 150}, {"Food Item": "Tossed Salad", "Location": "North Ave Dining", "Calories": 30, "Total Fat (g)": 2.0, "Total Carbohydrate (g)": 3, "Protein (g)": 0, "Cholesterol (mg)": 0, "Sodium (mg)": 110}, {"Food Item": "Dinner Roll", "Location": "North Ave Dining", "Calories": 100, "Total Fat (g)": 1.5, "Total Carbohydrate (g)": 18, "Protein (g)": 3, "Cholesterol (mg)": 5, "Sodium (mg)": 85}, {"Food Item": "Cream of Mushroom Soup ", "Location": "North Ave Dining", "Calories": 150, "Total Fat (g)": 9.0, "Total Carbohydrate (g)": 12, "Protein (g)": 4, "Cholesterol (mg)": 10, "Sodium (mg)": 450}, {"Food Item": "Roasted Pork Loin", "Location": "North Ave Dining", "Calories": 100, "Total Fat (g)": 3.0, "Total Carbohydrate (g)": 0, "Protein (g)": 17, "Cholesterol (mg)": 50, "Sodium (mg)": 200}, {"Food Item": "Cheeseburger", "Location": "North Ave Dining", "Calories": 380, "Total Fat (g)": 18.0, "Total Carbohydrate (g)": 31, "Protein (g)": 24, "Cholesterol (mg)": 70, "Sodium (mg)": 520}, {"Food Item": "Grilled Chicken Sandwich", "Location": "North Ave Dining", "Calories": 330, "Total Fat (g)": 9.0, "Total Carbohydrate (g)": 31, "Protein (g)": 30, "Cholesterol (mg)": 65, "Sodium (mg)": 390}, {"Food Item": "French Fries", "Location": "North Ave Dining", "Calories": 150, "Total Fat (g)": 40.0, "Total Carbohydrate (g)": 27, "Protein (g)": 2, "Cholesterol (mg)": 0, "Sodium (mg)": 30}, {"Food Item": "Cheese Pizza", "Location": "North Ave Dining", "Calories": 250, "Total Fat (g)": 7.0, "Total Carbohydrate (g)": 33, "Protein (g)": 13, "Cholesterol (mg)": 15, "Sodium (mg)": 580}, {"Food Item": "Peperoni Pizza", "Location": "North Ave Dining", "Calories": 280, "Total Fat (g)": 10.0, "Total Carbohydrate (g)": 33, "Protein (g)": 14, "Cholesterol (mg)": 20, "Sodium (mg)": 680}, {"Food Item": "Chocolate Chip Cookie ", "Location": "North Ave Dining", "Calories": 120, "Total Fat (g)": 6.0, "Total Carbohydrate (g)": 16, "Protein (g)": 1, "Cholesterol (mg)": 5, "Sodium (mg)": 95}, {"Food Item": "Ice Cream Sundae", "Location": "North Ave Dining", "Calories": 270, "Total Fat (g)": 13.0, "Total Carbohydrate (g)": 37, "Protein (g)": 3, "Cholesterol (mg)": 20, "Sodium (mg)": 95}, {"Food Item": "Rotisserie Chicken", "Location": "Iron Skillet ", "Calories": 430, "Total Fat (g)": 24.0, "Total Carbohydrate (g)": 3, "Protein (g)": 48, "Cholesterol (mg)": 155, "Sodium (mg)": 610}, {"Food Item": "Turkey with Gravy", "Location": "Iron Skillet ", "Calories": 180, "Total Fat (g)": 8.0, "Total Carbohydrate (g)": 5, "Protein (g)": 24, "Cholesterol (mg)": 75, "Sodium (mg)": 700}, {"Food Item": "Mashed Potatoes ", "Location": "Iron Skillet ", "Calories": 160, "Total Fat (g)": 7.0, "Total Carbohydrate (g)": 21, "Protein (g)": 4, "Cholesterol (mg)": 20, "Sodium (mg)": 125}, {"Food Item": "Green Beans and Carrots", "Location": "Iron Skillet ", "Calories": 50, "Total Fat (g)": 2.0, "Total Carbohydrate (g)": 7, "Protein (g)": 1, "Cholesterol (mg)": 5, "Sodium (mg)": 85}, {"Food Item": "Fruit Cup ", "Location": "Iron Skillet ", "Calories": 110, "Total Fat (g)": 0.0, "Total Carbohydrate (g)": 27, "Protein (g)": 1, "Cholesterol (mg)": 0, "Sodium (mg)": 20}, {"Food Item": "Potato Salad", "Location": "Iron Skillet ", "Calories": 250, "Total Fat (g)": 20.0, "Total Carbohydrate (g)": 15, "Protein (g)": 3, "Cholesterol (mg)": 40, "Sodium (mg)": 190}, {"Food Item": "Strawberry Oatmeal Bar", "Location": "Iron Skillet ", "Calories": 440, "Total Fat (g)": 17.0, "Total Carbohydrate (g)": 67, "Protein (g)": 5, "Cholesterol (mg)": 10, "Sodium (mg)": 300}, {"Food Item": "Apple ", "Location": "Iron Skillet ", "Calories": 100, "Total Fat (g)": 0.0, "Total Carbohydrate (g)": 28, "Protein (g)": 1, "Cholesterol (mg)": 0, "Sodium (mg)": 0}, {"Food Item": "Banana", "Location": "Iron Skillet ", "Calories": 160, "Total Fat (g)": 0.5, "Total Carbohydrate (g)": 42, "Protein (g)": 2, "Cholesterol (mg)": 0, "Sodium (mg)": 0}, {"Food Item": "Orange ", "Location": "Iron Skillet ", "Calories": 60, "Total Fat (g)": 0.0, "Total Carbohydrate (g)": 15, "Protein (g)": 1, "Cholesterol (mg)": 0, "Sodium (mg)": 0}, {"Food Item": "Glazed Ham", "Location": "Iron Skillet ", "Calories": 190, "Total Fat (g)": 5.0, "Total Carbohydrate (g)": 23, "Protein (g)": 13, "Cholesterol (mg)": 40, "Sodium (mg)": 970}, {"Food Item": "Sweet Potato", "Location": "Iron Skillet ", "Calories": 550, "Total Fat (g)": 16.0, "Total Carbohydrate (g)": 88, "Protein (g)": 18, "Cholesterol (mg)": 30, "Sodium (mg)": 790}]
function setCookie(cname, cvalue) {
  var d = new Date();
  d.setHours(24,0,0,0);
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

$(document).ready(function() {

    for (var i=0;i<data.length;i++){
      jQuery('#foods2').append(jQuery("<option></option>").val(data[i]['Food Item']).text(data[i]['Food Item']))
      jQuery('#foods3').append(jQuery("<option></option>").val(data[i]['Food Item']).text(data[i]['Food Item']))
    }
    table1 = $('#table1').DataTable({
      columns: [
        { data: "Food Item"},
        { data: "Location" },
        { data: "Calories" },
        { data: "Total Fat (g)" },
        { data: "Total Carbohydrate (g)" },
        { data: "Protein (g)" },
        { data: "Cholesterol (mg)" },
        { data: "Sodium (mg)" },
    ]
    });

    table2 = $('#table2').DataTable(
         {"footerCallback": function(row, data, start, end, display) {
            var api = this.api();
            for (i = 0; i < 6; i++) {
              $( api.column( i + 2 ).footer() ).html(
                api.column( i + 2 ).data().reduce( function ( a, b ) {
                    return parseFloat(a) + parseFloat(b);
                }, table3sum[i] )
              );
            }

          },
        columns: [
            { data: "Food Item"},
            { data: "Location" },
            { data: "Calories" },
            { data: "Total Fat (g)" },
            { data: "Total Carbohydrate (g)" },
            { data: "Protein (g)" },
            { data: "Cholesterol (mg)" },
            { data: "Sodium (mg)" },
        ]
    }
     );

     table3 = $('#table3').DataTable(
        {"footerCallback": function(row, data, start, end, display) {
            var api = this.api();
            table3sum = [];
            for (i = 0; i < 6; i++) {
              var temp = 0;
              $( api.column( i + 2 ).footer() ).html(
                api.column( i + 2 ).data().reduce( function ( a, b ) {
                    temp += parseFloat(a)+parseFloat(b);
                    return parseFloat(a) + parseFloat(b);
                }, 0 )
              );
              table3sum.push(temp);
            }
            $('#table2').DataTable().draw(false);

          },
          columns: [
            { data: "Food Item"},
            { data: "Location" },
            { data: "Calories" },
            { data: "Total Fat (g)" },
            { data: "Total Carbohydrate (g)" },
            { data: "Protein (g)" },
            { data: "Cholesterol (mg)" },
            { data: "Sodium (mg)" },
        ]
   }
    );

    $('#table2').on( 'click', 'tbody tr', function () {
        table2.row(this).remove().draw();
        var l = table2.column(0).data().length;
        var table2_cookie_array = [];
        for (i = 0; i < l; i++) {
          table2_cookie_array.push(table2.column(0).data()[i])
        }
        console.log('table2_cookie_array');
        console.log(table2_cookie_array);
        setCookie('table2_cookie', JSON.stringify(table2_cookie_array));
        // document.cookie = 'table2_cookie='+JSON.stringify(table2_cookie) + ': table3_cookie' + JSON.stringify(table3_cookie);
    } );

    $('#table3').on( 'click', 'tbody tr', function () {
      table3.row(this).remove().draw();
      var l = table3.column(0).data().length;
      table3_cookie_array = [];
      for (i = 0; i < l; i++) {
        table3_cookie_array.push(table3.column(0).data()[i])
      }
      console.log('table3_cookie_array');
      console.log(table3_cookie_array);
      setCookie('table3_cookie', JSON.stringify(table3_cookie_array));
      // document.cookie = 'table2_cookie='+JSON.stringify(table2_cookie.column(0).data()) + ': table3_cookie' + JSON.stringify(table3_cookie);
    } );

    $('#foods2-button').click(function() {
      var food = $('#foods2 option:selected').text();
      table2.rows.add(data.filter(obj => obj['Food Item'] === food)).draw()
      var l = table2.column(0).data().length;
      var table2_cookie_array = [];
      for (i = 0; i < l; i++) {
        table2_cookie_array.push(table2.column(0).data()[i])
      }
      console.log('table2_cookie_array');

      console.log(table2_cookie_array);
      setCookie('table2_cookie', JSON.stringify(table2_cookie_array));
      // document.cookie = 'table2_cookie='+JSON.stringify(table2_cookie) + ': table3_cookie' + JSON.stringify(table3_cookie);
    })

    $('#foods3-button').click(function() {
      var food = $('#foods3 option:selected').text();
      table3.rows.add(data.filter(obj => obj['Food Item'] === food)).draw()
      var l = table3.column(0).data().length;
      var table3_cookie_array = [];
      for (i = 0; i < l; i++) {
        table3_cookie_array.push(table3.column(0).data()[i])
      }
      console.log('table3_cookie_array');
      console.log(table3_cookie_array);
      setCookie('table3_cookie', JSON.stringify(table3_cookie_array));
      // document.cookie = 'table2_cookie='+JSON.stringify(table2_cookie) + ': table3_cookie' + JSON.stringify(table3_cookie);
    })
    console.log(1);
    table1.rows.add(data).draw();
    table2_cookie = (getCookie('table2_cookie'));
    console.log(table2_cookie);
    if (table2_cookie !== '') {
      table2_cookie = JSON.parse(table2_cookie);
      var table_2_add = [];
      for (i=0; i < table2_cookie.length; i++) {
        table_2_add.push(data.filter(f => f['Food Item'] === table2_cookie[i])[0])
      }
      table2.rows.add(table_2_add).draw();
    }
    console.log('table 2 cookies done');

    table3_cookie = (getCookie('table3_cookie'));
    console.log(table3_cookie);
    if (table3_cookie !== '') {
      table3_cookie = JSON.parse(table3_cookie);
      var table_3_add = [];
      for (i=0; i < table3_cookie.length; i++) {
        table_3_add.push(data.filter(f => f['Food Item'] === table3_cookie[i])[0])
      }
      table3.rows.add(table_3_add).draw();
    }
    console.log('table 3 cookies done');
} );
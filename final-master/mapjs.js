
function myFunction() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("th")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
//
// var tabulate = function (data,columns) {
//     var table = d3.select('body').append('table')
//     var thead = table.append('thead')
//     var tbody = table.append('tbody')
//
//     thead.append('tr')
//         .selectAll('th')
//         .data(columns)
//         .enter()
//         .append('th')
//         .text(function (d) { return d })
//
//     var rows = tbody.selectAll('tr')
//         .data(data)
//         .enter()
//         .append('tr')
//
//     var cells = rows.selectAll('td')
//         .data(function(row) {
//             return columns.map(function (column) {
//                 return { column: column, value: row[column] }
//             })
//         })
//         .enter()
//         .append('td')
//         .text(function (d) { return d.value })
//
//     return table;
// }
//
// d3.csv('map-final.csv',function (data) {
//     var columns = ['Category','Venue name','Address','Phone number', 'Note']
//     tabulate(data,columns)
// })


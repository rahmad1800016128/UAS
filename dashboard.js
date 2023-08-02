google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(getSpreadsheetData);

function getSpreadsheetData() {
    var spreadsheetID = "11A1FvruCAiJTfEAnWK8D5EvoaY8CaYtF6cQs9K7rJM4"; // Ganti dengan ID Spreadsheet Anda
    var SHEET_TITLE = 'sheet6';

    // range data 1
    var SHEET_RANGE1 = 'A1:B25';

    // range data 2
    var SHEET_RANGE2 = 'D1:E4';

    // range data 3
    var SHEET_RANGE3 = 'G1:H4';

    // range data 4
    var SHEET_RANGE4 = 'J1:K25';
    //https://docs.google.com/spreadsheets/d/1W4QoB0IKcDZikpGD6PMkkJxrJXtxydnPULE2rNWpLeY/edit#gid=252099959
   

    // manggil data 1
    var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/' + spreadsheetID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE1);
    query.send(handleQueryResponse1);

    // manggil data 2
    var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/' + spreadsheetID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE2);
    query.send(handleQueryResponse2);

    // manggil data 3
    var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/' + spreadsheetID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE3);
    query.send(handleQueryResponse3);

    // manggil data 4
    var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/' + spreadsheetID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE4);
    query.send(handleQueryResponse4);


}

// proses data 1
function handleQueryResponse1(response) {
    if (response.isError()) {
        console.error('Error: ' + response.getMessage());
        return;
    }

    // menggambar 1
    var data1 = response.getDataTable();
    drawCharts1(data1);
}

// proses data 2
function handleQueryResponse2(response) {
    if (response.isError()) {
        console.error('Error: ' + response.getMessage());
        return;
    }

    // menggambar 2
    var data2 = response.getDataTable();
    drawCharts2(data2);

    
}
// proses data 3
function handleQueryResponse3(response) {
    if (response.isError()) {
        console.error('Error: ' + response.getMessage());
        return;
    }

    // menggambar 3
    var data3 = response.getDataTable();
    drawCharts3(data3);

    
}

// proses data 4
function handleQueryResponse4(response) {
    if (response.isError()) {
        console.error('Error: ' + response.getMessage());
        return;
    }

    // menggambar 4
    var data4 = response.getDataTable();
    drawCharts4(data4);

    
}

// nama grafik data 1
function drawCharts1(data1) {
    var options = {
        title: 'Grafik Rata-rata Kematian Per Tahun',
        width: 1050,
        height: 500
    };

    // menampilkan data 1
    var chart1 = new google.visualization.LineChart(document.getElementById('chart1'));
    chart1.draw(data1, options);

    // Tambahkan jenis grafik lain dan elemen div untuk grafik lainnya
}

// nama grafik data 2
function drawCharts2(data2) {
    var options = {
        title: 'Jumlah kematian berdasarkan dari type',
        width: 500,
        height: 300
    };

    // menampilkan data 2
    var chart2 = new google.visualization.AreaChart(document.getElementById('chart2'));
    chart2.draw(data2, options);


    // Tambahkan jenis grafik lain dan elemen div untuk grafik lainnya
}
// nama grafik data 3
function drawCharts3(data3) {
    var options = {
        title: 'Persentase Type Kematian ',
        width: 500,
        height: 300
    };

    // menampilkan data 3
    var chart3 = new google.visualization.PieChart(document.getElementById('chart3'));
    chart3.draw(data3, options);


    // Tambahkan jenis grafik lain dan elemen div untuk grafik lainnya
}

function drawCharts4(data4) {
    var options = {
        title: 'Jumlah Total Kematian Per Tahun',
        width: 1100,
        height: 500
    };

    // menampilkan data 4
    var chart4 = new google.visualization.BarChart(document.getElementById('chart4'));
    chart4.draw(data4, options);


    // Tambahkan jenis grafik lain dan elemen div untuk grafik lainnya
}



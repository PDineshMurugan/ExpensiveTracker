document.addEventListener('DOMContentLoaded', function () {
  var jsonData = [
    { "day": "mon", "amount": 17.45 },
    { "day": "tue", "amount": 34.91 },
    { "day": "wed", "amount": 52.36 },
    { "day": "thu", "amount": 31.07 },
    { "day": "fri", "amount": 23.39 },
    { "day": "sat", "amount": 43.28 },
    { "day": "sun", "amount": 25.48 }
  ];
  var ctx = document.getElementById('myBarChart').getContext('2d');
  var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: jsonData.map(item => item.day),
      datasets: [{
        label: 'Spending per Day',
        data: jsonData.map(item => item.amount),
        backgroundColor: 'hsl(17, 96%, 52%)',
        borderColor: 'black',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  window.printChart = function () {
    var chartImage = myBarChart.toBase64Image();
    var windowContent = '<!DOCTYPE html>';
    windowContent += '<html>';
    windowContent += '<head><title>Print Chart</title></head>';
    windowContent += '<body>';
    windowContent += '<img src="' + chartImage + '" alt="Chart">';
    windowContent += '</body>';
    windowContent += '</html>';
    var printWindow = window.open('', '_blank');
    printWindow.document.open();
    printWindow.document.write(windowContent);
    printWindow.document.close();
    printWindow.print();
  };
});
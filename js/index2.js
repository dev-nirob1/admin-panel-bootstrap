const salesCanvas = document.getElementById("monthlySalesChart");

if (salesCanvas) {
  new Chart(salesCanvas, {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [{
        label: "Sales",
        data: [120, 190, 150, 250, 220, 300, 270],
        borderColor: "#2F6B8A",
        backgroundColor: "rgba(47, 107, 138, 0.15)",
        fill: true,
        tension: 0.4,
        pointRadius: 3
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      }
    }
  });
}
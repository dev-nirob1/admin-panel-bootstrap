// Online Store Visitors: Two-Line Chart
const visitorsCanvas = document.getElementById("onlineVisitorsChart");

if (visitorsCanvas) {
  new Chart(visitorsCanvas, {
    type: "line",
    data: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "This Week",
          data: [120, 190, 150, 240, 200, 280, 320],
          borderColor: "#2F6B8A",
          backgroundColor: "rgba(47, 107, 138, 0.10)",
          fill: true,
          tension: 0.4,
          pointRadius: 3
        },
        {
          label: "Last Week",
          data: [100, 140, 130, 180, 160, 210, 250],
          borderColor: "#94A3B8",
          backgroundColor: "transparent",
          fill: false,
          tension: 0.4,
          pointRadius: 3
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      },
      scales: {
        y: { beginAtZero: true, grid: { color: "#E2E8F0" } },
        x: { grid: { display: false } }
      }
    }
  });
}

// Sales: Bar Chart
const salesCanvas = document.getElementById("salesBarChart");

if (salesCanvas) {
  new Chart(salesCanvas, {
    type: "bar",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          label: "This Year",
          data: [12000, 15000, 11000, 18000, 16000, 21000, 19000, 23000, 20000, 25000, 22000, 28000],
          backgroundColor: "#2F6B8A",
          borderRadius: 4,
          barPercentage: 0.7
        },
        {
          label: "Last Year",
          data: [9000, 12000, 10000, 14000, 13000, 17000, 15000, 18000, 16000, 20000, 18000, 22000],
          backgroundColor: "#CBD5E1",
          borderRadius: 4,
          barPercentage: 0.7
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: { color: "#E2E8F0" }
        },
        x: {
          grid: { display: false }
        }
      }
    }
  });
}
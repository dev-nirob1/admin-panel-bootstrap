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

// US Visitors Map
const visitorsMap = document.querySelector("#us-visitors-map");

if (visitorsMap) {
  new jsVectorMap({
    selector: "#us-visitors-map",
    map: "world_merc",
    backgroundColor: "transparent",
    zoomButtons: true,
    regionStyle: {
      initial: {
        fill: "#475569"
      },
      hover: {
        fill: "#38BDF8",
        cursor: "pointer"
      }
    },
    series: {
      regions: [{
        attribute: "fill",
        values: {
          US: "#38BDF8"
        }
      }]
    }
  });
}

// Visitor Metric Sparklines
document.querySelectorAll(".visitor-sparkline").forEach((element) => {
  // Read the static values from HTML
  const values = element.dataset.values.split(",").map(Number);

  // Create a canvas for Chart.js
  const canvas = document.createElement("canvas");
  element.appendChild(canvas);

  // Render a compact sparkline
  new Chart(canvas, {
    type: "line",
    data: {
      labels: values.map((_, index) => index + 1),
      datasets: [{
        data: values,
        borderColor: "#FFFFFF",
        borderWidth: 2,
        pointRadius: 0,
        tension: 0.4,
        fill: false
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: false,
      plugins: {
        legend: { display: false },
        tooltip: { enabled: false }
      },
      scales: {
        x: { display: false },
        y: { display: false, min: 0, max: 100 }
      },
      layout: {
        padding: 0
      }
    }
  });

  // Keep the sparkline compact
  element.style.height = "35px";
});


const sidebar = document.querySelector(".sidebar");
const sidebarToggle = document.querySelector("#sidebarToggle");

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("open-sidebar");
});


// sales area chart 

const ctx = document.getElementById("salesAreaChart");

new Chart(ctx, {
    type: "line",
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
            label: "Sales",
            data: [10, 20, 30, 40, 10, 60, 70, 10, 90, 50],
            fill: true,
            backgroundColor: "rgba(47, 107, 138, 0.2)",
            borderColor: "#2F6B8A",
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});

const donutCtx = document.getElementById("salesDonutChart");

new Chart(donutCtx, {
    type: "doughnut",
    data: {
        labels: ["Online", "In-Store", "Delivery"],
        datasets: [{
            data: [45, 30, 25],
            backgroundColor: ["#183B56", "#2F6B8A", "#94A3B8"],
            borderWidth: 2,
            borderColor: "#FFFFFF"
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "bottom"
            }
        }
    }
});

new jsVectorMap({
    selector: "#visitors-map",
    map: "world_merc",
    backgroundColor: "#1b6fff",
    zoomButtons: true,
    regionStyle: {
        initial: {
            fill: "#fff"
        },
        hover: {
            fill: "#f3f9ec",
            cursor: "pointer"
        }
    },
    series: {
        regions: [{
            attribute: "fill",
            values: {
                BD: "#183B56",
                US: "#2F6B8A",
                IN: "#2F6B8A",
                GB: "#2F6B8A"
            }
        }]
    }
});

// Sales Graph: get the canvas rendering context.
const salesGraphCanvas = document.querySelector("#salesGraphChart");
const salesGraphCtx = salesGraphCanvas.getContext("2d");

// Create a subtle gradient for the filled chart area.
const salesGradient = salesGraphCtx.createLinearGradient(0, 0, 0, 260);
salesGradient.addColorStop(0, "rgba(255, 255, 255, 0.35)");
salesGradient.addColorStop(1, "rgba(255, 255, 255, 0.02)");

// Sample monthly sales data.
const salesGraphData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Sales",
      data: [18, 25, 20, 32, 28, 38],
      borderColor: "#FFFFFF",
      backgroundColor: salesGradient,
      fill: true,
      tension: 0.4,
      borderWidth: 2,
      pointRadius: 3,
      pointHoverRadius: 5,
      pointBackgroundColor: "#FFFFFF",
      pointBorderColor: "#FFFFFF"
    }
  ]
};

// Initialize the responsive Sales Graph chart.
const salesGraphChart = new Chart(salesGraphCtx, {
  type: "line",
  data: salesGraphData,
  options: {
    responsive: true,
    maintainAspectRatio: false,

    // Keep tooltips useful when hovering over data points.
    interaction: {
      mode: "index",
      intersect: false
    },

    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: "rgba(24, 59, 86, 0.95)",
        titleColor: "#FFFFFF",
        bodyColor: "#FFFFFF",
        padding: 10,
        displayColors: false
      }
    },

    scales: {
      x: {
        grid: {
          display: false
        },
        border: {
          display: false
        },
        ticks: {
          color: "#FFFFFF"
        }
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(255, 255, 255, 0.2)"
        },
        border: {
          display: false
        },
        ticks: {
          color: "#FFFFFF"
        }
      }
    }
  }
});


const calendarEl = document.getElementById("calendar");

const calendar = new FullCalendar.Calendar(calendarEl, {
  initialView: "dayGridMonth",
  headerToolbar: {
    left: "prev,next today",
    center: "title",
    right: "dayGridMonth,timeGridWeek,listWeek"
  },
  height: "auto",
  events: [
    { title: "Team Meeting", start: "2026-10-19" },
    { title: "Sales Report", start: "2026-10-22" },
    { title: "Project Review", start: "2026-10-26" }
  ]
});

calendar.render();





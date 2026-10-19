
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


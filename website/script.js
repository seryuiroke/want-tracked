const trends = {
    onitsuka_tiger: {
        title: "Onitsuka Tiger",
        description:
            "Onitsuka Tiger represents growing international attention toward Japanese fashion. Its pageviews increased across the study period, although online attention alone cannot explain what caused that growth.",
        average: "24,721",
        peak: "115,309",
        growth: "+43.10%",
        chart: "images/onitsuka.png"
    },

    uniqlo: {
        title: "Uniqlo",
        description:
            "Uniqlo received consistently high attention compared with most of the selected trends. This may reflect its established global presence and broad appeal as an accessible Japanese fashion brand.",
        average: "46,101",
        peak: "85,945",
        growth: "+21.74%",
        chart: "images/uniqlo.png"
    },

    matcha: {
        title: "Matcha",
        description:
            "Matcha attracted the highest average attention in the final sample. Its visibility connects food culture, wellness conversations, cafés, and the wider international influence of Japanese consumer culture.",
        average: "87,661",
        peak: "180,360",
        growth: "-19.24%",
        chart: "images/matcha.png"
    },

    digital_cameras: {
        title: "Digital Cameras",
        description:
            "Digital cameras showed substantial online attention as older technologies returned to fashion and internet culture. This pattern may reflect nostalgia, aesthetic preferences, and renewed interest in physical photography.",
        average: "17,146",
        peak: "27,077",
        growth: "-63.33%",
        chart: "images/camera.png"
    },

    jorts: {
        title: "Jorts",
        description:
            "Jorts had the smallest overall audience but showed how a relatively niche fashion item can gain attention quickly. This distinction demonstrates why popularity and growth should be evaluated separately.",
        average: "41",
        peak: "266",
        growth: "+124.14%",
        chart: "images/jorts.png"
    }
};

const cards = document.querySelectorAll(".trend-card");
const trendChart = document.getElementById("trend-chart");

cards.forEach((card) => {
    card.addEventListener("click", () => {
        const trend = trends[card.dataset.trend];

        if (!trend) {
            return;
        }

        document.getElementById("detail-title").textContent =
            trend.title;

        document.getElementById("detail-description").textContent =
            trend.description;

        document.getElementById("average-attention").textContent =
            trend.average;

        document.getElementById("peak-attention").textContent =
            trend.peak;

        document.getElementById("percent-growth").textContent =
            trend.growth;

        trendChart.src = trend.chart;
        trendChart.alt = `${trend.title} attention graph`;

        cards.forEach((otherCard) => {
            otherCard.classList.remove("active");
        });

        card.classList.add("active");

        document.getElementById("trend-detail").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});
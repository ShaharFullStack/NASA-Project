import { fetchEventsByDate, fetchRecentEvents } from "./services/nasaService.js";
const displayEvents = async (events) => {
    const eventsContainer = document.getElementById("showResults");
    if (eventsContainer) {
        eventsContainer.innerHTML = "";
        events.forEach(event => {
            const eventElement = document.createElement("div");
            eventElement.className = "event-card";
            const eventDate = event.properties?.date?.split("T")[0] || "Date unavailable";
            const description = event.properties?.description || "No description available.";
            const title = event.properties?.title || "Untitled Event";
            if (event.geometry?.coordinates?.length === 2) {
                const [longitude, latitude] = event.geometry.coordinates;
                eventElement.innerHTML = `
                    <h3>${title}</h3>
                    <p>${description}</p>
                    <p>${eventDate}</p>
                    <p><a href="https://www.google.com/maps/@${latitude},${longitude},15z?entry=ttu" target="_blank">Watch on Google Maps</a></p>
                `;
            }
            else {
                eventElement.innerHTML = `
                    <h3>${title}</h3>
                    <p>${description}</p>
                    <p>${eventDate}</p>
                    <p>Coordinates unavailable.</p>
                `;
            }
            eventsContainer.appendChild(eventElement);
        });
    }
};
document.getElementById("recentEventsBtn")?.addEventListener("click", async () => {
    try {
        const events = await fetchRecentEvents();
        displayEvents(events);
    }
    catch (error) {
        console.error("Error fetching recent events:", error);
    }
});
document.getElementById("byDateBtn")?.addEventListener("click", async () => {
    const startDate = document.getElementById("sinceBox").value;
    const endDate = document.getElementById("untilBox").value;
    if (startDate && endDate) {
        try {
            const events = await fetchEventsByDate(startDate, endDate);
            displayEvents(events);
        }
        catch (error) {
            console.error("Error fetching events by date:", error);
        }
    }
    else {
        console.log("Please enter both dates.");
    }
});
//# sourceMappingURL=main.js.map
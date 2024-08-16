import { NasaDailyPic, NasaFeature } from "../types/nasaTypes.js";

export const fetchRecentEvents = async (): Promise<NasaFeature[]> => {
    try {
        const response = await fetch('https://eonet.gsfc.nasa.gov/api/v3/events/geojson?limit=5');
        if (!response.ok) {
            throw new Error('Failed to fetch recent events');
        }
        const data = await response.json();
        if (!data.features || !Array.isArray(data.features)) {
            throw new Error('Unexpected API response format');
        }
        return data.features;
    } catch (error) {
        console.error('Error fetching recent events:', error);
        return []; // החזרת מערך ריק כדי להמשיך בריצה גם במקרה של שגיאה
    }
};

export const fetchEventsByDate = async (startDate: string, endDate: string): Promise<NasaFeature[]> => {
    try {
        const response = await fetch(`https://eonet.gsfc.nasa.gov/api/v3/events?start=${startDate}&end=${endDate}`);
        if (!response.ok) {
            throw new Error('Failed to fetch events by date');
        }
        const data = await response.json();

        if (!data.events || !Array.isArray(data.events)) {
            throw new Error('Unexpected API response format');
        }

        return data.events.map((event: any) => ({
            type: "Feature",
            properties: {
                id: event.id,
                title: event.title,
                description: event.description,
                link: event.link,
                closed: event.closed,
                date: event.date,
                magnitudeValue: event.magnitudeValue,
                magnitudeUnit: event.magnitudeUnit,
                categories: event.categories,
                sources: event.sources
            },
            geometry: event.geometries && event.geometries.length > 0 ? event.geometries[0] : null
        }));
    } catch (error) {
        console.error('Error fetching events by date:', error);
        return [];
    }
};

export const fetchApodImage = async () => {
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=AW4hXnRmahY72jSUGJYq0nzAFF62M4BF2oeScWLN`; // החלף במפתח ה-API שלך

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch the APOD image');
        }
        const data = await response.json();

        if (data && data.url) {
            document.body.style.backgroundImage = `url('${data.hdurl}')`;
            document.getElementById("picOfTheDay")?.setAttribute("alt", data.title); // Update alt text if needed
        }
    } catch (error) {
        console.error("Error fetching the APOD image:", error);
    }
};

document.addEventListener("DOMContentLoaded", fetchApodImage);

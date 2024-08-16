
// Interface for categories
export interface NasaCategory {
    id: string;
    title: string;
}

// Interface for geometries (locations)
export interface NasaGeometry {
    date: string;
    type: string;
    coordinates: [longitude: number, latitude:number]; // Represents [longitude, latitude]
}

// Interface for sources
export interface NasaSource {
    id: string;
    url: string;
}

// Main interface for the event properties (used in both JSON and GeoJSON)
export interface NasaEventProperties {
    id: string;
    title: string;
    description: string | null;
    link: string;
    closed: string | null;
    date: string;
    magnitudeValue: number | null;
    magnitudeUnit: string | null;
    categories: NasaCategory[];
    sources: NasaSource[];
    geometry: NasaGeometry;
}

// Interface for a feature in GeoJSON (which includes properties and geometry)
export interface NasaFeature {
    type: string;
    properties: NasaEventProperties;
    geometry: NasaGeometry;
}

// Interface for the full GeoJSON response (collection of features)
export interface NasaFeatureCollection {
    type: string;
    features: NasaFeature[];
}

export interface NasaDailyPic {
    title: string;
    copyright: string;
    date: string;
    explanation: string;
    hdurl: string;
}
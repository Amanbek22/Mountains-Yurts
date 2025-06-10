'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { MapPin, Navigation, Loader } from 'lucide-react';

// Dynamically import map components to avoid SSR issues
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
);

const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);

const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
);

const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
);

const Polyline = dynamic(
  () => import('react-leaflet').then((mod) => mod.Polyline),
  { ssr: false }
);

interface TourMapProps {
  tourId: string;
}

interface MapLocation {
  name: string;
  coordinates: [number, number]; // [latitude, longitude]
  description: string;
  day?: number;
}

const TourMap: React.FC<TourMapProps> = ({ tourId }) => {
  const [isClient, setIsClient] = useState(false);
  const [L, setL] = useState<any>(null);

  useEffect(() => {
    setIsClient(true);
    // Import Leaflet only on client side
    import('leaflet').then((leaflet) => {
      setL(leaflet.default);
      
      // Fix for default markers
      delete (leaflet.default.Icon.Default.prototype as any)._getIconUrl;
      leaflet.default.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
      });
    });
  }, []);

  // Define tour routes and locations
  const tourRoutes: Record<string, MapLocation[]> = {
    'nomad-life': [
      {
        name: 'Bishkek',
        coordinates: [42.8746, 74.5698],
        description: 'Capital city - Starting point',
        day: 1
      },
      {
        name: 'Kochkor Valley',
        coordinates: [42.1944, 75.7833],
        description: 'Traditional nomadic settlement',
        day: 2
      },
      {
        name: 'Alpine Meadows',
        coordinates: [42.2500, 75.8500],
        description: 'High-altitude pastures',
        day: 3
      },
      {
        name: 'Bishkek',
        coordinates: [42.8746, 74.5698],
        description: 'Return to capital',
        day: 4
      }
    ],
    'song-kul': [
      {
        name: 'Bishkek',
        coordinates: [42.8746, 74.5698],
        description: 'Starting point',
        day: 1
      },
      {
        name: 'Kochkor',
        coordinates: [42.1944, 75.7833],
        description: 'Base camp preparation',
        day: 1
      },
      {
        name: 'Kalmak-Ashuu Pass',
        coordinates: [42.0833, 75.9167],
        description: 'Mountain pass (3,400m)',
        day: 2
      },
      {
        name: 'Song-Kul Lake',
        coordinates: [41.8333, 75.1333],
        description: 'Alpine lake destination',
        day: 2
      },
      {
        name: 'Bishkek',
        coordinates: [42.8746, 74.5698],
        description: 'Return journey',
        day: 5
      }
    ],
    'winter-tien-shan': [
      {
        name: 'Bishkek',
        coordinates: [42.8746, 74.5698],
        description: 'Starting point',
        day: 1
      },
      {
        name: 'Karakol',
        coordinates: [42.4906, 78.3936],
        description: 'Ski resort base',
        day: 1
      },
      {
        name: 'Karakol Ski Resort',
        coordinates: [42.5200, 78.4200],
        description: 'Winter sports activities',
        day: 2
      },
      {
        name: 'Altyn Arashan',
        coordinates: [42.5500, 78.4500],
        description: 'Hot springs location',
        day: 4
      },
      {
        name: 'Bishkek',
        coordinates: [42.8746, 74.5698],
        description: 'Return to capital',
        day: 6
      }
    ]
  };

  const locations = tourRoutes[tourId] || [];

  // Create custom icons
  const createCustomIcon = (color: string, day?: number) => {
    if (!L) return null;
    
    const iconHtml = day 
      ? `<div style="background-color: ${color}; width: 30px; height: 30px; border-radius: 50%; border: 3px solid white; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 12px; box-shadow: 0 2px 4px rgba(0,0,0,0.3);">${day}</div>`
      : `<div style="background-color: ${color}; width: 25px; height: 25px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>`;

    return L.divIcon({
      html: iconHtml,
      className: 'custom-marker',
      iconSize: [30, 30],
      iconAnchor: [15, 15],
      popupAnchor: [0, -15]
    });
  };

  // Calculate map bounds
  const getBounds = () => {
    if (locations.length === 0) return null;
    
    const lats = locations.map(loc => loc.coordinates[0]);
    const lngs = locations.map(loc => loc.coordinates[1]);
    
    return [
      [Math.min(...lats) - 0.1, Math.min(...lngs) - 0.1],
      [Math.max(...lats) + 0.1, Math.max(...lngs) + 0.1]
    ] as [[number, number], [number, number]];
  };

  const bounds = getBounds();
  const center = locations.length > 0 
    ? [locations[0].coordinates[0], locations[0].coordinates[1]] as [number, number]
    : [42.8746, 74.5698] as [number, number];

  // Route coordinates for polyline
  const routeCoordinates = locations.map(loc => loc.coordinates);

  if (!isClient || !L) {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Tour Route Map</h3>
          <p className="text-gray-600">Follow the journey through beautiful Kyrgyzstan</p>
        </div>
        
        <div className="w-full h-96 bg-gray-100 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <Loader className="w-8 h-8 animate-spin text-blue-600 mx-auto mb-2" />
            <p className="text-gray-600">Loading interactive map...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Tour Route Map</h3>
        <p className="text-gray-600">Follow the journey through beautiful Kyrgyzstan</p>
      </div>

      {/* Leaflet CSS */}
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
        crossOrigin=""
      />

      <div className="w-full h-96 rounded-lg overflow-hidden border-2 border-gray-200 shadow-lg">
        <MapContainer
          center={center}
          zoom={8}
          bounds={bounds || undefined}
          style={{ height: '100%', width: '100%' }}
          className="z-0"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          {/* Route line */}
          {routeCoordinates.length > 1 && (
            <Polyline
              positions={routeCoordinates}
              color="#2563eb"
              weight={4}
              opacity={0.8}
              dashArray="10, 10"
            />
          )}

          {/* Location markers */}
          {locations.map((location, index) => {
            const isStart = index === 0;
            const isEnd = index === locations.length - 1 && index !== 0;
            const color = isStart ? '#10b981' : isEnd ? '#ef4444' : '#2563eb';
            
            return (
              <Marker
                key={`${location.name}-${index}`}
                position={location.coordinates}
                icon={createCustomIcon(color, location.day)}
              >
                <Popup>
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-900 mb-1">{location.name}</h4>
                    <p className="text-sm text-gray-600 mb-2">{location.description}</p>
                    {location.day && (
                      <span className="inline-block text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                        Day {location.day}
                      </span>
                    )}
                    <div className="text-xs text-gray-500 mt-1">
                      {location.coordinates[0].toFixed(4)}, {location.coordinates[1].toFixed(4)}
                    </div>
                  </div>
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>

      {/* Location details */}
      <div className="grid md:grid-cols-2 gap-4">
        {locations.map((location, index) => (
          <div key={`${location.name}-${index}`} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <div className="flex items-start gap-3">
              <div className={`flex items-center justify-center w-8 h-8 rounded-full text-white text-sm font-bold ${
                index === 0 ? 'bg-green-500' : 
                index === locations.length - 1 && index !== 0 ? 'bg-red-500' : 'bg-blue-500'
              }`}>
                {location.day || index + 1}
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900">{location.name}</h4>
                <p className="text-sm text-gray-600">{location.description}</p>
                {location.day && (
                  <span className="inline-block mt-1 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    Day {location.day}
                  </span>
                )}
                <div className="text-xs text-gray-500 mt-1">
                  {location.coordinates[0].toFixed(4)}°N, {location.coordinates[1].toFixed(4)}°E
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
        <h4 className="font-semibold text-gray-900 mb-3">Map Legend</h4>
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded-full border border-white"></div>
            <span>Starting Point</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-blue-500 rounded-full border border-white"></div>
            <span>Tour Stops</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-red-500 rounded-full border border-white"></div>
            <span>End Point</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-1 border-t-2 border-blue-500 border-dashed"></div>
            <span>Route Path</span>
          </div>
        </div>
        <div className="mt-2 text-xs text-gray-500">
          Click on markers for detailed information • Zoom and pan to explore
        </div>
      </div>
    </div>
  );
};

export default TourMap;
import { useMemo } from 'react';
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';

interface MapProps {
    lat: number,
    lng: number,
    marker: boolean,
}

export default function Map(props:MapProps) {
    const { lat, lng, marker } = props

    const libraries = useMemo(() => ['places'], [])
    const mapCenter = useMemo(
        () => ({ lat, lng }),
        [lat, lng]
    )
    const mapOptions = useMemo<google.maps.MapOptions>(
        () => ({
            disableDefaultUI: true,
            clickableIcons: false,
            scrollwheel: true,
        }),
        []
    )

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
        libraries: libraries as any,
    })
    
    if (!isLoaded) {
        return <p>Loading...</p>
    }

    return (
        <div className="m-auto overflow-hidden rounded-lg">
            <GoogleMap
                options={mapOptions}
                zoom={16}
                center={mapCenter}
                mapTypeId={google.maps.MapTypeId.ROADMAP}
                mapContainerStyle={{ width: '400px', height: '400px' }}
                onLoad={() => console.log('Map Component Loaded...')}
            />
            {marker && <MarkerF position={mapCenter} onLoad={() => console.log('Marker Loaded')} />}
        </div>
        
    )
}
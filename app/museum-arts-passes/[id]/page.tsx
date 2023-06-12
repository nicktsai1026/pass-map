import axios from 'axios';
import Libraries from '@/data/libraries.json';
import Attractions from '@/data/museum_cultural_venues.json';
import AddressAutocomplete from '@/components/addressAutocomplete';

interface attractionsProps {
  params: {
    id: string
  }
}

const AttractionsPage = ({
  params
}: attractionsProps) => {
  let attraction = Attractions.find(attraction => attraction.slug === params.id);
  let attractionLibraries = Libraries.filter(library => {
    if (attraction && library.events.includes(attraction.id)) return library;
  });

  return (
    <div className="mt-16 p-10">
      <p>Attractions: {params.id}</p>
      <AddressAutocomplete />
      { attraction && attractionLibraries.map(library => (
        <div key={library.slug}>
          <p>{library.name}</p>
          <img src={library.image} alt={library.name} />
          <p>{library.address}</p>
        </div>
      ))}
    </div>

  )
}

export default AttractionsPage
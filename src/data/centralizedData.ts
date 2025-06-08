import { Tour } from '@/types/tour';
import { nomadLife } from './nomad-life';
import { songKul } from './song-kul';
import { winterTienShan } from './winter-tien-shan';

export interface DetailedTour extends Tour {
  subtitle: string;
  gallery: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
  }[];
  included: string[];
  notIncluded: string[];
}

export const allToursData: DetailedTour[] = [
  nomadLife,
  songKul,
  winterTienShan,
]; 
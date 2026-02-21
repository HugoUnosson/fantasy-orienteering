export interface Event {
  id: string;
  name: string;
  location: string;
  country: string;
  date: string;
  type: 'sprint' | 'individual' | 'pursuit' | 'mass-start' | 'relay';
  gender: 'male' | 'female' | 'mixed';
  status: 'upcoming' | 'live' | 'completed';
}
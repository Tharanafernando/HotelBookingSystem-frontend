export default interface RoomAvailability {
  available_dates: {
    id: number;
    date: string;
  }[];             
  max_guests: number;
}

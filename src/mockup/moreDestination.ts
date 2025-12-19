import greece from "../assets/images/img-greece-dest.jpg";
import india from "../assets/images/img-india-dest.jpg";
import italy from "../assets/images/img-italy-dest.jpg";
import japan from "../assets/images/img-japan-dest.jpg";
import paris from "../assets/images/img-paris-dest.jpg";
import thailand from "../assets/images/img-thailand-dest.jpg";

export interface MoreDestination {
  imgSrc: string;
  title: string;
  totalTrips: number;
}

export const moreDestinations: MoreDestination[] = [
  {
    imgSrc: greece,
    title: 'Greece',
    totalTrips: 14
  },
  {
    imgSrc: india,
    title: 'India',
    totalTrips: 17
  },
  {
    imgSrc: italy,
    title: 'Italy',
    totalTrips: 15
  },
  {
    imgSrc: japan,
    title: 'Japan',
    totalTrips: 14
  },
  {
    imgSrc: paris,
    title: 'Paris',
    totalTrips: 15
  },
  {
    imgSrc: thailand,
    title: 'Thailand',
    totalTrips: 12
  },
]
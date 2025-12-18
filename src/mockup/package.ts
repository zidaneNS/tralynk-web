import baliImg from "../assets/images/img-bali-pkg.jpg";
import dubaiImg from "../assets/images/img-dubai-pkg.jpg";
import maldivesImg from "../assets/images/img-maldives-pkg.jpg";
import parisImg from "../assets/images/img-paris-pkg.jpg";
import swissImg from "../assets/images/img-swiss-pkg.jpg";
import thailandImg from "../assets/images/img-thailand-pkg.jpg";

export interface Package {
  imgSrc: string;
  duration: {
    days: number;
    nights: number;
  };
  title: string;
  facilities: string[];
  price: number;
}

export const packages: Package[] = [
  {
    imgSrc: parisImg,
    duration: {
      days: 5,
      nights: 4
    },
    title: 'Paris romantic escape',
    facilities: [
      'Stay in a luxury hotel near the Eiffel Tower',
      'Seine river cruise & louvre museum entry',
      'Guided city tour with local expert'
    ],
    price: 8999
  },
  {
    imgSrc: baliImg,
    duration: {
      days: 6,
      nights: 5
    },
    title: 'Bali beach bliss',
    facilities: [
      'Private villa with pool stay',
      'Uluwatu temple & kecak dance show',
      'Island hopping & water sports included'
    ],
    price: 10499
  },
  {
    imgSrc: swissImg,
    duration: {
      days: 5,
      nights: 4
    },
    title: 'Swiss apls adventure',
    facilities: [
      'Scenic train ride on the Glacier Express',
      'Jungfraujoch “top of europe” experience',
      'Explore zurich, interlaken & lucerne'
    ],
    price: 9999
  },
  {
    imgSrc: dubaiImg,
    duration: {
      days: 4,
      nights: 3
    },
    title: 'Dubai luxury gateway',
    facilities: [
      'Desert safari with BBQ dinner',
      'Burj khalifa & dubai mall tour',
      'Luxury hotel stay with transfers'
    ],
    price: 5589
  },
  {
    imgSrc: maldivesImg,
    duration: {
      days: 5,
      nights: 4
    },
    title: 'Maldives luxury escape',
    facilities: [
      'Overwater villa stay with private deck',
      'Snorkeling, diving & dolphin cruise',
      'Candlelight dinner on the beach'
    ],
    price: 14999
  },
  {
    imgSrc: thailandImg,
    duration: {
      days: 6,
      nights: 5
    },
    title: 'Thailand island hopping',
    facilities: [
      'Bangkok city tour & floating market visit',
      'Phi Phi & James Bond Island day trip',
      'Nightlife experiences in Phuket'
    ],
    price: 6479
  },
]
import dubai from "../assets/images/img-dubai.jpg";
import france from "../assets/images/img-france.jpg";
import italy from "../assets/images/img-italy.jpg";
import japan from "../assets/images/img-japan.jpg";
import thailand from "../assets/images/img-thailand.jpg";

export interface Destination {
  name: string;
  subName: string;
  desc: string;
  places: string[];
  imgSrc: string;
}

export const destinations: Destination[] = [
  {
    name: 'Dubai',
    subName: 'UAE',
    desc: 'The city where luxury meets innovation. From futuristic skyscrapers to golden deserts, Dubai is the ultimate modern-day oasis.',
    places: [
      'Burj Khalifa',
      'Palm Jumeirah',
      'Desert Safari',
      'Dubai Mall'
    ],
    imgSrc: dubai
  },
  {
    name: 'France',
    subName: 'Europe',
    desc: 'From romantic Paris to the sunny beaches of Cannes, France offers culture, art, fashion, and world-famous cuisine. A perfect mix of elegance and adventure.',
    places: [
      'Paris',
      'Lyon',
      'Florence',
      'Milan',
      'Amalfi Coast'
    ],
    imgSrc: france
  },
  {
    name: 'Italy',
    subName: 'Europe',
    desc: "Italy is a journey through history, art, and flavors. From ancient ruins to scenic coastlines, it's every traveler's dream.",
    places: [
      'Rome',
      'Venice',
      'Florence',
      'Milan',
      'Amalfi Coast'
    ],
    imgSrc: italy
  },
  {
    name: 'Japan',
    subName: 'Asia',
    desc: 'A perfect blend of tradition and innovation, Japan takes you from ancient temples to futuristic cities.',
    places: [
      'Tokyo',
      'Kyoto',
      'Osaka',
      'Hokkaido',
      'Hiroshima'
    ],
    imgSrc: japan
  },
  {
    name: 'Thailand',
    subName: 'Asia',
    desc: 'From bustling cities to tropical islands, Thailand offers a mix of culture, adventure, and relaxation.',
    places: [
      'Bangkok',
      'Phuket',
      'Chiang Mai',
      'Phi Phi Islands',
      'Krabi'
    ],
    imgSrc: thailand
  },
];
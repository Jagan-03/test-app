interface Events {
  id: number;
  img: string;
  title: string;
  date: string;
  time: string;
  duration: string;
}

const EventsData: Events[] = [
  {
    id: 1,
    img: "https://imageio.forbes.com/specials-images/imageserve/5d9a6cd567dd830006a2cf85/0x0.jpg?format=jpg&crop=5616,3159,x0,y290,safe&width=1200",
    title: "Yoga for beginners",
    date: "SEP 7",
    time: "10.00 AM",
    duration: "2hrs",
  },
  {
    id: 2,
    img: "https://assets.entrepreneur.com/content/3x2/2000/20180329172450-GettyImages-604619026.jpeg?crop=16:9",
    title: "Yoga for intermediate",
    date: "SEP 8",
    time: "11.00 AM",
    duration: "2hrs",
  },
];

export default EventsData;

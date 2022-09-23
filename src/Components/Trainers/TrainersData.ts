interface Trainers {
    id: number;
    name: string;
    img: string;
    role: string;
    experience: number;
    speciality: string;
    price: number;
}

const TrainersData: Trainers[] = [
    {
        id: 1,
        name: "Manish Saxena",
        img: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=2000",
        role: "General Fitness Trainer",
        experience: 6,
        speciality: "Fitness, Wellness",
        price: 500
    },
    {
        id: 2,
        name: "Shreya Sharma",
        img: "https://img.freepik.com/free-photo/dreamy-young-woman-sunglasses-looking-front_197531-16739.jpg?w=2000",
        role: "Personal Trainer",
        experience: 4,
        speciality: "Fitness, Yoga",
        price: 350
    }
]

export default TrainersData;

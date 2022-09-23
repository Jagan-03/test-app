interface TodaysRoutine {
    id: number;
    workout: string;
    duration: string;
    timing: string;
    img: string;
}

const TodaysRoutineData: TodaysRoutine[] = [
    {
        id: 1,
        workout: "Strength Training",
        duration: "7 day challenge",
        timing: "20 mins",
        img: "https://media.istockphoto.com/photos/young-woman-exercising-with-her-weights-in-the-living-room-picture-id863993762?k=20&m=863993762&s=612x612&w=0&h=that5fvkJn7zWqT7Xq9iDXjJ4y4UadSaI8uVFi0IAeI=",
    },
    {
        id: 2,
        workout: "High Intensity Cardio",
        duration: "30 day challenge",
        timing: "20 mins",
        img: "https://www.mydr.com.au/wp-content/uploads/2019/02/AdobeStock_316584335-1-scaled.jpg",
    },
    {
        id: 3,
        workout: "Plyometric",
        duration: "30 day challenge",
        timing: "20 mins",
        img: "https://www.shape.com/thmb/qi4o1RnKzXxGTDmoonFIIv4ylFI=/2000x1333/filters:fill(auto,1)/6-Ways-Youre-Squatting-Wrong-GettyImages-965003092-2000-3a55ad0afb9746259beba30c7603e9b8.jpg",
    },
]

export default TodaysRoutineData;

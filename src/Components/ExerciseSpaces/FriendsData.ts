interface Friends {
    id: number;
    img: string;
    name: string;
    lastSeen: string;
    streak: number;
    coins: number;
}

const FriendsData: Friends[] = [
    {
        id: 1,
        img: "https://m.media-amazon.com/images/M/MV5BYjkxNzJjMjItMzRjMS00NmQwLWJmMDItMzRhODdmYmE2YWM2XkEyXkFqcGdeQXVyMzQwNjU3NTM@._V1_UX200_CR0,0,200,200_AL_.jpg",
        name: "Abhishek",
        lastSeen: "8hr",
        streak: 12,
        coins: 165     
    },
    {
        id: 2,
        img: "https://blog.jetbrains.com/wp-content/uploads/2022/07/F34E0F9B-D3F0-4DD4-B7C7-B11AF3FC6D25-200x200.jpeg",
        name: "Lakshya",
        lastSeen: "active",
        streak: 34,
        coins: 176     
    },
    {
        id: 3,
        img: "https://m.media-amazon.com/images/M/MV5BMzdjNjBlNGMtMWM3OC00MjllLTk0NGUtN2ZmZWJmYzYxYTA1XkEyXkFqcGdeQXVyMTA0MzI5Mjg2._V1_UX200_CR0,0,200,200_AL_.jpg",
        name: "Kushi",
        lastSeen: "8hr",
        streak: 15,
        coins: 80        
    },
    {
        id: 4,
        img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1336095875i/3398537._UX200_CR0,25,200,200_.jpg",
        name: "Saloni",
        lastSeen: "2hr",
        streak: 0,
        coins: 2     
    },
    {
        id: 5,
        img: "https://m.media-amazon.com/images/M/MV5BZjVlMDgxNjktYmFjZC00MGY5LTg0ZDQtZDgyZmZjMTJmOTAzXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_UX200_CR0,0,200,200_AL_.jpg",
        name: "Karthick",
        lastSeen: "1d",
        streak: 7,
        coins: 245     
    },
]

export default FriendsData;

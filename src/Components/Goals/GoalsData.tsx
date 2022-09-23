import { ReactElement } from "react";
import { MdOutlineWaterDrop } from "react-icons/md";
import { AiOutlineFire } from "react-icons/ai";
import { FaShoePrints } from "react-icons/fa";

interface GoalsDataProps {
  id: number;
  total: string;
  consumed: string;
  description: string;
  progress: number;
  icon: () => ReactElement;
}

const GoalsData: GoalsDataProps[] = [
  {
    id: 1,
    total: "6",
    consumed: "5",
    description: "Glasses of Water",
    progress: 50,
    icon: () => (
      <span className="absolute">
        <MdOutlineWaterDrop className="text-4xl text-warmGrey400" />
      </span>
    ),
  },
  {
    id: 2,
    total: "300",
    consumed: "150",
    description: "Calories burned",
    progress: 40,
    icon: () => (
      <span className="absolute">
        <AiOutlineFire className="text-4xl text-warmGrey400" />
      </span>
    ),
  },
  {
    id: 3,
    total: "14k",
    consumed: "8k",
    description: "Steps",
    progress: 50,
    icon: () => (
      <span className="absolute">
        <FaShoePrints className="text-4xl text-warmGrey400" />
      </span>
    ),
  },
];

export default GoalsData;

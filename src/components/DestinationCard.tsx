
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface DestinationCardProps {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  startingPoint: string;
}

const DestinationCard = ({
  id,
  name,
  description,
  imageUrl,
  startingPoint,
}: DestinationCardProps) => {
  return (
    <Card className="destination-card overflow-hidden h-full">
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-bold mb-2">{name}</h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{description}</p>
        <Button asChild className="w-full" variant="default">
          <Link to={`/results/${startingPoint}/${id}`}>View Routes</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default DestinationCard;

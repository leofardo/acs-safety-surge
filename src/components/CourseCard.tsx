import { Clock, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  duration: string;
  participants: string;
  certification: string;
  highlights: string[];
}

const CourseCard = ({ 
  title, 
  description, 
  image, 
  duration, 
  participants, 
  certification, 
  highlights 
}: CourseCardProps) => {
  return (
    <Card className="card-elevated hover:scale-105 transition-all duration-300 overflow-hidden group">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-success text-success-foreground px-3 py-1 rounded-full text-sm font-semibold">
          {certification}
        </div>
      </div>
      
      <CardHeader>
        <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span>{participants}</span>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-sm text-foreground mb-2">Principais tópicos:</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-start">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>

      <CardFooter className="flex flex-col gap-3">
        <Button className="w-full btn-gradient text-accent-foreground font-semibold">
          Saiba Mais
        </Button>
        <Button variant="outline" className="w-full">
          Solicitar Orçamento
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
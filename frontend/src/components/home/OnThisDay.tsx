// OnThisDay.jsx
import { Card, CardContent } from '@/components/ui/card';
import { History } from 'lucide-react';

const OnThisDay = () => {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-center mb-4">
          <History className="mr-2 h-5 w-5" />
          <h2 className="text-xl font-serif">On This Day</h2>
        </div>
        <ul className="space-y-3 text-muted-foreground">
          <li>
            <span className="font-medium text-foreground">2016:</span> Foundation stone of IIT Bhilai was laid
          </li>
          <li>
            <span className="font-medium text-foreground">2018:</span> First batch of students graduated
          </li>
          <li>
            <span className="font-medium text-foreground">2020:</span> New research center inaugurated
          </li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default OnThisDay;
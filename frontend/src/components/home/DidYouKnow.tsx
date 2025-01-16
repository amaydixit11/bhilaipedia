import { Card, CardContent } from '@/components/ui/card';

const DidYouKnow = () => {
  return (
    <Card>
      <CardContent className="pt-6">
        <h2 className="text-xl font-serif mb-4">Did You Know?</h2>
        <ul className="space-y-3 list-disc list-inside text-muted-foreground">
          <li>IIT Bhilai's campus spans over 250 acres of land</li>
          <li>The institute was established in 2016</li>
          <li>Over 40% of faculty members have international experience</li>
          <li>The library houses more than 50,000 books</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default DidYouKnow;
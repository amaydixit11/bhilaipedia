'use client';

import { Button } from '@/components/ui/button';

export default function Error({
error,
reset,
}: {
error: Error & { digest?: string };
reset: () => void;
}) {
return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-4">
    <h2 className="text-xl font-semibold">Something went wrong!</h2>
    <Button onClick={() => reset()}>Try again</Button>
    </div>
);
}
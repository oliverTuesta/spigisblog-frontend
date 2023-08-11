import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export function SearchBar({ className = '' }) {
  return (
    <div className={`flex mx-auto max-w-lg justify-center justify-items-center space-x-2 ${className}`}>
      <Input className="bg-gray-200 dark:bg-gray-300 text-gray-800" type="text" placeholder="Search" />
      <Button type="submit">
        <Search className="h-4 w-4" />
      </Button>
    </div>
  );
}

"use client"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { JsonData } from '@prisma/client';
import { format } from 'date-fns';
import { ShareIcon } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function JsonDataTable() {
  const [jsonDataList, setJsonDataList] = useState<JsonData[]>([]);
  const [isClient, setIsClient] = useState(false)
  
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {

      try {
        const response = await fetch('/api/json');
        const data = await response.json();
  
        setJsonDataList(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch data:', error);
        setLoading(false);
      }
  };

  useEffect(() => {
    fetchData();
    setIsClient(true)
  }, []);

  if (loading) {
    return 'loading...';
  }

  if (!jsonDataList.length && !isClient) {
    return (
      <div className='text-center text-gray-500 mt-6'>
        No data avaliable, please add new entry!
      </div>
    );
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Created At</TableHead>
          <TableHead>
            <span className='sr-only'>Share</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {jsonDataList && isClient && !loading ? 
        (
          jsonDataList.map((data) => (
            <TableRow key={data.id}>
              <TableCell>{data.name}</TableCell>
              <TableCell>
                {format(new Date(data.createdAt), 'MMMM d, yyyy')}
              </TableCell>
              <TableCell>
                <Link href={`/${data.id}`}>
                  <ShareIcon className='h-4 w-4' />
                </Link>
              </TableCell>
            </TableRow>
          ))
        )
        :
        (
          <div></div>
        )}
      </TableBody>
    </Table>
  );
}
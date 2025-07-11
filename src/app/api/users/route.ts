import { UserModel } from '@/models/user.model';
import { NextRequest } from 'next/server';

const baseUrl: string = process.env.API_BASE_URL!;

export async function GET(request: NextRequest) {
  const response: Response = await fetch(`${baseUrl}/users`);
  const data: UserModel[] = await response.json();

  const nameFilter: string | null = request.nextUrl.searchParams.get('name');
  const filteredData: UserModel[] = nameFilter
    ? data.filter((item: UserModel) => item.name.toLowerCase().includes(nameFilter.toLowerCase()))
    : data;

  return Response.json(filteredData);
}

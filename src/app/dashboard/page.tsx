import { UserInfo } from '@/components/UserInfo';
import { currentUser } from '@clerk/nextjs';

export default async function DashboardPage() {
  const user = await currentUser();
  console.log(user);

  return (
    <div>
      <h1 className="font-bold">Dashboard</h1>
      <UserInfo />
    </div>
  );
}
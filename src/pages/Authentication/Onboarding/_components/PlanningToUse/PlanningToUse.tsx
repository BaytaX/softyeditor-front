import Button from '@/components/Shared/Button';
import toast from 'react-hot-toast';
import PlanningCards from '../PlanningCards';
import { useUpdateUserQuery } from '@/services/queries/auth.query';
import { useState } from 'react';
import { User } from '@/types/user';

export default function PlanningToUse({
  user,
  setIsHaveAPlan,
}: {
  user: User;
  setIsHaveAPlan: any;
}) {
  const [selectedId, setSelectedId] = useState<number>(0);

  const handleClick = (id: number) => () => {
    setSelectedId(id);
  };
  const {
    isLoading,
    mutateAsync: update,
    isError,
    error,
  }: any = useUpdateUserQuery();

  const onSubmit = async () => {
    const data = { id: user.id, plan: { id: selectedId } };
    try {
      const res = await update(data);
      console.log('🚀 ~ onSubmit ~ res:', res);
      if (res) {
        setIsHaveAPlan(true);
      }
    } catch (error) {}
  };

  return (
    <div className="flex flex-col items-center cursor-pointer mb-4  ">
      <div className="flex flex-col justify-center items-center gap-1 w-full ">
        <PlanningCards selectedId={selectedId} handleClick={handleClick} />
        <Button
          onClick={onSubmit}
          isLoading={isLoading}
          text="Continue"
          disabled={selectedId === 0}
          type="submit"
          className="w-[18rem] flex items-center justify-center h-8 rounded-[5px] text-white text-sm font-medium bg-blue-500 hover:bg-blue-600 shadow-inner md:shadow-md disabled:opacity-40 mt-4"
        />
      </div>
    </div>
  );
}
import Loader from '@/components/Loader';

export default function Loading() {
  return (
    <div className="flex-1 w-full min-h-[calc(100vh-5rem)] min-h-[calc(100dvh-5rem)] flex items-center justify-center px-4 py-20 text-[#4f6652]">
      <Loader />
    </div>
  );
}


export const MobileController = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-tangerine p-4">
      <div className="h-1/2 w-full bg-ink p-8">
        <div className="h-full w-full bg-ghoul" />
      </div>
      <div className="flex h-1/2 w-full flex-row bg-ghoul">
        <div>A</div>
        <div>B</div>
      </div>
    </div>
  );
};

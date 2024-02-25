type PixelBoxProps = {
  children: React.ReactNode;
};

export const PixelBox = ({ children }: PixelBoxProps) => {
  return (
    <div className="border-t-4 border-b-4 border-text">
      <div className="bg-background border-r-4 border-l-4 border-text -mx-1 bg-opacity-70">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

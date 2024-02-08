type PixelBoxProps = {
  children: React.ReactNode;
};

export const PixelBox = ({ children }: PixelBoxProps) => {
  return (
    <div className="bg-text py-1">
      <div className="bg-background border-r-4 border-l-4 border-text -mx-1">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

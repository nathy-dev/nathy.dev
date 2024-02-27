type PixelBoxProps = {
  children: React.ReactNode;
  variant?: 'button' | 'default';
};

export const PixelBox = ({ children, variant }: PixelBoxProps) => {
  return variant === 'button' ? (
    <div className="border-text border-t-4 border-b-4 w-10 md:w-16">
      <div className="border-text border-r-4 border-l-4 -mx-1 bg-opacity-90 group-hover:bg-tangerine">
        <div>{children}</div>
      </div>
    </div>
  ) : (
    <div className="border-t-4 border-b-4 border-text">
      <div className="bg-background border-r-4 border-l-4 border-text -mx-1 bg-opacity-90">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

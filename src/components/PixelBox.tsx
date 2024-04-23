type PixelBoxProps = {
  children: React.ReactNode;
  variant?: 'button' | 'game' | 'default';
};

export const PixelBox = ({ children, variant }: PixelBoxProps) => {
  return variant === 'button' ? (
    <div className="w-10 border-b-4 border-t-4 border-text md:w-16">
      <div className="-mx-1 border-l-4 border-r-4 border-text bg-opacity-90 group-hover:bg-tangerine">
        <div>{children}</div>
      </div>
    </div>
  ) : variant === 'game' ? (
    <div>
      <div className="border-b-4 border-t-4 border-ghoul">
        <div className="-mx-1 border-l-4 border-r-4 border-ghoul bg-ink text-ghoul">
          <div className="p-4">{children}</div>
        </div>
      </div>
    </div>
  ) : (
    <div className="border-b-4 border-t-4 border-text">
      <div className="-mx-1 border-l-4 border-r-4 border-text bg-background bg-opacity-90">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

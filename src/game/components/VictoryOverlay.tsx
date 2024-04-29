import { PixelBox } from '../../components/PixelBox.tsx';

type OverlayProps = {
  children: React.ReactNode;
  condition: boolean;
};

export const VictoryOverlay = ({ children, condition }: OverlayProps) => {
  return (
    <div
      className={`w-content absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform ${condition ? '' : 'hidden'}`}
    >
      <PixelBox>{children}</PixelBox>
    </div>
  );
};

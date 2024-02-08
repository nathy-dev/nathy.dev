type ChoiceProps = {
  children: string;
  icon: 'fight' | 'floppy';
};

export const Choice = ({ children, icon }: ChoiceProps) => {
  return (
    <button className="border-2 border-background hover:border-text box-border">
      <div className="flex flex-col w-32">
        <div className="p-2">{icon === 'fight' ? '⚔️' : '📂'}</div>
        <p>{children}</p>
      </div>
    </button>
  );
};

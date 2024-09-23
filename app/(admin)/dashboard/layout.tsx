type Props = {
  children: React.ReactNode;
  team: React.ReactNode;
  analytics: React.ReactNode;
};

export default function Dashboard({ children, team, analytics }: Props) {
  return (
    <div>
      {children}
      <div className="flex gap-4">
      {team}
      {analytics}
      </div>
    </div>
  );
}

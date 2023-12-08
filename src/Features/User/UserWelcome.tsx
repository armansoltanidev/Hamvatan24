type userWelcomeProps = {
  name: string;
};

export default function UserWelcome({ name }: userWelcomeProps) {
  return (
    <div>
      <p className="text-foreground font-ysemibold tracking-tight text-lg">
        <span className="text-primary">خوش آمدید،</span> {name} عزیز
      </p>
    </div>
  );
}

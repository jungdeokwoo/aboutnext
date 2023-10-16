interface UserData {
  name: string;
  age: string;
}

interface DetailUserData extends UserData {
  profile: string;
}

interface TestProps {
  a: string;
  b: UserData | DetailUserData;
}

export const test = (props: TestProps) => {
  const { a, b } = props;
  const atomUserData = b as UserData;
  const eventDetailUserData = b as DetailUserData;

  return atomUserData || eventDetailUserData;
};

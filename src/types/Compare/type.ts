export interface MongoUserInfoProps {
  id: number;
  name: string;
  username: string;
  email: string;
}

export interface UserInfoProps extends MongoUserInfoProps {
  address?: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone?: string;
  website?: string;
  company?: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

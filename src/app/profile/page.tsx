import Image from "next/image";

interface User {
  name: {
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
  };
}

async function getRandomUser(): Promise<User> {
  const res = await fetch("https://randomuser.me/api/", {
    next: { revalidate: 60 },
  });
  const data = await res.json();
  return data.results[0];
}

export default async function ProfilePage() {
  const user = await getRandomUser();

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <Image
            className="h-48 w-full object-cover md:w-48"
            src={user.picture.large}
            alt={`${user.name.first} ${user.name.last}`}
            width={192}
            height={192}
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Random User Profile
          </div>
          <h2 className="block mt-1 text-lg leading-tight font-medium text-black">
            {user.name.first} {user.name.last}
          </h2>
          <p className="mt-2 text-gray-500">{user.email}</p>
        </div>
      </div>
    </div>
  );
}

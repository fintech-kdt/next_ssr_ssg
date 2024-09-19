import { createUser } from "../actions/user";

export default function UserPage() {
  return (
    <form action={createUser}>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        유저 생성
      </button>
    </form>
  );
}

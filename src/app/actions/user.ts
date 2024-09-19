"use server";

import { revalidatePath } from "next/cache";

export async function createUser() {
  const res = await fetch("https://randomuser.me/api/");
  const data = await res.json();
  const user = data.results[0];

  // 여기서 데이터베이스에 사용자를 저장하는 로직을 구현할 수 있습니다.
  console.log("New user created:", user.name.first, user.name.last);

  revalidatePath("/users");
  return user;
}

"use server"

import db from "@/db/db"
import { notFound } from "next/navigation"

export async function deleteUser(id: string) {
  const user = await db.user.delete({
    where: { id },
  })

  if (user == null) return notFound()

  return user
}

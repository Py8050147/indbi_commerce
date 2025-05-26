import { db } from "../db/db";
import { users } from "../db/schema";
import { currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";

export const checkUser = async () => {
  const clerkUser = await currentUser();

  if (!clerkUser) {
    return null;
  }

  try {
    // Check if user exists in our database
    const existingUser = await db
      .select()
      .from(users)
      .where(eq(users.clerkId, clerkUser.id));
    
    console.log("existingUser", existingUser)

    if (existingUser.length > 0) {
      return existingUser[0];
    }

    // Prepare user data
    const email = clerkUser.emailAddresses.find(
      (email) => email.id === clerkUser.primaryEmailAddressId
    )?.emailAddress;

    const provider = clerkUser.externalAccounts[0]?.provider
      ? clerkUser.externalAccounts[0].provider.replace("oauth_", "").toUpperCase()
      : "GOOGLE"; // Default if no provider found

    // Create new user in database
    const newUser = await db
      .insert(users)
      .values({
        clerkId: clerkUser.id,
        email: email || "",
        fname: clerkUser.firstName || "",
        lname: clerkUser.lastName || "",
        image: clerkUser.imageUrl,
        provider: provider,
      })
      .onConflictDoUpdate({
        target: users.clerkId,
        set: {
          email: email || "",
          fname: clerkUser.firstName || "",
          lname: clerkUser.lastName || "",
          image: clerkUser.imageUrl,
          provider: provider,
        },
      })
      .returning();
console.log("newUser", newUser)
    return newUser[0];
    // console.log("newUser", newUser)
  } catch (error) {
    console.error("Database error:", error.message);
    throw new Error("Failed to check or create user");
  }
};
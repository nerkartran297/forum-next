import { auth, currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import Profile from "@/components/forms/EditProfile";

import { getUserById } from "@/lib/actions/user.action";

import type { ParamsProps } from "@/types";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Edit Profile — DevOverflow",
};

const Page = async ({ params }: ParamsProps) => {
    const user = await currentUser();
    const { userId } = auth();

    if (!user) return null;
    if (!userId) return null;

    const mongoUser = await getUserById({ userId });
    if (!mongoUser?.onboarded) redirect("/onboarding");

    const UserInfo = {
        email: user.emailAddresses[0].emailAddress,
        picture: user.imageUrl,
    };

    // console.log(JSON.stringify(mongoUser));
    // console.log(JSON.stringify(user));

    return (
        <>
            <h1 className="h1-bold text-dark100_light900">Edit Profile</h1>
            <div className="mt-9">
                <Profile
                    clerkId={userId}
                    user={JSON.stringify(mongoUser)}
                    userInfo={UserInfo}
                />
            </div>
        </>
    );
};

export default Page;

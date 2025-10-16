import VerifyAccountForm from "@/components/auth/VerifyAccountForm";
import { Loading } from "@/components/common/Loading";
import { Suspense } from "react";

export default function VerifyAccountPage() {
    return (
        <Suspense fallback={<Loading variant="dots" size="lg" text="Loading" />}>
            <VerifyAccountForm />
        </Suspense>
    );
}

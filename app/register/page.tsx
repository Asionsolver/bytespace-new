import type { Metadata } from "next";
import { AuthLayout, RegisterForm } from "@/components/auth";

export const metadata: Metadata = {
  title: "Register | ByteSpace",
  description:
    "Create an account to get instant access to hundreds of courses available on ByteSpace.",
};

export default function RegisterPage() {
  return (
    <AuthLayout mode="register">
      <RegisterForm />
    </AuthLayout>
  );
}

'use client'

import { SignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
      <Image
        src="/images/admin-login-bg.jpg"
        alt="User Login Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        className="z-0"
      />
      <div className="absolute inset-0 bg-black opacity-0 z-10"></div>
      <div className="relative z-20 w-full max-w-md p-8 space-y-8 bg-black bg-opacity-70 rounded-lg backdrop-blur-sm">
        <h1 className="text-3xl font-bold text-center text-yellow-400 mb-6">User Login</h1>
        <SignIn 
          routing="path"
          path="/login"
          signUpUrl="/register"
          afterSignInUrl="/trading-dashboard"
          appearance={{
            elements: {
              rootBox: "bg-transparent shadow-none",
              card: "bg-transparent shadow-none",
              headerTitle: "text-yellow-400",
              headerSubtitle: "text-gray-300",
              formButtonPrimary: "bg-yellow-400 hover:bg-yellow-500 text-black",
              formFieldInput: "bg-gray-800 bg-opacity-50 text-white border-gray-600",
              formFieldLabel: "text-gray-300",
              footerActionLink: "text-yellow-400 hover:text-yellow-300",
              identityPreviewText: "text-white",
              identityPreviewEditButton: "text-yellow-400 hover:text-yellow-300",
              formFieldAction: "text-yellow-400",
              formFieldInputShowPasswordButton: "text-yellow-400",
              dividerLine: "bg-gray-600",
              dividerText: "text-gray-400",
              formFieldWarningText: "text-yellow-400",
              socialButtonsBlockButton: "border-gray-600 hover:bg-gray-800",
              socialButtonsBlockButtonText: "text-white",
              otpCodeFieldInput: "bg-gray-800 border-gray-600 text-white",
              footer: "hidden", // Hide the entire footer
              footerActionText: "hidden", // Hide the "Don't have an account?" text
              footerPageLink: "hidden", // Hide the "Sign up" link
            },
          }}
        />
        <div className="text-center text-sm text-gray-400 mt-4">
          Secured by Fairwind Holdings
        
        </div>
      </div>
    </div>
  );
}

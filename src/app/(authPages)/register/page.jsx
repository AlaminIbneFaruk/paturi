import HeroBanner from "@/app/Components/HeroBanner";
import SectionHeader from "@/app/Components/SectionHeader";
import RegisterForm from "./RegisterForm";

export default function RegisterPage() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gradient-to-b from-black via-transparent to-black">
      <HeroBanner
        title="Register Page"
      />
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <SectionHeader
        title="Register Now" subtitle="Enjoy Your Favourite Meals"/>
        <RegisterForm/>
      </div>
    </div>
  );
}

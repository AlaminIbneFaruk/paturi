import HeroBanner from "@/app/Components/HeroBanner";
import SectionHeader from "@/app/Components/SectionHeader";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-full">
        <SectionHeader
        title="Login Now" subtitle="Enjoy Your Favourite Meals"/>
        <LoginForm/>
      </div>
    </div>
  );
}

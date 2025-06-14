import SidePanel from "../Components/SidePanel";

export default function DashboardLayout({ children }) {
  return (
    <div className=" bg-gray-100 grid grid-cols-12 ">
      <div className="bg-white col-span-3 min-h-[calc(100vh-8rem)] ">
        {/* Side panel content goes here */}
        <SidePanel/>
      </div>
      <div className="col-span-9 bg-white h-full p-4">
        {children}
      </div>
    </div>
  );
}
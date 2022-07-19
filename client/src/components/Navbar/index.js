import { Navbar, Typography } from "@material-tailwind/react";
 
export default function NavBar() {
 
  return (
    <Navbar className="bg-black border-0 rounded-none bg-opacity-100 flex max-w-full">
      <div className="container text-white mx-auto">
        <Typography
          className="mr-4 py-1.5 font-bold"
        >
          CCTV Dashboard
        </Typography>
        </div>
    </Navbar>
  );
}

import { Link } from "react-router-dom";


export default function NotFound() {
  return (
    <div
      className="flex justify-center items-center relative bg-black"
      style={{
        backgroundImage: `url('https://seahawkmedia.com/wp-content/uploads/2023/02/How-to-redirect-your-404-page-to-the-home-page-in-WordPress-01-1.jpg')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div className="pt-96 rounded-lg   absolute ">
        <Link to="/">
          <button className="border-2 border-emerald-400 px-6 py-5 rounded-none bg-transparent text-emerald-200 mt-4 hover:bg-emerald-400 hover:text-green-950">
            Back To Home</button>
        </Link>
       
      </div>
    </div>
  );
}
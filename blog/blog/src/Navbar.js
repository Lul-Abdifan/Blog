import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="flex justify-center justify-around p-10">
      <h1 class="text-4xl text-4xl hover:animate-bounce transition duration-700 text-red-500">
        Blogger
      </h1>
      <div class="text-2xl text-fuchsia-700 font-semibold">
        <ul class="flex gap-6 ">
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/addBlog">
            <li>New Blog</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

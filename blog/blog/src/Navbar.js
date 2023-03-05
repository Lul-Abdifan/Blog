const Navbar = () => {
    return ( 
        <nav class="flex justify-center justify-around p-10">
            <h1 class="text-blue-600 text-bold text-2xl hover:animate-spin text-left">Blogger</h1>
            <div class="text-2xl text-fuchsia-700 font-semibold">
              <ul class="flex gap-6 ">
                <li>About</li>
                <li>Home</li>
                <li>New Blog</li>
              </ul>


            </div>
        </nav>
     );
}
 
export default Navbar

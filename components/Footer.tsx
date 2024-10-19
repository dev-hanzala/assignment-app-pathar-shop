export default function Footer() {
  return (
    <div className="bottom-0 flex flex-col items-center w-full bg-stone-700 text-stone-200 shadow-xl p-4">
      <div className="w-full flex justify-around mb-4 flex-wrap">
        <div>
          <h2 className="font-bold mb-2">Quick Links</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold mb-2">Contact Us</h2>
          <p>Email: info@pathar.com</p>
          <p>Phone: +123-456-7890</p>
          <p>Address: 1234 Stone Lane, Rockville, Earth</p>
        </div>
        <div>
          <h2 className="font-bold mb-2">Follow Us</h2>
          <ul className="flex space-x-4 flex-wrap">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </div>
      <p className="pt-2 mt-1 text-center text-sm">&copy; 2024 PATHAR™. All rights reserved.</p>
    </div>
  );
}

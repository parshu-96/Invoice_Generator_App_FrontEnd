import { assets } from "../assets/assets.js";
export default function Logo() {
  return (
    <div>
      <img src={assets.logo} alt="logo" height={48} width={48} />
    </div>
  );
}

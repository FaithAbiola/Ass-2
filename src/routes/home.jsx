import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-page">
    
      <div className="home__text-box">
        <h1 className="heading-1">
          <span className="heading__1-main">Coder-Hub</span>
          <span className="heading__1-sub">
            Coder Hub is home to all geeks and Nerds..</span>
        </h1>
        <Link to="users" className="btn">
          Find a Nerd..
        </Link>
      </div>
    </div>
  )
}
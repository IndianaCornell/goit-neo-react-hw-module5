import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>404 - Page not found</h1>
      <p>Unfortunately, there is no such page.</p>
      <Link to="/" style={{ fontSize: "18px", color: "blue" }}>
        Turn on your head?
      </Link>
    </div>
  );
};

export default NotFoundPage;

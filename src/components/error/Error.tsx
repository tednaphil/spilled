import "./Error.css";
import spilledTea from "../../images/Coffee-Burst.svg";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Error = () => {
  const [isRedirected, setIsRedirected] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsRedirected(true);
  }, [setIsRedirected]);
  useEffect(() => {
    if (performance.navigation.type === 1) {
      navigate("/");
    }
  }, [navigate]);

  useEffect(() => {
    window.onbeforeunload = () => {
      if (isRedirected === true) {
        navigate("../", { replace: true });
      }
    };
  }, [isRedirected, navigate, setIsRedirected]);

  return (
    <article className="error-wrapper">
      <img
        id="error-image"
        src={spilledTea}
        alt="Tea cup tipped over with liquid spilling out"
      />
      <h2>Uh oh!</h2>
      <p className="error-message">We couldn't find that page</p>
      <Link className="home-link" id="error-home-link" to="/">
        Go back home
      </Link>
    </article>
  );
};

export default Error;

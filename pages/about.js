import Header from '../components/header';
import Footer from '../components/footer';
import { useRouter } from "next/router";

export default function About () {
  const router = useRouter();

  return (
    <div className="main">
      <Header title="About Me" />


      <p>
        Simple description about who I am.
      </p>

      <p>
        <button className="backButton" onClick={() => {
          router.back();
        }}>Go Back</button>
      </p>

      <Footer />
    </div>

  );
}
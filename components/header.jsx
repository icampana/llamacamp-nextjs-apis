import styles from "../styles/Home.module.css";

export default function Header(props) {
  const localTitle = props.title ?? (
    <span>
      Example App with{" "}
      <a href="https://breakingbadapi.com/">Breaking Bad API</a> and{" "}
      <a href="https://nextjs.org">Next.js!</a>
    </span>
  );

  return (
    <div>
      <h1 className={styles.title}>{localTitle}</h1>

      <p style={{ textAlign: "center" }}>
        <img src="/breaking-bad-logo.png" alt="Breaking Bad Logo" width="240" />
      </p>
    </div>
  );
}

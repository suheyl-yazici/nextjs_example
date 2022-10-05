import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About Page</title>
        <link rel="icon" href="/react.ico" />
      </Head>

      <h1 className="greenColor bigText">About</h1>

      <style jsx>
        {`
          .greenColor {
            color: green;
          }
          .redColor {
            color: red;
          }
          .bigText {
            font-size: 156px;
          }
        `}
      </style>
    </>
  );
}

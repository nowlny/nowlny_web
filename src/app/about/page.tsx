export default function About() {
  return (
    <div className="fade-in">
      <section className="section" style={{ paddingTop: "10rem" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <h1 style={{ textAlign: "center", marginBottom: "3rem" }}>
            About Nowlny
          </h1>

          <p>
            Welcome to Nowlny, where we believe that great food should be
            accessible to everyone, anywhere, at any time. Founded in 2026, we
            have been on a mission to revolutionize the food delivery experience
            by combining cutting-edge technology with a passion for gastronomy.
          </p>

          <p>
            Our platform connects you with the finest local restaurants,
            offering a diverse range of cuisines to satisfy every craving.
            Whether you&apos;re in the mood for a quick bite or a gourmet feast,
            Nowlny delivers it with speed and care.
          </p>

          <h2 style={{ marginTop: "3rem" }}>Our Mission</h2>
          <p>
            To provide the fastest, most reliable, and most delightful food
            delivery service while supporting local businesses and communities.
          </p>

          <h2 style={{ marginTop: "3rem" }}>Our Values</h2>
          <ul style={{ listStyle: "none", paddingLeft: "0" }}>
            <li style={{ marginBottom: "1rem" }}>
              <strong style={{ color: "var(--accent)" }}>Quality:</strong> We
              ensure that your food arrives as fresh as it left the kitchen.
            </li>
            <li style={{ marginBottom: "1rem" }}>
              <strong style={{ color: "var(--accent)" }}>Speed:</strong> Our
              dedicated fleet ensures timely deliveries.
            </li>
            <li style={{ marginBottom: "1rem" }}>
              <strong style={{ color: "var(--accent)" }}>Innovation:</strong> We
              continuously improve our app to provide a seamless user
              experience.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

import React from "react";

const Home: React.FC = () => {
    return (
        <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center", padding: "2rem" }}>
            <header style={{ marginBottom: "2rem" }}>
                <h1>Group Presentation</h1>
                <p>Todays topic!</p>
            </header>
            <main>
                <section style={{ marginBottom: "2rem" }}>
                    <h2>About Us</h2>
                    <p>
                        We are internet technologies group A consisting of members: a,b,c,d
                    </p>
                </section>
                <section>
                    <h2>Contact Us</h2>
                    <p>Email: contact@ourcompany.com</p>
                </section>
            </main>
            <footer style={{ marginTop: "2rem", fontSize: "0.9rem", color: "#555" }}>
                Generated for Internet Technologies 2025
            </footer>
        </div>
    );
};

export default Home;
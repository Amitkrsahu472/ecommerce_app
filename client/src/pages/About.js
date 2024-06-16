import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Welcome to our online watch store! We offer a curated selection of premium watches from renowned brands, ensuring quality and style for every occasion. Explore our diverse collection to find the perfect timepiece that suits your taste and needs. Shop with confidence and enjoy timeless elegance with every purchase.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
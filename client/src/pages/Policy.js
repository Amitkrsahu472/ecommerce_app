import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
        <p>At our site, your privacy is our priority. This policy explains how we handle your personal information.</p>
<p>We collect data like name, email, and payment details during account creation, purchases, and website interactions.</p>
<p>We use your information to process orders, enhance your experience, and communicate offers.</p>
<p>Your data is shared with third parties only to fulfill orders and process payments. We never sell your information.</p>
<p>We employ security measures like encryption to protect your data. Ensure your passwords are strong and confidential.</p>
<p>Cookies help us personalize your experience and analyze traffic. Manage cookies in your browser settings.</p>
<p>You can access, correct, or delete your information by contacting us at xyz@gmail.com.</p>


        </div>
      </div>
    </Layout>
  );
};

export default Policy;
import React from "react";

export const Contact = () => {
  return (
    <section id="contact">
      <div className="bg-gray-100">
        <div className="flex justify-center">
          <div className="w-full max-w-3xl text-center">
            <div className="section-title mb-[4rem] mt-[4rem]">
              <h2>Contact</h2>
              <span style={{ fontSize: "17px" }}>
                FOR{" "}
                <i>
                  <span className="text-red-600 font-bold">
                    CAREER INQUIRIES
                  </span>
                </i>
              </span>
              <p>
                <strong>Availiable</strong>: Monday to Sunday, 9am - 7pm
              </p>
              <p>
                <strong>Email:</strong>&nbsp;&nbsp;
                <a href="mailto:jonathanraxa@gmail.com">
                  jonathanraxa@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

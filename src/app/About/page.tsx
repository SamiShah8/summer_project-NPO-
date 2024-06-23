function About(){
    return (
      <div>
        <div className="  bg-purple-300 flex justify-center items-center flex-col h-80 ">
          <h1 className="text-7xl text-white shadow-sm font-extrabold ">
            About Us
          </h1>
        </div>
        <div className="grid grid-cols-2 p-10 gap-4">
          <div className="col-span-1 p-2 justify-center">
            <p>
              At Donation For Cause, we believe in the power of community and
              compassion. Our mission is to make a positive impact on the lives
              of those in need through dedicated support, innovative programs,
              and heartfelt donations. We are a non-profit organization
              committed to providing essential resources and creating
              sustainable solutions to address the challenges faced by
              vulnerable populations.
            </p>
            <p>
              Over the years, we have touched the lives of thousands of
              individuals and families. Our projects have led to improved health
              outcomes, increased access to education, and stronger, more
              resilient communities. We are proud of the tangible differences we
              have made and remain committed to expanding our reach and impact.
            </p>
            <p>
              Looking ahead, we aim to expand our reach and deepen our impact.
              We envision a future where every individual has the resources and
              support they need to lead a healthy, fulfilling life. With your
              help, we can continue to drive change and foster a more equitable
              world. Thank you for joining us on this journey. Together, we can
              make a difference. For more information or to get involved, please
              contact us at 9848879330 or visit our www.donationforcause.com.
            </p>
          </div>
          <div className="h-100">
            <img
              src="/assests/donation3.jpg"
              alt="about"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
        <div className="grid grid-cols-4 p-10 gap-4">

        </div>

      </div>
    );

}
export default About;
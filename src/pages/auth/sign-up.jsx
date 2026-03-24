import React from "react";
import Bt from "../../assets/bt.png";
import Icon from "../../assets/Icon.png";
import Text from "../../components/text";
import { Link } from "react-router-dom";
import Input from "../../components/input";
import { Button } from "../../components/button";
import { GoogleButton } from "../../components/button";

const Signup = () => {
  return (
    <div
      className="min-h-250 font-Nunito flex items-center justify-center bg-gray-100"
      style={{
        backgroundImage: `url(${Bt})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className=" lg:flex md:flex grid">
        <div className=" bg-[#BF5AF2] rounded-bl-2xl rounded-tl-2xl w-100 p-4 grid justify-center items-center">
          <div>
            <Text
              className="text-white font-medium  "
              size=" text-[32px]"
            >
              Welcome to CeduGames
            </Text>
            <Text className="text-white mb-4 font-light">
              Cephas Educational Games
            </Text>

            <Text className="text-white font-light">
              Cephas Educational Games - Where <br /> learning meets play.
            </Text>
          </div>

          <div>
            <img
              src={Icon}
              className=" w-40 mx-auto"
              alt="Icon"
            />
          </div>

          <Text className="text-white mb-4 font-light">
            Join thousands of students learning through interactive challenges
            and fun adventures.
          </Text>
          <p></p>
        </div>
        {/* <div className=" bg-white p-6">
          <div className=" mb-6">
            <div className=" flex justify-center items-center ">
              <img
                src={Bt}
                className=" w-20"
                alt=""
              />
            </div>
            <Text
              size="text-2xl"
              className="font-semibold"
            >
              Create an account to get started
            </Text>

            <p className="text-gray-500 text-sm">
              Fill in your details to join the community.
            </p>
          </div>

          <div className="bg-purple-100 text-purple-600 text-sm rounded-lg px-4 py-3 mb-6">
            ✨ Let's get smart and have fun!
          </div>

          <p className="text-center mb-6 text-gray-700">
            Let's get smart and have fun
          </p>

          <div className="grid mb-4 grid-cols-2 gap-4">
            <Input
              label="Email"
              type="email"
              placeholder="example@mail.com"
            />

            <Input
              label="Username"
              type="text"
              placeholder="johndoe123"
            />

            <Input
              label="Phone number"
              type="number "
              placeholder="+1 (555) 000-0000"
            />

            <Input
              type="date"
              label="Date of Birth"
            />

            <Input
              label="Create Password"
              type="password"
              placeholder="*********"
            />

            <Input
              label="Confirm Password"
              type="password"
              placeholder="*********"
            />
          </div>

          <div className="mb-2">
            <Button text="Sign In" />
          </div>

          <button className="">Continue with Google</button>

          <Button text="Continue with Google" />

          <Link to="/sign-up">
            <p className="text-center text-sm mt-6">
              Don’t have an account?
              <span className="text-purple-600 cursor-pointer ml-1">
                Signup
              </span>
            </p>
          </Link>
        </div> */}

        <div className="flex items-center rounded-tr-2xl rounded-br-2xl justify-center bg-gray-50 p-20 px-8">
          <div className="w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-2">
              Create an account to get started
            </h2>

            <p className="text-gray-500 mb-6">
              Fill in your details to join the community.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <Input
                label="Email"
                placeholder="example@mail.com"
              />

              <Input
                label="Username"
                placeholder="johndoe123"
              />

              <Input
                label="Phone number"
                placeholder="+1 (555) 000-0000"
              />

              <Input
                label="Date of birth"
                placeholder="mm/dd/yyyy"
              />

              <Input
                label="Create Password"
                type="password"
                placeholder="********"
              />

              <Input
                label="Confirm Password"
                type="password"
                placeholder="********"
              />
            </div>

            <div className="space-y-4">
              <Button text="Sign In" />

              <GoogleButton />
            </div>

            <Link to="/login">
              <p className="text-center font-semibold text-sm mt-4">
                Already have an account?{" "}
                <span className="text-purple-600 cursor-pointer">Login</span>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

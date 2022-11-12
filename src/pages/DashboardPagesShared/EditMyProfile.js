import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Loading from "../../shared/Loading";

const EditMyProfile = () => {
  const navigate = useNavigate();
  const [education, setEducation] = useState([]);
  const [socialLinks, setSocialLinks] = useState([]);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    setUserInfo(JSON.parse(localStorage.getItem("user")));
  }, []);

  useEffect(() => {
    if (userInfo?.education) setEducation(userInfo.education);
    if (userInfo?.socialLinks) setSocialLinks(userInfo.socialLinks);
  }, [userInfo]);

  const eduRef = useRef(null);
  const handleEduChanges = () => {
    setEducation([...education, eduRef.current.value]);
    eduRef.current.value = "";
  };

  const mediaRef = useRef(null);
  const valueRef = useRef(null);
  const handleSocialLinksChanges = () => {
    setSocialLinks([
      ...socialLinks,
      { key: mediaRef?.current?.value, value: valueRef.current.value },
    ]);

    mediaRef.current.value = "";
    valueRef.current.value = "";
  };

  const [loading, setLoading] = useState(false);
  // USE FORM --- juice
  const {
    register,
    resetField,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      address: userInfo?.address,
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);
    data.education = education;
    data.socialLinks = socialLinks;

    if (data.address.replace(/\s\s+/g, "") === "")
      data.address = userInfo?.address;
    else {
      data.address = data.address.replace(/\s\s+/g, "");
    }
    setLoading(false);

    console.log(data);
  };
  if (loading) {
    return <Loading msg="rendering.."></Loading>;
  }

  //   console.log(watch("address"));

  return (
    <div className="py-6 px-10 w-full">
      <p className="text-sm font-bold mb-6">Update Account</p>
      <div className="grid w-full gap-6 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
        {/* edu */}
        <div className="text-xs">
          <p className="mb-4">Add Education</p>
          <div className="flex justify-between gap-5 w-full">
            <input
              ref={eduRef}
              type="text"
              placeholder="Type here"
              className="input input-bordered rounded-none text-xs w-11/12"
            />
            <button
              onClick={handleEduChanges}
              className="btn btn-success btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <p className="underline my-4">Education Changes</p>
          <div className="">
            <p className="font-bold border border-gray-200 p-1">Education</p>
            {education?.map((x) => {
              return (
                <p key={x} className="border border-gray-200 p-1">
                  {x}
                </p>
              );
            })}
          </div>
        </div>
        {/* social link */}
        <div className="text-xs">
          <p className="mb-4">Add SocialLinks</p>
          <div className="flex justify-between gap-5 w-full">
            <input
              ref={mediaRef}
              type="text"
              placeholder="Social Name"
              className="input input-bordered rounded-none text-xs "
            />
            <input
              ref={valueRef}
              type="text"
              placeholder="Social Link"
              className="input input-bordered rounded-none text-xs "
            />
            <button
              onClick={handleSocialLinksChanges}
              className="btn btn-success btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <p className="underline my-4">SocialLinks Changes</p>
          <div className="">
            <div className="grid grid-cols-2 font-bold ">
              <p className="border border-gray-200 p-1">Social Media</p>
              <p className="border border-gray-200 p-1">Link</p>
            </div>
            {socialLinks?.map((x) => {
              return (
                <div key={x?.value} className="grid grid-cols-2">
                  <p className=" p-1 border border-gray-200">{x?.key}</p>
                  <p className=" p-1 border border-gray-200">{x?.value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* address form */}
      <form
        className="flex flex-col items-center justify-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* address */}
        <div className="form-control text-xs w-full mt-6">
          <p className="font-bold">Address</p>
          <p className="my-2">Your Current Address : {userInfo?.address}</p>
          <p className="font-bold underline mb-2">Update your Address</p>
          <textarea
            {...register("address", {
              required: false,
            })}
            value={watch("address")}
            className="textarea textarea-bordered h-24 text-xs rounded-none"
            placeholder="Type Here"
          ></textarea>
        </div>

        <input
          type="submit"
          className="btn btn-warning w-full max-w-xs rounded-none mt-10"
          name=""
          value="Update Profile"
        />
      </form>
    </div>
  );
};

export default EditMyProfile;

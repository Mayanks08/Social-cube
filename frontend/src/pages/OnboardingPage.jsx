// import { useState } from "react";
// import  useAuthUser  from "../hooks/useAuthUser.js";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import toast from "react-hot-toast";
// import { completeOnboarding } from "../lib/api.js";
// import { CameraIcon, LoaderIcon, MapPinIcon, ShipWheelIcon, ShuffleIcon } from "lucide-react";
// import { LANGUAGES } from "../constants/index.js";

// const OnboardingPage = () => {
//  const {authUser}= useAuthUser();
//  const queryClient = useQueryClient();


//  const [formState,setFormState] = useState({
//   fullName:authUser?.fullName || "",
//   bio:authUser?.bio ||"",
//   nativeLanguage:authUser?.nativeLanguage || "",
//   learningLanguage:authUser?.learningLanguage||"",
//   location:authUser?.location||"",
//   profilePic:authUser?.profilePic||"",
//  });
//   const {mutate:onboardingMutation, isPending}=useMutation({
//     mutationFn:completeOnboarding,
//     onSuccess:()=>{
//       toast.success(
//         " Profile Onboarding completed successfully");
//         queryClient.invalidateQueries({queryKey:['authUser']});
      
//     },
//     onError:(error)=>{
//       console.log(error)
//     }
//   })

//   const handleSubmit =(e)=>{
//     e.preventDefault();
//     console.log("Form State:", formState);
//     onboardingMutation(formState);
//   }

//   const handleRandomAvatar=()=>{
//    const idx = Math.floor(Math.random()*100)+1;
//    const randomAvatar = `https://randomuser.me/api/portraits/${idx}/men.jpg`;
//    setFormState({...formState, profilePic:randomAvatar});
//    toast.success("Random profile picutre generated")
//   }

//   return (
//     <div className="min-h-screen bg-base-100 flex items-center justify-center p-4">
//       <div className="card bg-base-200 w-full max-w-3xl shadow-xl">
//         <div className="card-body p-6 sm:p-8">
//           <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">Complete Your Profile</h1>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* PROFILE PIC AREA */}
//           <div className="flex flex-col items-center justify-center space-y-4">
//             {/* image preview */}
//             <div className="size-32 rounded-full bg-base-300 overflow-hidden">
//               {formState.profilePic ? (
//                 <img 
//                 src={formState.profilePic} 
//                 alt="profile pic" 
//                  className="w-full h-full object-cover"/>
//               ):(
//                 <div className="flex items-center justify-center h-full">
//                   <CameraIcon className="size-12 text-base-content opacity-40"/>
//                 </div>
//               )}
//             </div>
//             {/* generate random avatar btn */}
//             <div className="flex items-center gap-2">
//               <button type="button" onClick={handleRandomAvatar} className="btn btn-accent">
//                 <ShuffleIcon className="size-4 mr-2"/>
//                 Generate Random Avatar
//               </button>
//             </div>
//           </div>
//               {/* FullNAME */}
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Full Name</span> 
//               </label>
//               <input
//               type="text"
//               name="fullName"
//               value={formState.fullName}
//               onChange={(e)=>setFormState({...formState, fullName: e.target.value})}
//               placeholder="Enter your full name"
//               className="input input-bordered w-full "/>
//             </div>
//             {/* BIO */}
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Bio</span>
//               </label>
//               <textarea
//               name="bio"
//               value={formState.bio}
//               onChange={(e)=>setFormState({...formState, bio: e.target.value})}
//               placeholder="Tell us about yourself and what you learning here"
//               className="textarea textarea-bordered h-24 "/>
//             </div>
//             {/* language */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
//               {/* Mother Tongue */}
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Mother Tongue</span>
//                 </label>
//                 <select
//                   name="nativeLanguage"
//                   value={formState.nativeLanguage}
//                   onChange={(e) => setFormState({ ...formState, nativeLanguage: e.target.value })}
//                   className="select select-bordered w-full"
//                 >
//                   <option value="">Select Your Mother Tongue</option>
//                   {LANGUAGES.map((lang) => (
//                     <option key={`native-${lang}`} value={lang.toLowerCase()}>
//                       {lang}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               {/* Learning Language */}
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Learning Language</span>
//                 </label>
//                 <select
//                   name="learningLanguage"
//                   value={formState.learningLanguage}
//                   onChange={(e) => setFormState({ ...formState, learningLanguage: e.target.value })}
//                   className="select select-bordered w-full"
//                 >
//                   <option value="">Select Your Learning Language</option>
//                   {LANGUAGES.map((lang) => (
//                     <option key={`learning-${lang}`} value={lang.toLowerCase()}>
//                       {lang}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>
//             {/* location  */}
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Location</span>
//               </label>
//               <div className="relative">
//                 <MapPinIcon className="absolute top-1/2 transform -translate-y-1/2  size-5 text-base-content opacity-70" />
//                 <input type="text"
//                 name="location"
//                 value={formState.location}
//                 onChange={(e)=>setFormState({...formState, location: e.target.value})}
//                 className="input input-bordered w-full" 
//                 placeholder="Enter your location"/>
//               </div>
//             </div>
//             {/* submit Button */}
//             <button className="btn btn-primary" 
//             disabled={isPending} type="submit">
//               {isPending ? (<>
//               <ShipWheelIcon  className="size-5 mr-2"/>
//               CompleteOnboarding
//               </>
//               ) : (<>
//               <LoaderIcon  className=" animate-spin size-5 mr-2"/>
//               onboarding...
//               </>)}
//             </button>
//         </form>
//         </div>

//       </div>
//     </div>
//   )
// }

// export default OnboardingPage;

import { useState } from "react";
import useAuthUser from "../hooks/useAuthUser.js";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { completeOnboarding } from "../lib/api.js";
import { CameraIcon, LoaderIcon, MapPinIcon, ShipWheelIcon, ShuffleIcon } from "lucide-react";
import { LANGUAGES } from "../constants/index.js";

const OnboardingPage = () => {
  const { authUser } = useAuthUser();
  const queryClient = useQueryClient();

  const [formState, setFormState] = useState({
    fullName: authUser?.fullName || "",
    bio: authUser?.bio || "",
    nativeLanguage: authUser?.nativeLanguage || "",
    learningLanguage: authUser?.learningLanguage || "",
    location: authUser?.location || "",
    profilePic: authUser?.profilePic || "",
  });

  const { mutate: onboardingMutation, isPending } = useMutation({
    mutationFn: completeOnboarding,
    onSuccess: () => {
      toast.success("Profile Onboarding completed successfully");
      queryClient.invalidateQueries({ queryKey: ["authUser"] });
    },
    onError: (error) => {
      console.log(error);
    },
    
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onboardingMutation(formState);
  };

  const handleRandomAvatar = () => {
    const idx = Math.floor(Math.random() * 100) + 1;
    const randomAvatar = `https://randomuser.me/api/portraits/men/${idx}.jpg`;
    setFormState({ ...formState, profilePic: randomAvatar });
    toast.success("Random profile picture generated");
  };

  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center p-4">
      <div className="card bg-base-200 w-full max-w-3xl shadow-xl">
        <div className="card-body p-6 sm:p-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">Complete Your Profile</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* PROFILE PIC AREA */}
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="size-32 rounded-full bg-base-300 overflow-hidden">
                {formState.profilePic ? (
                  <img
                    src={formState.profilePic}
                    alt="profile pic"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <CameraIcon className="size-12 text-base-content opacity-40" />
                  </div>
                )}
              </div>
              <div className="flex items-center gap-2">
                <button type="button" onClick={handleRandomAvatar} className="btn btn-accent">
                  <ShuffleIcon className="size-4 mr-2" />
                  Generate Random Avatar
                </button>
              </div>
            </div>

            {/* Full Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formState.fullName}
                onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                placeholder="Enter your full name"
                className="input input-bordered w-full"
              />
            </div>

            {/* Bio */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Bio</span>
              </label>
              <textarea
                name="bio"
                value={formState.bio}
                onChange={(e) => setFormState({ ...formState, bio: e.target.value })}
                placeholder="Tell us about yourself and what you are learning here"
                className="textarea textarea-bordered h-24"
              />
            </div>

            {/* Language */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Mother Tongue */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Mother Tongue</span>
                </label>
                <select
                  name="nativeLanguage"
                  value={formState.nativeLanguage}
                  onChange={(e) => setFormState({ ...formState, nativeLanguage: e.target.value })}
                  className="select select-bordered w-full"
                >
                  <option value="">Select Your Mother Tongue</option>
                  {LANGUAGES.map((lang) => (
                    <option key={`native-${lang}`} value={lang.toLowerCase()}>
                      {lang}
                    </option>
                  ))}
                </select>
              </div>

              {/* Learning Language */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Learning Language</span>
                </label>
                <select
                  name="learningLanguage"
                  value={formState.learningLanguage}
                  onChange={(e) => setFormState({ ...formState, learningLanguage: e.target.value })}
                  className="select select-bordered w-full"
                >
                  <option value="">Select Your Learning Language</option>
                  {LANGUAGES.map((lang) => (
                    <option key={`learning-${lang}`} value={lang.toLowerCase()}>
                      {lang}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Location */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <div className="relative">
                <MapPinIcon className="absolute top-1/2 transform -translate-y-1/2 left-3 size-5 text-base-content opacity-70" />
                <input
                  type="text"
                  name="location"
                  value={formState.location}
                  onChange={(e) => setFormState({ ...formState, location: e.target.value })}
                  className="input input-bordered w-full pl-10"
                  placeholder="Enter your location"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button className="btn btn-primary" disabled={isPending} type="submit">
              {isPending ? (
                <>
                  <LoaderIcon className="animate-spin size-5 mr-2" />
                  Onboarding...
                </>
              ) : (
                <>
                  <ShipWheelIcon className="size-5 mr-2" />
                  Complete Onboarding
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OnboardingPage;
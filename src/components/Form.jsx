const Form = () => {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-lg">
      <form
        style={{ background: "rgba(27, 27, 50, 0.8)" }}
        className="rounded p-6 md:p-10 md:mx-28"
      >
        <div className="form-group">
          <label className="text-base sm:text-lg md:text-xl mb-2 " htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="w-full h-10 px-3 mb-4 sm:mb-5 md:mt-2 py-1.5 text-gray-700  rounded"
            placeholder="Enter your name"
            required=""
          />
        </div>
        <div className="form-group">
          <label className="text-base sm:text-lg md:text-xl mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full h-10 px-3 mb-4 sm:mb-5 md:mt-2 py-1.5 text-gray-700  rounded"
            placeholder="Enter your email"
            required=""
          />
        </div>
        <div className="form-group">
          <label className="text-base sm:text-lg md:text-xl mb-2" htmlFor="number">
            Age<span className="clue">(optional)</span>
          </label>
          <input
            type="number"
            name="age"
            id="number"
            min={10}
            max={99}
            className="w-full h-10 px-3 mb-4 sm:mb-5 md:mt-2 py-1.5 text-gray-700  rounded"
            placeholder="Age"
          />
        </div>
        <div className="form-group">
          <label className="text-base sm:text-lg md:text-xl mb-2" htmlFor="dropdown">
            Which option best describes your current role?
          </label>
          <select
            id="dropdown"
            name="role"
            className="w-full h-10 px-3 py-1.5 md:mt-2 mb-4 sm:mb-5 text-gray-700 outline rounded"
            required=""
          >
            <option disabled="" value="">
              Select current role
            </option>
            <option value="student">Student</option>
            <option value="job">Full Time Job</option>
            <option value="learner">Full Time Learner</option>
            <option value="preferNo">Prefer not to say</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label className="text-base sm:text-lg md:text-xl mb-2" htmlFor="recommendation">
            Would you recommend freeCodeCamp to a friend?
          </label>
          <div className="flex md:ml-2 flex-col mb-5">
            <label className="flex items-center md:text-lg text-base mr-6">
              <input
                name="recommendation"
                defaultValue="definitely"
                type="radio"
                className="inline-block text-xs mr-2  min-h-5 min-w-5"
                defaultChecked
              />
              Definitely
            </label>
            <label className="flex items-center md:text-lg text-base mr-6">
              <input
                name="recommendation"
                defaultValue="maybe"
                type="radio"
                className="inline-block text-xs mr-2 min-h-5 min-w-5"
              />
              Maybe
            </label>
            <label className="flex items-center md:text-lg text-base">
              <input
                name="recommendation"
                defaultValue="not-sure"
                type="radio"
                className="inline-block mr-2 min-h-5 min-w-5"
              />
              Not sure
            </label>
          </div>
        </div>
        <div className="form-group">
          <label className="text-base sm:text-lg md:text-xl mb-2" htmlFor="favorite-feature">
            What is your favorite feature of freeCodeCamp?
          </label>
          <select
            id="favorite-feature"
            name="favoriteFeature"
            className="w-full h-10 px-3 py-1.5 md:mt-2 mb-4 sm:mb-5 text-gray-700 outline rounded"
            required=""
          >
            <option disabled="" value="">
              Select an option
            </option>
            <option value="challenges">Challenges</option>
            <option value="projects">Projects</option>
            <option value="community">Community</option>
            <option value="openSource">Open Source</option>
          </select>
        </div>
        <div className="form-group">
          <label className="text-base sm:text-lg md:text-xl mb-2" htmlFor="improvements">
            What would you like to see improved?
            <span className="clue">(Check all that apply)</span>
          </label>
          <div className="flex md:ml-2 flex-col mb-5">
            <label className="flex items-center md:text-lg text-base mr-6 mb-3">
              <input
                name="improvements"
                defaultValue="front-end-projects"
                type="checkbox"
                className="inline-block mr-2 md:mt-2 min-h-5 min-w-5"
              />
              Front-end Projects
            </label>
            <label className="flex items-center md:text-lg text-base mb-3">
              <input
                name="prefer"
                defaultValue="back-end-projects"
                type="checkbox"
                className="inline-block mr-2 min-h-5 min-w-5"
              />
              Back-end Projects
            </label>
            <label className="flex items-center md:text-lg text-base mb-3">
              <input
                name="prefer"
                defaultValue="data-visualization"
                type="checkbox"
                className="inline-block mr-2 min-h-5 min-w-5"
              />
              Data Visualization
            </label>
            <label className="flex items-center md:text-lg text-base mb-3">
              <input
                name="prefer"
                defaultValue="challenges"
                type="checkbox"
                className="inline-block mr-2 min-h-5 min-w-5"
              />
              Challenges
            </label>
            <label className="flex items-center md:text-lg text-base mb-3">
              <input
                name="prefer"
                defaultValue="open-source-community"
                type="checkbox"
                className="inline-block mr-2 min-h-5 min-w-5"
              />
              Open Source Community
            </label>
            <label className="flex items-center md:text-lg text-base mb-3">
              <input
                name="prefer"
                defaultValue="gitter-help-rooms"
                type="checkbox"
                className="inline-block mr-2 min-h-5 min-w-5"
              />
              Gitter help rooms
            </label>
            <label className="flex items-center md:text-lg text-base mb-3">
              <input
                name="prefer"
                defaultValue="videos"
                type="checkbox"
                className="inline-block mr-2 min-h-5 min-w-5"
              />
              Videos
            </label>
            <label className="flex items-center md:text-lg text-base mb-3">
              <input
                name="prefer"
                defaultValue="city-meetups"
                type="checkbox"
                className="inline-block mr-2 min-h-5 min-w-5"
              />
              City Meetups
            </label>
            <label className="flex items-center md:text-lg text-base mb-3">
              <input
                name="prefer"
                defaultValue="wiki"
                type="checkbox"
                className="inline-block mr-2 min-h-5 min-w-5"
              />
              Wiki
            </label>
            <label className="flex items-center md:text-lg text-base mb-3">
              <input
                name="prefer"
                defaultValue="forum"
                type="checkbox"
                className="inline-block mr-2 min-h-5 min-w-5"
              />
              Forum
            </label>
            <label className="flex items-center md:text-lg text-base mb-3">
              <input
                name="prefer"
                defaultValue="additional-courses"
                type="checkbox"
                className="inline-block mr-2 min-h-5 min-w-5"
              />
              Additional Courses
            </label>
          </div>
        </div>
        <div className="form-group">
          <label className="text-base sm:text-lg md:text-xl mb-2" htmlFor="comments">
            Any comments or suggestions?
          </label>
          <textarea
            id="comments"
            className="w-full p-2.5 mb-6 text-gray-900 md:mt-2 md:min-h-32 resize-y rounded"
            name="comment"
            placeholder="Enter your comment here..."
          />
        </div>
        <div className="form-group">
          <button
            type="submit"
            id="submit"
            style={{ backgroundColor: "#37af65" }}
            className="w-full p-3 mb-6 rounded-sm cursor-pointer border-0"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;

import React, { useEffect } from "react";
import useAuth from "../hooks/useAuth";
import useApi from "../api/useApi";
import toast from "react-hot-toast";

const Home = () => {
  useAuth();
  const { apiCall, response } = useApi("GET");
  const { apiCall: addVote } = useApi("POST");
  const polls = response?.data;
  useEffect(() => {
    apiCall("/votes");
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      apiCall("/votes");
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  const handleAddVote = async (poll) => {
    try {
      await addVote("/votes", {
        poll,
      });
    } catch (e) {
      toast.error(e.message);
    }
  };

  return (
    <div className="grid grid-cols-3 p-16 gap-14">
      {polls?.map((poll, index) => {
        console.log(poll);
        return (
          <div
            className="flex flex-col bg-slate-200 p-3 rounded-lg border border-slate-500"
            key={index}
          >
            <div className="flex items-center gap-2">
              <div className="font-semibold">Name:</div>
              <div>{poll?.name}</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="font-semibold">Votes:</div>
              <div>{poll?.voteCount}</div>
            </div>
            <div className="flex items-center mt-4 gap-2 justify-end">
              <button
                onClick={() => handleAddVote(poll?._id)}
                className="bg-green-500 rounded cursor-pointer text-white px-3"
              >
                Vote
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;

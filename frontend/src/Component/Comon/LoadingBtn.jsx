import React from 'react'
import { BeatLoader } from "react-spinners"
function LoadingBtn({loading,loadingText,btnText}) {
  return (
     <div className="flex justify-center my-5">
            <button
              type="submit"
              disabled={loading}
              className={`
              flex items-center justify-center gap-2
              bg-gradient-to-r from-[#02C98D] to-[#0575E6]
              p-2 w-40 rounded-full
              text-sm text-white font-semibold
              shadow-md
              transition-all duration-300
              ${loading ? "opacity-80 cursor-not-allowed" : "hover:scale-105"}
              `}
               >
              {loading ? (
                <>
                  <BeatLoader color="white"  radius={2}  size={10}/>
                  <span>{loadingText}</span>
                </>
              ) : (
                <>
                  
                  <span>{btnText}</span>
                </>
              )}
            </button>
          </div>
  )
}

export default LoadingBtn
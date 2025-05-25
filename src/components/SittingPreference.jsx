import React, { useState } from "react";

  export default function SittingPreference({ showGeneral}) {
  const generalArea = ["Conference Room", "The Bar", "Dining Hall", "Buffet Section","Live Music/Stage Area","Chef’s Table Experience"];
  const vipArea = ["Private Events","Venue Hires","VIP Conference Room", "VIP Lounge","Wine Cellar Private Dining"];


  return (
  
      <>
        <option  default selected value="" disabled>
          -- Select a Sitting Area --
        </option>

        {showGeneral && (
          <optgroup label="General Area" className="bg-[#111515] text-center" >
            {generalArea.map((item, index) => (
              <option className="text-[#c4a350]!" key={`general-${index}`} value={item}>
                {item}
              </option>
            ))}
          </optgroup>
        )}

        <optgroup label="VIP Area" className="bg-[#111515] text-center">
          {vipArea.map((item, index) => (
            <option key={`vip-${index}`} value={item} className="items-center text-[#c4a350]!">
              {item}
            </option>
          ))}
        </optgroup>
      </>
    
  );
}


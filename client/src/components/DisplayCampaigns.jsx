import React from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from "uuid";
import FundCard from './FundCard';
import { loader } from '../assets';
import { daysLeft } from '../utils';

const DisplayCampaigns = ({ title, isLoading, campaigns }) => {
  const navigate = useNavigate();

  const handleNavigate = (campaign) => {
    navigate(`campaign-details/${campaign.title}`, { state: campaign })
  }

  const filteredCampaigns = campaigns.filter(campaign => daysLeft(campaign.deadline) > 0);
  
  return (
    <div>
      <h1 className="font-epilogue font-semibold text-[18px] text-white text-left">{title} ({campaigns.length})</h1>

      <div className="flex flex-wrap mt-[20px] gap-[20px]">

      {!isLoading &&
          campaigns.length > 0 &&
          campaigns.map((campaign) => {
            const remainingDays = daysLeft(campaign.deadline);
            const filteredCampaigns = remainingDays > 0;

            return (
              filteredCampaigns && (
                <FundCard
                  key={uuidv4()}
                  {...campaign}
                  handleClick={() => handleNavigate(campaign)}
                />
              )
            );
          })}

        {isLoading && (
          <img src={loader} alt="loader" className="w-[100px] h-[100px] object-contain" />
        )}
      </div>
    </div>
  )
}

export default DisplayCampaigns
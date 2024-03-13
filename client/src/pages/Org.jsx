import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Sidebar, NavbarOrg } from "../components";
import { CampaignDetails, CreateCampaign, Home, Profile, Community, Escrow } from '../pages';


const Org = () => {
  return (

    <div className="relative sm:-8 p-4 min-h-screen flex flex-row">

      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>

      
      <div className="flex-1 absolute inset-x-0 top-0 h-16 m-50 max-sm:w-full sm:pr-5 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <NavbarOrg />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="create-campaign" element={<CreateCampaign />} />
          <Route path="campaign-details/:id" element={<CampaignDetails />} />
          <Route path="community" element={<Community />} />
          <Route path='escrow' element={<Escrow />} />
        </Routes>
      </div>
      
    </div>
  )
}

export default Org
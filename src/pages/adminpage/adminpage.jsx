import React from 'react';

import './adminpage.scss';

import DroneRegistration from '../../components/add-item/drone-registration';
import CameraRegistration from '../../components/add-item/camera-registration';

const AdminPage = () => (
    <div className='admin-page' >
        <DroneRegistration />
        <CameraRegistration />
    </div>
);

export default AdminPage;
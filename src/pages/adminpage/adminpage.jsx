import React from 'react';

import './adminpage.scss';

import DroneRegistration from '../../components/drone-registration';
import CameraRegistration from '../../components/camera-registration';

const AdminPage = () => (
    <div className='admin-page' >
        <DroneRegistration />
        <CameraRegistration />
    </div>
);

export default AdminPage;
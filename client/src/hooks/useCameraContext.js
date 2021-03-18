import React, { useState } from 'react'

import useCameraData from './useCameraData'

const CameraContext = React.createContext(null)

const cam = useCameraData();
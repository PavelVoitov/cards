import React from 'react'
import {Slider, SliderProps} from '@mui/material'



const SuperRange: React.FC<SliderProps> = () => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: 300,
                color: '#4caf50',
            }}
        />
    )
}

export default SuperRange

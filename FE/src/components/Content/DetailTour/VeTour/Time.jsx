import { Box } from '@mui/material'
import React from 'react'
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
function TimeTour() {
    return (
        <Box component={'div'}
            sx={{
                width: '145px',
                height: '88px',
                boxShadow: "0px 1px 2px rgb(3,18,26,0.2)",
                position: 'absolute',
                top: '55px',
                left: '0',
                borderRadius: '5px',
                backgroundColor: 'white',
                zIndex: '999',
                padding: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                cursor: "pointer"
            }}
        >
            <i class="fa-regular fa-circle-dot" style={{ fontSize: "20px", color: "rgb(1, 148, 243)", fontWeight: 700 }}></i>

            <p style={{ fontWeight: '700' }}>18:30</p>
        </Box>
    )
}

export default TimeTour
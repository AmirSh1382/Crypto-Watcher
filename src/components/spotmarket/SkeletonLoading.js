import React, { useEffect, useState } from 'react';

// MUI
import { Skeleton } from '@mui/material';
import { Box } from '@mui/system';

const SkeletonLoading = () => {

    const [ skeleton, setSkeleton ] = useState([])

    useEffect(() => {
        for(let i = 0 ; i < 25 ; i++){
            setSkeleton(prevState => [...prevState, i])
        }

        // eslint-disable-next-line
    }, [])


    return (
        <div className='container max-w-6xl mx-auto px-6 md:px-12 my-10'>
            {
                skeleton.map(item => (
                    <div className='mb-3 flex items-center' key={item}>
                        <Skeleton sx={{backgroundColor: "rgba(41, 54, 68)"}} animation="wave" variant="circular" width={45} height={40} />
                        <Box ml={2} component="div" variant="div" sx={{width: "100%"}}>
                            <Skeleton sx={{backgroundColor: "rgba(41, 54, 68)"}} animation="wave" height={45} />
                        </Box>
                    </div>
                ))
            }
        </div>
    );
};

export default SkeletonLoading;
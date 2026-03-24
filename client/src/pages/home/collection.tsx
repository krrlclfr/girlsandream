import { useState } from "react"
import { Box, Typography, Container } from "@mui/material"
import collection1 from './../../assets/image/collection/collection_1.jpg'
import collection2 from '../../assets/image/collection/collection_2.jpg'
import collection3 from '../../assets/image/collection/collection_3.jpg'
import collection4 from '../../assets/image/collection/collection_4.jpg'
import collection5 from '../../assets/image/collection/collection_5.jpg'
import collection6 from '../../assets/image/collection/collection_6.jpg'
import collection7 from '../../assets/image/collection/collection_7.jpg'
import collection8 from '../../assets/image/collection/collection_8.jpg'

type CollectionItem = {
    front: string;
    back: string;
}

const CollectionPage = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    const collectionItems: CollectionItem[] = [
        { front: collection1, back: collection2 },
        { front: collection3, back: collection4 },
        { front: collection5, back: collection6 },
        { front: collection7, back: collection8 },
    ];

    return (
        <>
            <Container maxWidth='xl' disableGutters sx={{ mt: 4, height: '900px', width: '100%'}}>
                <Typography variant="h4" component="div" sx={{ textAlign: 'center', my: 12 }}>
                    Collection
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 4 }}>
                    {collectionItems.map((item, index) => {
                        const isHovered = hoveredIndex === index;
                        return (
                            <Box 
                                key={index}
                                onMouseEnter={() => setHoveredIndex(index)} 
                                onMouseLeave={() => setHoveredIndex(null)}       
                                sx={{
                                    position: 'relative',
                                    width: 450,
                                    height: 600,
                                    overflow: 'hidden',
                                    cursor: 'pointer'
                                }}>

                                <Box
                                    component="img"
                                    src={item.front}
                                    alt="image"
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        transition: 'opacity 0.5s ease',
                                        opacity: isHovered ? 0 : 1
                                    }}
                                /> 

                                <Box
                                    component="img"
                                    src={item.back}
                                    alt="image"
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        transition: 'opacity 0.5s ease',
                                        opacity: isHovered ? 1 : 0
                                    }}
                                /> 
                            </Box>
                        )
                    })}
                </Box>
            </Container>
        </>
    )
}

export default CollectionPage
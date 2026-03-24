import { Router } from 'express'
import type { Request, Response } from 'express'

interface ProductType {
    productCode: string,
    productName: string,
    productColor: string,
    productPrice: number,
    productImage: string,
    availableSizes: {
        xs: boolean,
        s: boolean,
        m: boolean,
        l: boolean,
        xl: boolean
    }
}

const productItems: ProductType[] = [
    { 
        productCode: 'aO1', 
        productName: 'aO1 - Acid Black', 
        productColor: 'Acid Black', 
        productPrice: 629, 
        productImage: '../assets/image/pants/a01.jpg',
        availableSizes: {
            xs: true,
            s: true,
            m: true,
            l: true,
            xl: true
        }
    },
    { 
        productCode: 'aO2', 
        productName: 'aO2 - Blue Green', 
        productColor: 'Blue Green', 
        productPrice: 629, 
        productImage: '../assets/image/pants/a02.jpg',
        availableSizes: {
            xs: true,
            s: false,
            m: true,
            l: true,
            xl: false
        }
    },
    { 
        productCode: 'aO3', 
        productName: 'aO3 - Acid Blue', 
        productColor: 'Acid Blue', 
        productPrice: 629, 
        productImage: '../assets/image/pants/a03.jpg',
        availableSizes: {
            xs: false,
            s: true,
            m: true,
            l: true,
            xl: false
        }
    },
    { 
        productCode: 'aO4', 
        productName: 'aO4 - Pure Grey', 
        productColor: 'Pure Grey', 
        productPrice: 629, 
        productImage: 'public/assets/image/pants/a04.jpg',
        availableSizes: {
            xs: false,
            s: true,
            m: true,
            l: true,
            xl: true
        }
    }
]

const router = Router()

router.get('/', async (req: Request, res: Response) =>{
    res.json(productItems)
})

export default router
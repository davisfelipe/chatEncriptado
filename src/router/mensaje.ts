import {Router, Request, Response} from 'express'
const router = Router()
router.get('/',(req: Request,res: Response)=>{
    const mensaje=req.query.mensaje
    res.send(mensaje)
})                                                                  
export default router
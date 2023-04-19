import {Router} from 'express'
import {getEmployees,getEmployee,createEmployees,updateEmployees,deleteEmployees }from '../controllers/employees.controllers.js'

const router = Router()
router.get('/employees',getEmployees)


router.get('/employees/:id',getEmployee)

router.post('/employees',createEmployees)

router.put('/employees',updateEmployees)

router.delete('/employees/:id', deleteEmployees)

export default router
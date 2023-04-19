import express from 'express';
import indexRoutes from './routes/index.routes.js';
import employeesRoutes from './routes/employees.routes.js';


const app = express ()

app.use(express.json())


   

app.use(indexRoutes)
app.use('/api', employeesRoutes)

app.listen(3050)
console.log('Server running on port 3050')


 
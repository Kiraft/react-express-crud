import app from "./app.js"
import { connectDB } from "./db.js"
connectDB();
/*app.listen(4000)
console.log('Servidor en puerto:',4000)*/
const PORT = 4000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor corriendo en http://0.0.0.0:${PORT}`);
});


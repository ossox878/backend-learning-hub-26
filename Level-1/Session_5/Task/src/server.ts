import  express,{Application} from "express";
import microbus from "./routes/microbus.router"

const app:Application = express();

app.use(express.json())
app.use("/fleets",microbus)

app.listen(3000,()=>{
  console.log(`listening to port 3000`)
})
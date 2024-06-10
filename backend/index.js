import { startServer } from "./server/server.js"
import { conectarDB } from "./config/db_config.js";


const main = () => {
    startServer();
    conectarDB();
}



(async () => {
    main()
})()
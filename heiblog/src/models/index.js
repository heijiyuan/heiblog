import { init } from "@rematch/core"
import home from './home/index'
import about from './about/index'
import speak from './speak/index'
import common from './common/index'
const store = init({
    models: {
        home,
        about,
        speak,
        common
    } 
})

export default store
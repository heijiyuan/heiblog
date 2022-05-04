import { init } from "@rematch/core"
import home from './home/index'
import about from './about/index'
import speak from './speak/index'
import common from './common/index'
import detail from './detail/index'
import music from './component/index'
const store = init({
    models: {
        home,
        about,
        speak,
        common,
        detail,
        music
    } 
})

export default store
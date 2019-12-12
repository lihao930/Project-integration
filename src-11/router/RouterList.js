import Home from '../view/Home'
import Abllt from '../view/Abllt'
import Lo from '../view/home/Lo'
import Io from '../view/home/Io'
import So from '../view/home/So'
const RouterList=[
    {
        path:'/home',
        component:Home,
        children:[
            {
                path:'/home/lo',
                component:Lo
            },{
                path:'/home/io',
                component:Io
            },{
                path:'/home/so',
                component:So
            },{
                redirect:'/home/lo'
            }
        ]
    },{
        path:'/about',
        component:Abllt
    },{
        redirect:'/home'
    }
]
export default RouterList
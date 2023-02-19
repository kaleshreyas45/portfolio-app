
import Box from '../Box'
import localGym from '../../../assets/localGym.png'
import miniCart from '../../../assets/miniCart.png'
import quotesGenerator from '../../../assets/quotesGenerator.png'
import './ReactProject.css'
const ReactProject = () => {
    const reactProjects = [{
        title:"Landing Page",
        content:"This is Landing Page created using React and Bootstrap. It includes form validation. The main purpose of this Landing Page is to demonstrate how we can reuse our react components.",
        image:localGym,
        url:"https://local-gym.netlify.app/"
    },
    {
        title:"Mini Cart",
        content:"This mini cart is created using React and bootstrap along with Redux Saga. It includes all CRUD operations along with Checkout table. The products are coming from json-api",
        image:miniCart,
        url:"https://mini-cart-saga.netlify.app"
    },
    {
        title:"Quotes Generator",
        content:"I know this project is very common but essential to practice API's in react. You will never see the repeated quotes if you are not clearing your browser storage.",
        image:quotesGenerator,
        url:"https://reactquotes.netlify.app"
    }]
  return (
    <div className="row project-row my-lg-0 d-flex" style={{'padding':'1rem'}}>{reactProjects.map((project,i)=>{
        return(
            <Box key={i} title={project.title} content={project.content} image={project.image} url={project.url}></Box>
        )
    })}</div>
  )
}

export default ReactProject
import "./index.css"


const TechnologyCard =props=>{
    const {cardDetails} = props 
    const {title,description,imgUrl} = cardDetails;
    return(
        <li className='card'>
            <div>
            <h1>{title}</h1>
        <p>{description}</p>
            </div>
        
        <img src={imgUrl} alt="url"/>

    </li>
)

    
}
    

export default TechnologyCard
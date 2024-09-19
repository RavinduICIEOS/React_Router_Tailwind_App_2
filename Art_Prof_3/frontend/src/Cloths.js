import { currencyFormatter } from "./util/formatting.js";
import Button from "./UI/Button.js";

export default function Cloths({ meal , showBuyNowButton = true })  {

    return (
        <li className="flex flex-col items-center  w-full sm:w-1/4 mt-20 ">
            <article className="text-center   mb-4">
                <img src={`http://localhost:3000/${meal.image}`} alt={meal.name}  
                className="w-[245.56px] h-[251px] mb-[10px] top-[290px] left-[171px] mx-0"/>   

                <div>
                    <h3 className="font-josefin text-[13px]" >{meal.name}</h3>
                    <p className="text-[18px] font-josefin">{meal.description}</p>
                    <p className="font-josefin text-base" >
                        {currencyFormatter.format(meal.price)}
                    </p>
                </div>
            {showBuyNowButton && (
                <p className="mt-4 mb-[100px]">
                    <Button textOnly  className="text-base px-4 py-2 font-josefin"              
                      >Buy Now</Button>
                </p>
            )}
            </article>
        </li>
    );
}
import Link from "next/link"
export default function nav(){
    return(
        <div>
            <h1>Logo</h1>
            <div className="flex flex-col">
                <h2 className="text-lg text-red-600 ">AUTRES AMBIANCES</h2>
                <a href="">Meuble d'entrée</a>
                <a href="">Cuisine</a>
                <a href="">Dressing</a>
                <a href="">Chambre d'enfant</a>
                <a href="">Salle de bain</a>    
                <a href="">Meuble TV</a>
                <a href="">Chambre parent</a>
                <a href="">Bureau</a>
            </div>
            <div className="flex flex-col text-left">
                <h2 className="text-lg text-red-600">TYPES PANNEAUX</h2>
                <div className="">
                    <input type="radio" name="tp" id="" className="w-5 h-5" />
                    <label htmlFor="">Tous</label>
                </div>
                <div>
                    <input type="radio" name="tp" id="" />
                    <label htmlFor="">Panneau mélaminé</label>
                </div>
                <div>
                    <input type="radio" name="tp" id="" />
                    <label htmlFor="">Panneau acrylique</label>
                </div>
            </div>
            <div className="flex flex-col">
                <h2 className="text-lg text-red-600">CLASSIFICATION</h2>
                <div>
                    <input type="radio" name="classification"/>
                    <label htmlFor="Tous">Tous</label>
                </div>
                <div>
                    <input type="radio" name="classification" id="" />
                    <label htmlFor="Shady">Shady</label>
                </div>
                <div>
                    <input type="radio" name="classification" id="" />
                    <label htmlFor="Hybrid">Hybrid</label>
                </div>
                <div>
                    <input type="radio" name="classification" id="" />
                    <label htmlFor="Nodes">Nodes</label>
                </div>
                <div>
                    <input type="radio" name="classification" id="" />
                    <label htmlFor="Uni">Uni</label>
                </div>
                <div>
                    <input type="radio" name="classification" id="" />
                    <label htmlFor="Fancy">Fancy</label>
                </div>
            </div>
            <div className="flex flex-col">
                <h2 className="text-lg text-red-600">Finition</h2>
                <div>
                    <input type="radio" name="finition" id="" />
                    <label htmlFor="Tous">Tous</label>
                </div>
                <div>
                    <input type="radio" name="finition" id="" />
                    <label htmlFor="Acrymatt">Acrymatt</label>
                </div>
                <div>
                    <input type="radio" name="finition" id="" />
                    <label htmlFor="Acrygloss">Acrygloss</label>
                </div>
                <div>
                    <input type="radio" name="finition" id="" />
                    <label htmlFor="Acrygloss MET">Acrygloss MET</label>
                </div>
            </div>
        </div>
    )
}
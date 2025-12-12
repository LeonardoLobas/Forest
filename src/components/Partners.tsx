import caravan from "../assets/parceiros/caravan.svg";
import dogs from "../assets/parceiros/dogs.svg";
import wildbeast from "../assets/parceiros/wildbeast.svg";
import lescone from "../assets/parceiros/lescone.svg";
import surfbot from "../assets/parceiros/surfbot.svg";
export function Partners() {
    return (
        <section className="container mb-12 sm:mb-16">
            <ul className="flex flex-col sm:flex-row sm:gap-8 justify-center items-center py-4 max-sm:divide-y-2 divide-verde-900 sm:border-b-2 sm:border-t-2 border-verde-900 *:p-4 *:*:max-h-8">
                <li>
                    <img src={caravan} alt="caravan" />
                </li>
                <li>
                    <img src={dogs} alt="dogs" />
                </li>
                <li>
                    <img src={wildbeast} alt="wildbeast" />
                </li>
                <li>
                    <img src={lescone} alt="lescone" />
                </li>
                <li>
                    <img src={surfbot} alt="surfbot" />
                </li>
            </ul>
        </section>
    );
}

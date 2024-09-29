import databizLogo from '/images/client-databiz.svg'
import audiophileLogo from '/images/client-audiophile.svg'
import meetLogo from '/images/client-meet.svg'
import makerLogo from '/images/client-maker.svg'
import heroImageMobile from '/images/image-hero-mobile.png'
import heroImageDesktop from '/images/image-hero-desktop.png'
import "./Hero.scss";
import Button from "../../../components/Button";

export default function Hero() {
    return (
        <section className='hero'>
            <div className='hero__main'>
                <div className='hero__text'>
                    <h1>Make remote work</h1>
                    <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and
                        watch
                        productivity soar.</p>
                    <Button variant='button--black' location='#'>Learn more</Button>
                </div>

                <div className='hero__client-list'>
                    <img className='hero__client' src={databizLogo} alt="Databiz Logo"/>
                    <img className='hero__client' src={audiophileLogo} alt="Audiophile Logo"/>
                    <img className='hero__client' src={meetLogo} alt="Meet Logo"/>
                    <img className='hero__client' src={makerLogo} alt="Maker Logo"/>
                </div>
            </div>

            <picture className='hero__image'>
                <source srcSet={heroImageDesktop} media={'(min-width: 64rem)'}/>
                <img src={heroImageMobile} alt="" role='presentation'/>
            </picture>
        </section>
    );
}
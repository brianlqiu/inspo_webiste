import React from "react";
import ReactDOM from "react-dom";

import ReactFullpage from "@fullpage/react-fullpage";

class Inspo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullpages: [
                {
                    key: "intro",
                    text: "My Inspo Album"
                },
                {
                    key: "dolls",
                    image: "/images/dolls.jpg",
                    desc: "Dolls (2002), directed by Takeshi Kitano, costumes by Yohji Yamamoto"
                },
                {
                    key: "murakami",
                    image: "/images/murakami.jpeg",
                    desc: "A Takeshi Murakami sculpture"
                }
            ]
        }
    }

    onLeave(origin, destination, direction) {
        console.log("onLeave", { origin, destination, direction });
        // arguments are mapped in order of fullpage.js callback arguments do something
        // with the event
    }

    render() {
        const { fullpages } = this.state;

        if (!fullpages.length) {
            return null;
        }

        return (
            <div className="Inspo">

                <ReactFullpage
                    navigation={true}
                    onLeave={this.onLeave.bind(this)}
                    licenseKey={'AA292B57-818B4C7D-BD530DCC-2171D815'}
                    render={comp => (
                        <ReactFullpage.Wrapper>
                            <div key={fullpages[0].key} className="section" id="intro">
                                <h1>{fullpages[0].text}</h1>
                            </div>
                            {fullpages.slice(1, fullpages.length).map(({ key, image, desc }) => (
                                <div key={key} className="section">
                                    <img src={image} alt={desc}/>
                                </div>
                            ))}
                            <style jsx>{`
                            @font-face {
                                font-family: 'CormorantGaramond'; 
                                    src: url('/fonts/CormorantGaramond-Medium.ttf');
                            }
                                h1 {
                                    font-family: 'CormorantGaramond';
                                    color: white
                                }

                                #intro {
                                    text-align: center
                                }

                                .section {
                                    background-color: black
                                }

                                img {
                                    height: 100%
                                }
                            `} </style>
                        </ReactFullpage.Wrapper>
                    )
                    }
                />
            </div>
        )
    }
}

export default Inspo



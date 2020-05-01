import React, {Component} from 'react';
import ResumeHeader from "./Header";
import Avatar from "avataaars";

export default class BasePage extends Component {
    render() {
        return (
            <ResumeHeader name="Ulises Jimenez"
                          avatarStyle='Transparent'
                          topType='ShortHairDreads01'
                          accessoriesType='Blank'
                          hairColor='Black'
                          facialHairType='Blank'
                          clotheType='Hoodie'
                          clotheColor='PastelGreen'
                          eyeType='Default'
                          eyebrowType='Default'
                          mouthType='Grimace'
                          skinColor='Pale'
                          meta='Me'
                          description={'I\'m a software and data enthusiast 🤷🏻‍♂. Why not both? 🌮🌯️'}
            ></ResumeHeader>
        );
    }
}

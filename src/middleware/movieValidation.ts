import {body} from "express-validator";

export const movieCreateValidation = () => {
    return [
        body("title")
            .isString()
            .withMessage("The title is mandatory")
            .isLength({min: 5})
            .withMessage("The title needs al least 5 characters."),
        body("rating")
            .isNumeric()
            .withMessage("The rating value needs to be a number.")
            .custom((value: number) => {
                if (value < 0 || value > 10) {
                    throw new Error("The rating value needs to be between 0 and 10");
                }
                return true;
            }),
        body("description").isString().withMessage("The description is mandatory."),
        body("director").isString().withMessage("The director's name is mandatory."),
        body("poster").isURL().withMessage("The image needs to be an URL.")
    ];
}
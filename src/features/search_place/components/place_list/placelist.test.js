import { shallow } from "enzyme";
import { checkPropTypes } from "prop-types";

import { PlacesList } from ".";

describe("Places list test suite", () => {
    const MOCK_PLACES = [
        {
            name: "Hilton coffee shop",
            rating: 4.2,
            user_ratings_total: 241,
            place_id: "32sd2",
        },
        {
            name: "Starbucks",
            rating: 4.8,
            user_ratings_total: 1082,
            place_id: "36hed1",
        },
    ];

    it("render place list without errors", () => {
        shallow(<PlacesList places={MOCK_PLACES} />);
    });

    it("check prop types", () => {
        const propsError = checkPropTypes(
            PlacesList.propTypes,
            MOCK_PLACES,
            "props",
            PlacesList.name
        );
        expect(propsError).toBeUndefined();
    });

    it("validate rendered list items", () => {
        const wrapper = shallow(<PlacesList places={MOCK_PLACES} />);
        const placesListEle = wrapper.find('[data-testid="places-list"]');
        expect(placesListEle.children().length).toEqual(2);
    });

    it("validate a single list item", () => {
        const wrapper = shallow(<PlacesList places={MOCK_PLACES} />);
        const cardsWrapper = wrapper.find(
            '[data-testid="place-list-card-name"]'
        );
        expect(cardsWrapper.length).toEqual(2);
    });

    it("validate empty list", () => {
        const wrapper = shallow(<PlacesList />);
        const cardsWrapper = wrapper.find(
            '[data-testid="place-list-card-name"]'
        );
        expect(cardsWrapper.exists()).toBeFalsy();
    });
});

import { shallow } from "enzyme";

import { Fallback } from ".";

describe("Fallback widget test suite", () => {
    it("render fallback component without throwing errors", () => {
        shallow(<Fallback message={"No data found"} />);
    });

    it("render error message", () => {
        const ERROR_MESSAGE = "No data found";
        const wrapper = shallow(<Fallback message={ERROR_MESSAGE} />);
        const errorText = wrapper.find(`[data-testid='fallback-message']`);
        expect(errorText.contains(ERROR_MESSAGE)).toBeTruthy();
    });
});

import { shallow } from "enzyme";

import { SelectDropdown } from ".";

describe("Select dropdown test suite", () => {
    const MOCKED_OPTIONS = [
        { label: "Apple", value: "apple" },
        { label: "Orange", value: "orange" },
        { label: "Pineapple", value: "pineapple" },
        { label: "Mango", value: "mango" },
    ];
    const ONCHANGE_MOCKED = jest.fn();

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <SelectDropdown
                options={MOCKED_OPTIONS}
                onChange={ONCHANGE_MOCKED}
            />
        );
    });

    it("render props", () => {
        expect(wrapper.props().options[0]).toEqual(MOCKED_OPTIONS[0]);
    });

    it("renders react-select placeholder", () => {
        const selectElement = wrapper.find(`[data-testid='dropdown']`);
        expect(selectElement.props().placeholder).toEqual("Choose category");
    });

    it("On select dropdown value change", () => {
        const selectElement = wrapper.find(`[data-testid='dropdown']`);
        selectElement.simulate("change", {
            value: "apple",
            label: "Apple",
        });
        selectElement.simulate("change", {
            value: "mango",
            label: "Mango",
        });
        expect(ONCHANGE_MOCKED).toHaveBeenCalled();
        expect(ONCHANGE_MOCKED).toHaveBeenCalledWith({
            value: "apple",
            label: "Apple",
        });
        expect(ONCHANGE_MOCKED).toHaveBeenCalledTimes(2);
        expect(ONCHANGE_MOCKED).toHaveBeenCalledWith({
            value: "mango",
            label: "Mango",
        });
    });
});
